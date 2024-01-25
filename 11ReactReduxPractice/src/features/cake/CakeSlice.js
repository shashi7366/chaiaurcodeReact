import {createSlice} from "@reduxjs/toolkit";

const initialState={
    numOfCake:10
}

let cakeSlice=createSlice({
    name:'cake',
    initialState,
    reducers:{
        cakeOrdered:(state)=>{
            state.numOfCake--;
        },
        cakeRestored:(state,action)=>{
            state.numOfCake+=action.payload;
        }
    }
});

export default cakeSlice.reducer;
export const {cakeOrdered,cakeRestored}=cakeSlice.actions;