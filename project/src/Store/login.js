import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: "username",
    initialState:{
        username: ""
    },
    reducers: {
        tambahUsername(state, action){
            state.username = action.payload
        }
    }
})

export const { tambahUsername } = loginSlice.actions;

export default loginSlice.reducer;