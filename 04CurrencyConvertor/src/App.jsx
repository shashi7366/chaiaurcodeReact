import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'
import InputBox from './components/InputBox'

function App() {
  let [amount, setAmount] = useState(0);
  let [convertedValue,setConvertedValue]=useState(0);
  let [baseCurrency,setBaseCurrency]=useState("USD");
  let [targetCurrency,setTargetCurrency]=useState("INR");

  let data = useCurrencyInfo("usd");
  let options = Object.keys(data);
  console.log(data);

  let fetchList=(val)=>{
    useCurrencyInfo(val);
    setBaseCurrency(val);
  }

  return (
    <div className='min-w-screen min-h-screen bg-rupees bg-center flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center bg-white w-3/4 border border-solid rounded-md p-8'>
        <InputBox
          label="From"
          amount={amount}
          onAmountChange={(e)=>{setAmount(e)}}
          onCurrencyChange={(e)=>{fetchList(e);}}
          selectCurrency={baseCurrency}
          amountDisable={false}
          currencyDisable={false}
          className='border border-solid w-full'
          currencyOption={options} />
        <button className='bg-[#4CB9E7] rounded-md px-4 py-2 swap'>swap</button>
        <InputBox
          label="To"
          amount={convertedValue}
          // onAmountChange={}
          onCurrencyChange={(e)=>{setTargetCurrency(e)}}
          selectCurrency={targetCurrency}
          amountDisable={true}
          currencyDisable={false}
          currencyOption={options}
          className='border border-solid w-full bot'
        />

        <button className='bg-[#4CB9E7] p-4 w-1/2 rounded-md' onClick={()=>{setConvertedValue(amount*data[targetCurrency])}}>Convert {baseCurrency} to {targetCurrency}</button>

      </div>
    </div>
  )
}

export default App
