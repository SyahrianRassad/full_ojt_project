import {createSlice} from "@reduxjs/toolkit"
import c1 from "../asset/g1.jpg";
import c2 from "../asset/g2.jpeg";

const initialState = {
    mahasiswa: [
        {
          nama: "Syahrian",
          alamat: "Ponggok",
          jurusan: "RPL",
          gender: "Laki-laki",
          certificate: true,
          foto: c1
        },
        {
          nama: "Rassad",
          alamat: "Bendo",
          jurusan: "TKJ",
          gender: "Laki-laki",
          certificate: false
      },
      {
          nama: "Ramadhan",
          alamat: "Blitar",
          jurusan: "RPL",
          gender: "Laki-laki",
          certificate: true,
          foto: c2
      }
    ]
}

const userSlice = createSlice({
    name : "mahasiswa",
    initialState,
    reducers: {}
})

export default userSlice.reducer;