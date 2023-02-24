const amqp = require('amqplib/callback_api')

amqp.connect(`amqp://localhost`,(err, connection)=>{
    if(err)throw err;
    connection.createChannel((err, channel)=>{
        if(err)throw err;
        let quenName = "technical";
        channel.assertQueue(quenName, {
            durable: false
        });
        channel.consume(quenName, (msg) =>{
            console.log("Recevied : " + msg.content.toString())
            // channel.ack(msg)
        },{
            noAck : true
        })
    })
})