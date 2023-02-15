const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express();
const port = 3030;

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

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.send({
        message: "Tersambung"
    })
})

app.use("/mahasiswa", require("./mysql/rooters/mahasiswa.rooter"))
app.use("/mongodb", require("./mongodb/rooter/mahasiswa.router"))
app.listen(port, ()=> console.log(`App running ${port}`))