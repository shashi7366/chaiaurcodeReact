const {createSlice}=require("@reduxjs/toolkit");

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

module.exports=cakeSlice.reducer;
module.exports.cakeActions=cakeSlice.actions;