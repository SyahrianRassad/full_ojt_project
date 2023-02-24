// import { useState, React, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import axios from 'axios'

// import List from "./listMahasiswa";
import NavBar from "../component/navbar";


import './css/helper.css'

function Beranda(){

//   const mahasiswa = useSelector((state) => state.mahasiswa.mahasiswa) // data diambil melalui redux
//   const username = useSelector((state) => state.username.username)
//   const [mahasiswa2, setM] = useState([])

//   useEffect(()=>{
//     axios.get('http://localhost:3030/mahasiswa/data')
//     .then(res => {
//       console.log(res.data.mahasiswa)
//       setM(res.data.mahasiswa)
//     })
//     .catch(err => console.log(err))

//     // console.log(data)
//   },[])

//   console.log(mahasiswa2)

//   const arr = mahasiswa2.map(((data, index) =>{ //harusnya mahasiswa2
//     return (
//       <div className="">
//           <List
//               maha = {data}
//           />
//       </div>
//     )
//   }))
    return(
        <div className="background-image mt-5">
          <NavBar />
          <div className="container p-5">
            <div className="row">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    {/* {arr} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
    
}

// const mapStoreToProps = (state) => {
//   return{
//       username: state.username
//   }
// }

export default (Beranda)