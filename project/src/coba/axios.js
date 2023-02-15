import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

const api = axios.create({
    baseURL: 'http://localhost:3030/mahasiswa/data'
})

export default class Coba extends React.Component{
    state = {
        buku: []
    }

    // getData = () =>{
    //     axios.get('http://localhost:3500')
    //     .then(res => {
    //         console.log(res.data)
    //         this.setState({buku: res.data})
    //     })
    //     .catch(err =>{
    //         console.log(err)
    //     })
    // }
    
    constructor(){
        super()
            //menggunakan database yang diaktifkan melalui Xampp
        api.get('/').then(res =>{
            console.log(res.data)
            this.setState({buku: res.data.mahasiswa})
        })
    }   

        //menggunakan database yang diaktifkan melalui Xampp
    createCourse = async() =>{
        let res = await api.post('/', {id_buku: 3, nama_buku: "minecraft", pengarang: "Syahrian", tahun_terbit: 2023})
    }

        //menggunakan database yang diaktifkan melalui Xampp
    updateCourse = async() =>{
        let res = await api.put('/', {id_buku: 3, nama_buku: "MamamiaLezatos"})
    }

        //menggunakan database yang diaktifkan melalui Xampp
    deleteCourse = async() =>{
        let res = await api.delete(`/${3}`)
    }

    render(){
        return(
            <div>
                {/* {console.log(this.state.petugas)} */}
                <button onClick={this.createCourse}>Pencet saya boos</button>
                {this.state.buku.map(item => <h2>{item.nama}</h2>)}
                <button onClick={this.deleteCourse}>Hapus Data Terakhir</button>
                <button onClick={this.updateCourse}>Coba update</button><br /><br />
                <Link
                        to={"/beranda"}
                        className="btn btn-danger">
                        Kembali
                      </Link>
            </div>
        )
    }
}