import {useSelector,useDispatch} from "react-redux";
import {cakeOrdered, cakeRestored} from "./CakeSlice";
function Cake(){
    let num=useSelector((state)=>{
       // console.log(state);
        return state.cake.numOfCake;
    });

    let dispatch=useDispatch();

    return <div>
        <h1>Number of cakes- {num}</h1>
        <button
        onClick={()=>{
            dispatch(cakeOrdered())
        }}>order cake</button>
        <button
        onClick={()=>{
            dispatch(cakeRestored(2))
        }}>restock cake</button>
    </div>
}

export default Cake;