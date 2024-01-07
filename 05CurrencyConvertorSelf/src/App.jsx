import { useState,useEffect } from 'react'
import './App.css'
import InputBox from "./components/InputBox"

function App() {
  let [currencyVal, setCurrencyVal] = useState({});
  let [currencyOption,setCurrencyOption]=useState();
  let[baseCurrency,setBaseCurrency]=useState("USD");
  let [targetCurrency,setTargetCurrency]=useState("USD");
  let [amount,setAmount]=useState(1);
  let [targetAmount,setTargetAmount]=useState(0);
  let [from,setFrom]=useState("From");
  let [to,setTo]=useState("To");



  useEffect(()=>{
    console.log(baseCurrency);
    fetch(`https://v6.exchangerate-api.com/v6/c1440267c7b295c683ad8818/latest/${baseCurrency}`)
    .then((res)=>{
      return res.json();
    })
    .then((res)=>{
      setCurrencyVal(res["conversion_rates"]);
      setCurrencyOption(Object.keys(res["conversion_rates"]));
    })
  },[baseCurrency]);

  

  return (
    <div className='flex flex-col items-center w-1/2  m-auto bg-white p-8 rounded-md border pt-8'>
      <h1 className="text-3xl text-black mb-4">Currency Convertor</h1>
      <InputBox
        label="From"
        options={currencyOption?currencyOption:["usd"]}
        amount={amount}
        onAmountChange={(val)=>{setAmount(val)}}
        onCurrencyChange={(cur)=>{setBaseCurrency(cur)}}
        currency={baseCurrency}
      />

      <InputBox
        label="To"
        options={currencyOption}
        amount={targetAmount}
        onCurrencyChange={(cur)=>{setTargetCurrency(cur)}}
        currency={targetCurrency}
      />

     <div className='w-1/2'>
     <button
      className='border rounded-md bg-[#7BD3EA] text-white text-3 py-2 w-3/5 mx-2'
      onClick={()=>{
        setTargetAmount(amount*Number(currencyVal[targetCurrency]));
      }}>
        Convert {baseCurrency} to {targetCurrency}
        </button>

        <button
        className='bg-[#3559E0] text-white border rounded-md p-2 mx-2'
        onClick={()=>{
          setAmount(targetAmount);
          setTargetAmount(amount);
          setFrom(to);
          setTo(from);
          setBaseCurrency(targetCurrency)
          setTargetCurrency(baseCurrency)
        }}
        >swap</button>
     </div>
    </div>
  )
}

export default App
