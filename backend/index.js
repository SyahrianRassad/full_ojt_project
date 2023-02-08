const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();
const port = 3030;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res)=>{
    res.send({
        message: "Tersambung"
    })
})

app.use("/mahasiswa", require("./rooters/mahasiswa.rooter"))

app.listen(port, ()=> console.log(`App running ${port}`))