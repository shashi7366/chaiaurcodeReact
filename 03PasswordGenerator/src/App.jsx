import { useState,useCallback,useEffect,useRef} from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(6);
  const [password, setPassword] = useState(6);
  const [numbersAllowed,setNumbersAllowed]=useState(false);
  const [charAllowed,setCharAllowed]=useState(false);

  let copyPassword=()=>{
    pass.current.select();
    window.navigator.clipboard.writeText(password);
  }

  let generatePassword=useCallback(()=>{
    console.log(charAllowed);
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let pwd="";

    if(numbersAllowed){
      str+="0123456789";
    }

    if(charAllowed){
      str+="!@$&%";
    }

    for(let i=1;i<=length;i++){
      let ind=Math.floor(Math.random()*str.length);
      pwd+=str.charAt(ind);
    }

    console.log(pwd);
    return pwd;
  },[length,numbersAllowed,charAllowed]);

  let pass=useRef();

  useEffect(()=>{
    let p=generatePassword();
    setPassword(p);
  },[length,numbersAllowed,charAllowed]);

  return (
    <div class="container">

      <h1 className='text-5xl pb-4'>Password Generator</h1>


      <div style={{ paddingTop: "1rem", paddingBottom: "2rem" }}>

        <input
          className="p-2 rounded-md w-80 mr-2 text-black"
          type="text"
          placeholder='password'
          value={password}
          ref={pass} />

        <button className="bg-indigo-500 color-white p-2 rounded-md" onClick={copyPassword}>Copy</button>
      </div>

      <div className="flex justify-center w-full">
        <div className="flex justify-center mx-4">
          <input
            className='mr-2'
            type="range"
            min="6"
            max="15"
            value={length}
            onChange={(e)=>{
              setLength(e.target.value);
            }}/>
          <label>length:{length}</label>
        </div>

        <div className='flex justify-center mx-4'>
          <input
            className=''
            type="checkbox"
            defaultChecked={numbersAllowed}
            value={numbersAllowed}
            onChange={()=>{
              setNumbersAllowed((p)=>{
                return !p;
              });
            }}/>
          <label>numbers allowed</label>
        </div>

        <div className='flex justify-center mx-4'>
          <input
            className=''
            type="checkbox"
            defaultChecked={charAllowed}
            value={charAllowed}
            onChange={()=>{
              setCharAllowed((p)=>{
               return !p;
              });
            }}/>
          <label>special characters allowed</label>
        </div>
      </div>

    </div>
  )
}

export default App
