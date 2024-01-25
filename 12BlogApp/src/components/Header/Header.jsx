import { useSelector } from "react-redux";
import Logout from "./Logout";
import {NavItem} from "../containers";
import {Link} from "react-router-dom";

function Header() {

    const isLoggedIn=useSelector((state)=>{
        return state.auth.status;
    });

    const navItems=[
        {
            name:'home',
            link:'/',
            isActive:true
        },
        {
            name:'sign up',
            link:'/sign-up',
            isActive:!isLoggedIn
        },
        {
            name:'login',
            link:'/login',
            isActive:!isLoggedIn
        },
        {
            name:'all posts',
            link:'/allPosts',
            isActive:isLoggedIn
        }
    ]

    return <div>
        <div>

            <div className="flex px-2 bg-[#F4CE14] w-full sticky top-0 left-0 h-20 items-center border-b-2 border-black z-20">

                <div className="w-1/2 flex justify-start items-center pl-16">
                <div className='text-2xl border rounded-full bg-white p-2'><span className='text-red-600'>B</span><span className='text-blue-500'>l</span><span className='text-green-500'>o</span><span className='text-yellow-300'>g</span></div>
                </div>

                <div className="w-1/2 flex justify-end items-center pr-8">
                    

                    {/* {!isLoggedIn?<NavItem>login</NavItem>:
                    <Logout/>} */}

                    {navItems.map((item)=>{
                        return  (item.isActive)?(<NavItem key={item.name}><Link to={item.link}>{item.name}</Link></NavItem>):(null);
                    })}

                    {isLoggedIn && <Logout/> }

                    <div><button className="text-white bg-black p-2 border rounded-full px-4 font-thin">get started</button></div>

                </div>
            </div>


            {/* For not fixed part */}
            <div>

            </div>

        </div>
    </div>
}

export default Header;