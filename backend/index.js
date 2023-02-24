const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const lodash = require('lodash')

const app = express();
const port = 3030;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//mongodb
const mongodb = mongoose.connection
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://localhost:27017",{
    useNewUrlParser:true,useUnifiedTopology:true
},(err)=>{
    if(err)console.log(err)
    else console.log("succesfully connected")
})
mongodb.on("error", (error) => console.log(error));
mongodb.once("open", () => {
  console.log("Mongo connection established");
});

//Redis
// const session = require('express-session')
// const connectRedis = require('connect-redis')
// const redis = require('redis');
// const client = redis.createClient({
//     port: 6379,
//     host: 'localhost'
// });

// const redisStore = connectRedis(session)
// 

//sceduller
const schedule = require("node-schedule")
const db = require("./mysql/db");

const tes = schedule.scheduleJob(' */3 * * * *', function(){
    const date = new Date()
    console.log("tes scheduler")
    console.log(date)

    db.query("insert into schedule_trainer set date = ?",date,(err,result)=>{
        if(err){
            console.log(err)
        }{
            console.log("berhasil input "+ date)
        }
    })
})

//RabbitMq
const { consumeQueue } = require('./rabbitmq/rabiitMqService');

app.use("/rabbit", require('./rabbitmq/rooter'))
consumeQueue('Testing', (ch,msg)=>{
    console.log('Succelfuly retrieve queue')
    const message = JSON.parse(msg.content.toString());
    const messageRabbitMq = lodash.get(message, "params.message");

    console.log('Message retrieved : ', messageRabbitMq)
    ch.ack(msg)
})



app.get("/", (req, res)=>{
    res.send({
        message: "Tersambung"
    })
})

app.use("/mahasiswa", require("./mysql/rooters/mahasiswa.rooter"))
app.use("/mongodb", require("./mongodb/rooter/mahasiswa.router"))
app.listen(port, ()=> console.log(`App running ${port}`))