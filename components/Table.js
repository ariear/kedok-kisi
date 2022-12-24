const Table = ({ exams, keyword, keywordChange }) => {
    return (
        <div className="bg-[#3B3486] text-white mb-20 sm:w-[80vw] w-[95vw] relative overflow-auto mx-auto rounded-lg p-7 font-rubik">
            <div className="bg-[#A3A0C3] flex w-[300px] px-3 py-2 rounded-lg mb-5">
                <img src="search.png" className="mr-2" />
                <input type="text" value={keyword} onChange={(event) => keywordChange(event.target.value)} className="bg-transparent w-full text-black placeholder:text-gray-100" placeholder="Cari berdasarkan Mapel" />
            </div>
            <table className="table-auto w-full">
                <thead className="border-b-4">
                    <tr>
                        <th className="text-left py-3 px-3">No</th>
                        <th className="text-left py-3 px-3">Mata Pelajaran</th>
                        <th className="text-left py-3 px-3">Kelas</th>
                        <th className="text-left py-3 px-3">Jurusan</th>
                        <th className="text-left py-3 px-3">Unduh</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        exams.filter((exam) => {
                    if (keyword === '') {
                        return exam
                    }else if (exam.subject.toLowerCase().includes(keyword.toLowerCase())) {
                        return exam
                    }
                    return false
                    }).map((exam,index) => (
                            <tr key={exam._id} className="border-b hover:bg-gray-700 transition-all">
                                <td className="py-4 px-3">{ index + 1 }</td>
                                <td className="py-4 px-3">{ exam.subject }</td>
                                <td className="py-4 px-3">{ exam.class }</td>
                                <td className="py-4 px-3">{ exam.major }</td>
                                <td className="py-4 px-3"><a href={`/${exam.pdf}`} download>Download PDF</a></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>   
        </div>
    )
}

export default Table