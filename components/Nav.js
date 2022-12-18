import Link from "next/link"

const Nav = () => {
    return (
        <nav className="flex items-center container mx-auto justify-between py-5 font-rubik tracking-wide">
            <Link href="/"><img src="TBM_Standard_FullRGB.png" className="w-[150px]" /></Link>
            <ul className="flex items-center text-white text-sm">
                <li className="mr-7"><Link href="/">Home</Link></li>
                <li className="mr-7"><Link href="/exams">Kisi - kisi</Link></li>
                <li className="mr-6"><a className="py-3 px-9 bg-[#3B3486] rounded-lg">Login</a></li>
                <li className="h-[25px] w-[2px] bg-[#948787] mr-6"></li>
                <li><Link href="https://github.com/ariear"><img src="github.png" className="w-[35px]" /></Link></li>
            </ul>
        </nav>
    )
}

export default Nav