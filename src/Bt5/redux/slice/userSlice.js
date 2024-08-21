import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const login = createAsyncThunk("login", async (inforLogin) =>{
    const res = await axios.get("http://localhost:3001/useList");
    return {
        users: res.data,
        inforLogin: inforLogin,
    };
});

const userSlice = createSlice({
    name : "user",
    initialState : {
        isLoading : false,
        useList : [],
        isError : false
    },
    extraReducers:(builder) =>{
        builder.addCase(login.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            let user = action.payload.users.find(
                (user) =>
                    user.email === action.payload.inforLogin.email &&
                    user.password === action.payload.inforLogin.password
            );
            if (!user) {
                alert("Email or password was wrong" , "error");
            }else{
                
                alert("Login success");
            }
            console.log("action", action.payload)
        })
        builder.addCase(login.rejected, (state) =>{
            state.isLoading = false
            state.isError = true
        })
    }
})

export default userSlice.reducer