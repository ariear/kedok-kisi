import Link from "next/link"
import Cookies from "js-cookie";
import { useEffect, useState } from "react"
import Router from 'next/router'

const Nav = () => {
    const [token,setToken ] = useState('')

    useEffect(() => {
        setToken(Cookies.get('token'))    
    }, []);

    const logoutHandle = () => {
        Cookies.remove('token')
        setToken('')

        Router.replace('/')
    }

    return (
        <nav className="flex items-center container mx-auto justify-between py-5 font-rubik tracking-wide xl:px-0 px-5">
            <Link href="/"><img src="TBM_Standard_FullRGB.png" className="sm:w-[150px]" /></Link>
            <ul className="sm:flex hidden items-center text-white text-sm">
                <li className="mr-7"><Link href="/">Home</Link></li>
                <li className="mr-7"><Link href="/exams">Kisi - kisi</Link></li>
                {
                    token &&
                    <li className="mr-7"><Link href="/addexam">Tambah Kisi Kisi</Link></li>
                }
                {
                    token ?  
                        <li className="mr-6"><p onClick={logoutHandle} className="py-3 px-9 bg-red-400 rounded-lg">Logout</p></li>
                          :
                        <li className="mr-6"><Link href="/login" className="py-3 px-9 bg-[#3B3486] rounded-lg">Login</Link></li>
                }
                <li className="h-[25px] w-[2px] bg-[#948787] mr-6"></li>
                <li><Link href="https://github.com/ariear"><img src="github.png" className="w-[35px]" /></Link></li>
            </ul>
        </nav>
    )
}

export default Nav