import { useState, React, useEffect } from "react";
import { Link } from "react-router-dom";

export default function List(props){
    const [mahasiswa] = useState(props.maha)
    return(
        <div className="card w-50 mb-3">
            <div className="card-body">
                <div role='m-nama'>{(mahasiswa.nama)}</div>
                <div role='m-alamat'>{(mahasiswa.alamat)}</div>
                <div role='m-jurusan'>{(mahasiswa.jurusan)}</div>
                <div role='m-gender'>{(mahasiswa.gender)}</div>
                {/* <div>{console.log(mahasiswa)}</div> */}
            </div>
                <Link class="nav-link btn btn-success" 
                    state = {{mahasiswa: mahasiswa}}
                    to="/detail">
                    Detail
                </Link>
        </div>
    )
}