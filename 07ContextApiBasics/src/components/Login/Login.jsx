import { useState,useContext } from "react";
import UserContextProvider from "../../contexts/userContext/UserContextProvider";
import UserContext from "../../contexts/userContext/UserContext"

function Login(){
    
    let [userName,setUserName]=useState('');
    let [password,setPassword]=useState('');

    let {setUser}=useContext(UserContext);


    return(
        <div>
            <input
             placeholder="user-name" 
             value={userName}
             onChange={(e)=>{setUserName(e.target.value)}}/>
            <input
            placeholder="password"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value);
            }}/>
            <button 
            onClick={()=>{
                setUser(userName);
            }}>Login</button>
        </div>
    )
}

export default Login;