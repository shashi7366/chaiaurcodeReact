const {createSlice, createAsyncThunk}=require("@reduxjs/toolkit")

const initialState={
    loading:false,
    data:[],
    error:''
};

const fetchUsers=createAsyncThunk('users/fetchUsers',()=>{
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{
        return res.json();
    }).then((res)=>{
        return res;
    }).catch((err)=>{
        return err;
    })
});

const userSlice=createSlice({
    name:'users',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.pending,(state)=>{
            state.loading=true
        });
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.loading=false;
            state.data=action.payload;
        });

        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.loading=false;
            state.data=[];
            state.error=action.payload;
        })
    }
})

module.exports=userSlice.reducer;
module.exports.fetchUsers=fetchUsers;