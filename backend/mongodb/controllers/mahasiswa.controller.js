const {MongoClient, Double} = require('mongodb');
const url = "mongodb://localhost:27017"
const client = new MongoClient(url)

exports.getMahasiswa = async (req,res)=>{
  const cursor = await client.db("mahasiswa").collection("mahasiswa").find({})
  const result = await cursor.toArray()
  try {
    res.status(200).json({
        message: 'Tampil',
        status: true,
        mahasiswa: result
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.postMahasiswa = async (req,res)=>{
  const cursor = await client.db("mahasiswa").collection("mahasiswa").find({})
  const data = await cursor.toArray()
  let id = 0;
  try {
    for(var i=0;i<data.length;i++){
      if(data[i].id == id)id++
      
    }
  
    const newData = {
      id: id,
      nama : req.body.nama,
      alamat : req.body.alamat,
      jurusan : req.body.jurusan,
      gender : req.body.gender,
      sertifikat : req.body.sertifikat,
  }
    const result = await client.db("mahasiswa").collection("mahasiswa").insertOne(newData)

    res.status(200).json({
        message: 'Data berhasil ditambahkan',
        status: true,
        id: id
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.putMahasiswa = async (req,res)=>{
  const id = new Double(req.params.id)
  const newData = {
    nama : req.body.nama,
    alamat : req.body.alamat,
    jurusan : req.body.jurusan,
    gender : req.body.gender,
    sertifikat : req.body.sertifikat,
  }
  const result = await client.db("mahasiswa").collection("mahasiswa").updateOne({id: id}, {$set: newData})
  try {
    res.status(200).json({
        message: 'Data berhasil diupdate',
        status: true,
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

exports.deleteMahasiswa = async (req,res)=>{
  const id = new Double(req.params.id)
  const result = await client.db("mahasiswa").collection("mahasiswa").deleteOne({id: id})
  try {
    res.status(200).json({
        message: 'Data berhasil dihapus',
        status: true,
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}