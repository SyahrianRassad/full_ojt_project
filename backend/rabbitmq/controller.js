const { produceQueue } = require("./rabiitMqService")

const TestProduceQueue = async (req, res)=>{
    try {
        const message = {
            name: "fireGamma"
        }
        produceQueue(message, "Testing", (err, res) =>{
            if(err) throw err;
            console.log(res)
        })
        console.log(res)
        // BaseResponse.successResponse(res, 'Success', "TRX1234567");
    } catch (error) {
        console.log(error)
    }
}

const consummerRabbitMQTest = (ch,msg)=>{
    console.log('Succelfuly retrieve queue')
    const message = JSON.parse(msg.content.toString());
    const messageRabbitMq = get(message, "params.message");

    console.log('Message retrieved : ', messageRabbitMq)
    ch.ack(msg)
}

module.exports =  {
    TestProduceQueue,
    consummerRabbitMQTest
}