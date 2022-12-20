import axios from "axios"
import { useEffect } from "react"
import Table from "../components/Table"

export async function getStaticProps() {
    const { data } = await axios.get('http://localhost:3000/api/exams')

    return {
        props: {
            exams: data.data
        }
    }
}

const Exams = ({ exams }) => {
    return (
        <div className="pt-10">
            <h1 className="text-center text-2xl font-semibold font-rubik text-white mb-10">Daftar Kisi - Kisi</h1>
            <Table exams={exams} />
        </div>
    )
}

export default Exams