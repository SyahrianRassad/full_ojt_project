import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './css/beranda.css'

import NavBar from "./navbar";

export default function Detail(){
  const dt = useLocation()
  const mahasiswa = dt.state.mahasiswa
  return(
    <div className="background-image mt-5">
      <NavBar />
      <div className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">Detail Mahasiswa</div>
                <div className="card-body">
                {/* <div>{console.log(this.state.mahasiswa)}</div> */}
                  <Link class="position-absolute top-10 end-0 nav-link btn btn-secondary" 
                      to="/beranda">
                      Kembali
                  </Link>
                    <div>
                      <div className="text-center">{mahasiswa.nama}</div>
                      <div className="text-center">{mahasiswa.alamat}</div>
                      <div className="text-center">{mahasiswa.jurusan}</div>
                      <div className="text-center">{mahasiswa.gender}</div>
                      {mahasiswa.certificate ?
                        (
                          <div className="card">
                            <div className="card-body">
                                <img src={mahasiswa.foto} className="card-img" />
                            </div>
                        </div>
                        ) : null
                      }
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
    

    // getMahasiswa = () =>{
    //   let m = this.state.mahasiswa
    //   let dt = JSON.parse(localStorage.getItem("mahasiswa"))
    //   this.setState({mahasiswa: [...m, dt]})
    // }

    // componentDidMount(){
    //   this.getMahasiswa()
    // }
}