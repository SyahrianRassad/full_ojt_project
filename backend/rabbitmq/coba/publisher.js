const amqp = require('amqplib/callback_api')

amqp.connect(`amqp://localhost`,(err, connection)=>{
    if(err)throw err;
    connection.createChannel((err, channel)=>{
        if(err)throw err;
        let quenName = "technical";
        let message = "This is technical prosses"
        channel.assertQueue(quenName, {
            durable: false
        });
        channel.sendToQueue(quenName, Buffer.from(message));
        console.log(`message : ${message}`)
        setTimeout(()=>{
            connection.close()
        }, 1000)
    })
})