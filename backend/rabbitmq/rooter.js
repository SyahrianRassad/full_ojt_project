const express = require('express')
const router = express.Router()

const { 
    TestProduceQueue
} = require("./controller")

router.route('/').get(TestProduceQueue)

router.get("/test", (req,res)=>{
    res.send({
        message: "Data berhasil masuk"
    })
})

module.exports = router;
