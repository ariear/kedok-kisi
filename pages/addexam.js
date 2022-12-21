import Layout from "../components/Layout"
import { authpage } from "../middleware/authpage"

export function getServerSideProps(ctx){
    authpage(ctx)
    
    return {
        props: {}
    }
}


const AddExamPage = () => {
    return (
        <Layout title="Add New Exam" >
            <p>Tambah Kisi Kisi</p>
        </Layout>
    )
}

export default AddExamPage