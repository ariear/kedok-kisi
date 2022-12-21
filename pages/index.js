import Layout from "../components/Layout"
import MainContent from "../components/MainContent"

const Home = () => {
  return (
    <Layout title="KEDOK KISI" >
      <div className="h-[70vh] flex justify-center items-center relative">
        <MainContent />
        <div className="blob1"></div>
        <div className="blob2"></div>
      </div>
    </Layout>
  )
}

export default Home
