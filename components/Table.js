const Table = () => {
    return (
        <div className="bg-[#3B3486] text-white mb-20 w-[80vw] mx-auto rounded-lg p-7 font-rubik">
            <div className="bg-[#A3A0C3] flex w-[300px] px-3 py-2 rounded-lg mb-5">
                <img src="search.png" className="mr-2" />
                <input type="text" className="bg-transparent w-full text-black" />
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
                    <tr className="border-b hover:bg-gray-700 transition-all">
                        <td className="py-4 px-3">1</td>
                        <td className="py-4 px-3">Mtk</td>
                        <td className="py-4 px-3">XII</td>
                        <td className="py-4 px-3">RPL</td>
                        <td className="py-4 px-3">Download PDF</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-700 transition-all">
                        <td className="py-4 px-3">1</td>
                        <td className="py-4 px-3">Mtk</td>
                        <td className="py-4 px-3">XII</td>
                        <td className="py-4 px-3">RPL</td>
                        <td className="py-4 px-3">Download PDF</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-700 transition-all">
                        <td className="py-4 px-3">1</td>
                        <td className="py-4 px-3">Mtk</td>
                        <td className="py-4 px-3">XII</td>
                        <td className="py-4 px-3">RPL</td>
                        <td className="py-4 px-3">Download PDF</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-700 transition-all">
                        <td className="py-4 px-3">1</td>
                        <td className="py-4 px-3">Mtk</td>
                        <td className="py-4 px-3">XII</td>
                        <td className="py-4 px-3">RPL</td>
                        <td className="py-4 px-3">Download PDF</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-700 transition-all">
                        <td className="py-4 px-3">1</td>
                        <td className="py-4 px-3">Mtk</td>
                        <td className="py-4 px-3">XII</td>
                        <td className="py-4 px-3">RPL</td>
                        <td className="py-4 px-3">Download PDF</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-700 transition-all">
                        <td className="py-4 px-3">1</td>
                        <td className="py-4 px-3">Mtk</td>
                        <td className="py-4 px-3">XII</td>
                        <td className="py-4 px-3">RPL</td>
                        <td className="py-4 px-3">Download PDF</td>
                    </tr>
                    <tr className="border-b hover:bg-gray-700 transition-all">
                        <td className="py-4 px-3">1</td>
                        <td className="py-4 px-3">Mtk</td>
                        <td className="py-4 px-3">XII</td>
                        <td className="py-4 px-3">RPL</td>
                        <td className="py-4 px-3">Download PDF</td>
                    </tr>
                </tbody>
            </table>   
        </div>
    )
}

export default Table