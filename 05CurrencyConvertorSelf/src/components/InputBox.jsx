

function InputBox({label,options=["USD"],amount,onAmountChange=null,onCurrencyChange,currency}){
    
    

    return <div className="flex justify-between border rounded-md border-solid border-black p-4 mb-4 w-full">
        <div className="flex flex-col justify-between w-1/2 items-start">
            <label>{label}</label>
            <input
            type="number"
            placeholder="amount"
            value={amount}
            onChange={(e)=>{onAmountChange && onAmountChange(e.target.value)}}
            />
        </div>

        <div className="w-1/2">
            <select value={currency}
            onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}>
                
                    {options.map((option)=>{
                        return <option key={option} value={option}>
                            {option}
                        </option>
                    })}
                
            </select>
        </div>
    </div>
}

export default InputBox;