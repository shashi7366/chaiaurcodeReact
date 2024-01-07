import {useState,useEffect} from "react";


function useCurrencyInfo(currency){
    let [data,setData]=useState({});
useEffect(()=>{
    fetch(`https://v6.exchangerate-api.com/v6/c1440267c7b295c683ad8818/latest/${currency.toUpperCase()}`)
    .then((res)=>{
        //console.log(res);
        return res.json();
    }).then((res)=>{
        setData(res["conversion_rates"]);
        console.log("inside useEffect ",data);
    })
},[]);
console.log("outside useEffect ",data);
return data;
}

export default useCurrencyInfo;