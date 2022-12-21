import axios from "axios"
import Layout from "../components/Layout"
import Table from "../components/Table"

export async function getServerSideProps() {
    const { data } = await axios.get('http://localhost:3000/api/exams')

    return {
        props: {
            exams: data.data
        }
    }
}

const Exams = ({ exams }) => {
    return (
        <Layout title="Daftar Kisi Kisi" >
            <div className="pt-10">
                <h1 className="text-center text-2xl font-semibold font-rubik text-white mb-10">Daftar Kisi - Kisi</h1>
                <Table exams={exams} />
            </div>
        </Layout>
    )
}

export default Exams