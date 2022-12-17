const Nav = () => {
    return (
        <nav className="flex items-center container mx-auto justify-between py-5 font-rubik tracking-wide">
            <img src="TBM_Standard_FullRGB.png" className="w-[150px]" />
            <ul className="flex items-center text-white text-sm">
                <li className="mr-7">Home</li>
                <li className="mr-7">Kisi-kisi</li>
                <li className="mr-6"><a className="py-3 px-9 bg-[#3B3486] rounded-lg">Login</a></li>
                <li className="h-[25px] w-[2px] bg-[#948787] mr-6"></li>
                <li><img src="github.png" className="w-[35px]" /></li>
            </ul>
        </nav>
    )
}

export default Nav