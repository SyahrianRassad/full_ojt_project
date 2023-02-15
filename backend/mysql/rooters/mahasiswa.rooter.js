const express = require('express')
const router = express.Router()

const { 
    getMahasiswa ,
    postMahasiswa,
    putMahasiswa,
    deleteMahasiswa
} = require("../controllers/mahasiswa.controller")

router.route('/data').get(getMahasiswa)
router.route('/input').post(postMahasiswa)
router.route('/update').put(putMahasiswa)
router.route('/delete/:id').delete(deleteMahasiswa)

router.get("/", (req,res)=>{
    res.send({
        message: "Data berhasil masuk"
    })
})

module.exports = router;
