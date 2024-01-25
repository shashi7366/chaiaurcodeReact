import {configureStore} from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/CakeSlice";
import userReducer from "../features/users/users";


const store=configureStore({
    reducer:{
        cake:cakeReducer,
        users:userReducer
    }
});

export default store;