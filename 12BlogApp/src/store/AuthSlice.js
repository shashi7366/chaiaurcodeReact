import {createSlice} from "@reduxjs/toolkit";

const initialState={
    status:true,
    userData:null
}

const authSlice=createSlice({
    name:'auths',
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload;
        },

        logout:(state,action)=>{
            state.status=false;
            state.userData=null;
        }
    }
});

export default authSlice.reducer;

export const {login,logout}=authSlice.actions;