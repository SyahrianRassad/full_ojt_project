const Amqp = require('amqplib/callback_api')
const { isEmpty } = require('lodash')

//initialization Defaulth config in localhost
const rabbitConfig = {
    url: 'amqp://guest:guest@localhost',
    exchangeName: 'ojt_exchange_queue'
}

const connectionRabbitMq = function (main){
    Amqp.connect(rabbitConfig.url, function (err, conn){
        if(err)console.log(err, "Connection RabbitMq Error");
        main(conn)
    })
}

//produce queue
const sendToQueue = function(
    conn,
    quenName,
    exchangeName,
    message,
    callback
){
    return conn.createConfirmChannel(function (err,ch){
        ch.assertExchange(exchangeName, "direct");
        const params = {
            message: message,
        };
        ch.publish(
            exchangeName,
            quenName,
            new Buffer(JSON.stringify({ request: message.request, params: params}))
        );
        return callback
    })
}

const produceQueue = function(message, quenName, callback){
    connectionRabbitMq(
        function(conn){
            return sendToQueue(
                conn,
                quenName,
                rabbitConfig.exchangeName,
                message,
                function(){
                    console.log("Successfuly send que to message broker");
                    return callback(null, "Transaction is being processed")
                }
            )
        }
    )
}

//consume queue
const consumeQueue = (qName, receiveHandler)=>{
    let prefecthAmount = 2;
    connectionRabbitMq((conn)=>{
        const exName = rabbitConfig.exchangeName;
        conn.createChannel((err, ch)=>{
            ch.assertExchange(exName, "direct");
            ch.assertQueue(qName, {durable: true}, (err, q) =>{
                if(err){
                    console.log(err, "Waiting for Queue Error")
                    throw err;
                }
                ch.bindQueue(q.queue, exName, qName);
                // ch.prefecth(prefecthAmount);
                ch.consume(
                    q.queue,
                    async(msg)=>{
                        try{
                            if(isEmpty(msg)){
                                console.log("Waiting for Queue")
                            }else{
                                await receiveHandler(ch, msg)
                            }
                        }catch(error){
                            console.log(error, "Error When consume Queue")
                        }
                    },{
                        noAck: false
                    }
                )
            })
        })
    })
}

module.exports ={
    sendToQueue,
    produceQueue,
    consumeQueue
}