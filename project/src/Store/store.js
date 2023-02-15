import { configureStore } from '@reduxjs/toolkit'
import mahasiswaReducer from './mahasiswa'
import loginReducer from './login'

export default configureStore({
  reducer: {
    mahasiswa: mahasiswaReducer,
    username: loginReducer
  },
})