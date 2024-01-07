import { useLoaderData } from "react-router-dom";


function Github(){
    let data=useLoaderData();
    console.log(data);
    return <div className="p-8 flex justify-start bg-black">
       <div className="flex flex-col h-48 justify-around">
        <img src={data["avatar_url"]} alt="github pic" className="w-24 h-24 rounded-full" />
        <h2 className="text-white">{data["login"]}</h2>
       </div>
    </div>
}

async function fetchFromGithub(){
    console.log("loader called me");
  return fetch("https://api.github.com/users/shashi7366")
    .then((res)=>{
    return res.json();
    })
    .then((res)=>{
        return res;
    })
}

export default Github;

export {fetchFromGithub};