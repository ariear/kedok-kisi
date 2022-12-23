import Link from "next/link"

const MainContent = () => {
    return (
        <div className="text-white w-max text-center mx-auto font-inter relative z-10 sm:px-0 px-4">
            <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-[36px] text-[26px] font-black xl:w-[1200px] lg:w-[1000px] md:w-[750px] sm:w-[600px] mx-auto mb-6">Selamat Datang Di Website Kisi-Kisi Sekolah Dan Selamat Belajar.</h1>
            <p className="xl:w-[800px] lg:w-[750px] md:w-[500px] sm:w-[500px] w-[80vw] mx-auto text-sm sm:text-base lg:text-lg mb-7">Di website ini anda bisa mengakses kisi-kisi PAS yang ada di SMK Parakacuk, tetapi kisi-kisi hanya untuk latihan menjelang PAS ya kalau kamu ingin membeli soal juga bisa sih awokawok</p>
            <p className="py-3 px-8 bg-[#3B3486] w-max mx-auto lg:text-lg rounded-lg"><Link href="/exams">Lihat kisi-kisi</Link></p>
        </div>
    )
}

export default MainContent