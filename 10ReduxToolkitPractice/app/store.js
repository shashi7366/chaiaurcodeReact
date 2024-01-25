const {configureStore}=require("@reduxjs/toolkit");
const cakeReducer=require("../features/cake/CakeSlice");
const userReducer=require("../features/users/users");
const {fetchUsers}=require("../features/users/users");

const store=configureStore({
    reducer:{
        cake:cakeReducer,
        users:userReducer
    }
});

module.exports=store;