const db = require("../db")

module.exports ={
    getMahasiswa : (req,res)=>{
        db.query(`select * from mahasiswa`,(err,result)=>{
            if(err){
                console.log(err)
                res.status(500).json({
                    message: "Internal error"
                })
            }else{
                if(result.length>0){
                    res.status(200).json({
                        message: 'Tampil',
                        mahasiswa: result
                    })
                }
            }
        })
    },
    postMahasiswa : (req,res)=>{
        const newData = {
            nama : req.body.nama,
            alamat : req.body.alamat,
            jurusan : req.body.jurusan,
            gender : req.body.gender,
            sertifikat : req.body.sertifikat,
        }
        db.query(`insert into mahasiswa set?`,newData,(err,result)=>{
            if(err){
                console.log(err)
                res.status(500).json({
                    message: "Internal error"
                })
            }else{
                res.status(201).json({
                    message: 'Data baru telah ditambahkan',
                    mahasiswa: newData
                })
            }
            
        })
    },
    putMahasiswa : (req,res)=>{
        const {
            id,
            nama,
            alamat,
            jurusan,
            gender,
            sertifikat
        } = req.body
        const url = `update mahasiswa set 
        nama = '${nama}', 
        alamat = '${alamat}', 
        gender = '${gender}', 
        jurusan = '${jurusan}', 
        sertifikat = '${sertifikat}'
        where id_mahasiswa = '${id}'`

        db.query(url,(err,result)=>{
            if(err){
                console.log(err)
                res.status(500).json({
                    message: "Internal error"
                })
            }else{
                res.status(201).json({
                    message: `Data dengan id ${id} telah diperbarui`
                })
            }
        })
    },
    deleteMahasiswa : (req,res)=>{
        const id = req.params.id
        db.query(`delete from mahasiswa where id_mahasiswa = ${id}`,(err,result)=>{
            if(err){
                console.log(err)
                res.status(500).json({
                    message: "Internal error"
                })
            }else{
                res.status(200).json({
                    message: `Data dengan id ${id} telah dihapus`
                })
                
            }
        })
    },
}