import {useSelector, useDispatch} from "react-redux";
import { fetchUsers } from "./users";
import { useEffect } from "react";

function Users(){

    let users=useSelector((state)=>{
        return state.users;
    });

    let dispatch=useDispatch();

    useEffect(()=>{
        console.log("use effect got called");
        dispatch(fetchUsers());
    },[]);

    return <div>

        <h1>List of users</h1>
        <ul>{
           users.loading?<div>loading....</div>:users.data.map((user)=>{
                return <li>{user["name"]}</li>
            })
        }
        </ul>
    </div>

}

export default Users;