import axios from "axios"
import Router from "next/router"
import { useState } from "react"
import Layout from "../components/Layout"
import { authpage } from "../middleware/authpage"

export function getServerSideProps(ctx){
    const token = authpage(ctx)
    
    return {
        props: {
            token
        }
    }
}


const AddExamPage = ({ token }) => {
    const [fields, setFields] = useState({
        subject: '',
        classExam: '',
        major: '',
        pdf: 'anjir test'
    })

    const AddExamHandler = async (e) => {
        e.preventDefault()

        const addexamReq = await axios.post('/api/exams/create', fields,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (addexamReq.status === 200) {
            Router.replace('/exams')
        }
    }

    return (
        <Layout title="Add New Exam" >
            <div className="py-20">
                <form onSubmit={(e) => AddExamHandler(e)} className="bg-[#3B3486] sm:p-10 p-5 md:w-[700px] w-[90vw] mx-auto rounded-lg text-white font-rubik">
                    <h1 className="text-center text-3xl font-semibold mb-10">Tambah Kisi - Kisi</h1>
                    <div className="mb-5">
                        <p className="mb-2">Mata Pelajaran</p>
                        <input type="text" className="bg-[#A3A0C2] w-full p-3 rounded-lg" value={fields.subject} onChange={(e) => setFields({...fields, subject: e.target.value})} />
                    </div>
                    <div className="mb-5">
                        <p className="mb-2">Kelas</p>
                        <input type="text" className="bg-[#A3A0C2] w-full p-3 rounded-lg" value={fields.classExam} onChange={(e) => setFields({...fields, classExam: e.target.value})} />
                    </div>
                    <div className="mb-5">
                        <p className="mb-2">Jurusan</p>
                        <input type="text" className="bg-[#A3A0C2] w-full p-3 rounded-lg" value={fields.major} onChange={(e) => setFields({...fields, major: e.target.value})} />
                    </div>
                    <div className="mb-10">
                        <p className="mb-2">Kisi - Kisi PDF</p>
                        <input type="file" className="bg-[#A3A0C2] w-full p-3 rounded-lg" />
                    </div>
                    <button className="bg-[#2B3A55] w-full py-3 rounded-lg font-semibold">Simpan</button>
                </form>
            </div>
        </Layout>
    )
}

export default AddExamPage