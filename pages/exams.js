import axios from "axios"
import { useState } from "react"
import Layout from "../components/Layout"
import Table from "../components/Table"

export async function getServerSideProps() {
    const { data } = await axios.get('https://kedok-kisi.vercel.app/api/exams')

    return {
        props: {
            exams: data.data
        }
    }
}

const Exams = ({ exams }) => {
    const [keyword,setKeyword] = useState('')
    
    const onKeywordChangeHandler = (keyword) => {
        setKeyword(keyword)
    }

    return (
        <Layout title="Daftar Kisi Kisi" >
            <div className="pt-10">
                <h1 className="text-center text-2xl font-semibold font-rubik text-white mb-10">Daftar Kisi - Kisi</h1>
                <Table exams={exams} keyword={keyword} keywordChange={onKeywordChangeHandler} />
            </div>
        </Layout>
    )
}

export default Exams