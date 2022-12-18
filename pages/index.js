import MainContent from "../components/MainContent"

const Home = () => {
  return (
    <div>
      <div className="h-[70vh] flex justify-center items-center relative">
        <MainContent />
        <div className="blob1"></div>
        <div className="blob2"></div>
      </div>
    </div>
  )
}

export default Home
