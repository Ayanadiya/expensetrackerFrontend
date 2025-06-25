import { createSlice } from "@reduxjs/toolkit";

const initialAuthState={
    isAuth:false,
    token:null,
};

const authSlice=createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        login(state,action)
        {
            state.isAuth=true;
            state.token=action.payload;
        },
        logout(state){
            state.isAuth=false;
            state.token=null;
        }
    }
});

export const authActions=authSlice.actions;

export default authSlice.reducer;