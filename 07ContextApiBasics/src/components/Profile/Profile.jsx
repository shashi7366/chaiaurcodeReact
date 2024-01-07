import { useContext } from "react";
import UserContextProvider from "../../contexts/userContext/UserContextProvider";
import UserContext from "../../contexts/userContext/UserContext";

function Profile(){
    let {user}=useContext(UserContext);

    if(!user){
        return <div>
            Please Login!
        </div>
    }else{
        return <div>
            Hi {user}!
        </div>
    }
}

export default Profile;