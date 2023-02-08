const mysql = require('mysql')

const db = mysql.createConnection({
    host: "localhost",
    password: "",
    user: "root",
    database: "ojt_trainer"
})

db.connect(err =>{
    if(err)console.log(err.message)
    else console.log("Koneksi berhasil")
})

module.exports =db;