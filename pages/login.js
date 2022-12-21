import { useState } from "react"
import Router from "next/router"
import axios from "axios"
import Cookies from "js-cookie"
import Layout from "../components/Layout"
import { unAuthPage } from "../middleware/authpage"

export function getServerSideProps(ctx){
    unAuthPage(ctx)

    return { props: {} }
}

const LoginPage = () => {
    const [fields, setFields] = useState({
        email: '',
        password: ''
    })

    const loginHandle = async (event) => {
        event.preventDefault();
        const loginReq = await axios.post('/api/auth/login', fields)
        if (loginReq.status === 200) {
            Cookies.set('token', loginReq.data.token)
            Router.replace('/')
        }
    }

    return (
        <Layout title="Login" >
            <div className="py-20">
                <form onSubmit={(event) => loginHandle(event)} className="bg-[#3B3486] p-10 w-[700px] mx-auto rounded-lg text-white font-rubik">
                    <h1 className="text-center text-3xl font-semibold mb-10">Login</h1>
                    <div className="mb-5">
                        <p className="mb-2">Email</p>
                        <input type="email" className="bg-[#A3A0C2] w-full p-3 rounded-lg" value={fields.email}  onChange={(e) => setFields({...fields, email: e.target.value})} />
                    </div>
                    <div className="mb-10">
                        <p className="mb-2">Password</p>
                        <input type="password" className="bg-[#A3A0C2] w-full p-3 rounded-lg" value={fields.password}  onChange={(e) => setFields({...fields, password: e.target.value})} />
                    </div>
                    <button className="bg-[#2B3A55] w-full py-3 rounded-lg font-semibold">Login</button>
                </form>
            </div>
        </Layout>
    )
}

export default LoginPage