import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Beranda from "./component2/beranda";
import Detail from "./component2/mahasiswaD";
import Login from "./component2/login";
import Coba from "./coba/tampilan"

class App extends Component{
  render(){
    return(
      <div>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/coba" element={<Coba />} />
          {/* <Route path="/data" element={<Data />} /> */}
        </Routes>
      </div>
    );
  }
}

export default App;
