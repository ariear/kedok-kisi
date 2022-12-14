const Footer = () => {
    return (
        <footer className="footer sm:h-[240px] flex justify-evenly text-white font-rubik pt-16 flex-wrap sm:pb-0 pb-5">
            <div className="sm:p-0 p-2">
                <p className="font-semibold tracking-wide mb-3">Social Media</p>
                <div className="flex items-center">
                    <img src="youtube.png" className="mr-2" />
                    <img src="instagram.png" className="mr-2" />
                    <img src="facebook.png" className="mr-2" />
                    <img src="twitter.png" />
                </div>
            </div>
            <div className="sm:p-0 p-2">
                <p className="font-semibold tracking-wide mb-3">Official Website</p>
                <div className="text-sm tracking-wide">
                    <p>gamecomteam.com</p>
                </div>
            </div>
            <div className="sm:p-0 p-2">
                <p className="font-semibold tracking-wide mb-3">Features</p>
                <ul className="text-sm tracking-wide">
                    <li className="mb-2">Kisi - kisi</li>
                    <li className="mb-2">Tydak Amanah</li>
                    <li>Bisa suap</li>
                </ul>
            </div>
            <div className="sm:p-0 p-2">
                <p className="font-semibold tracking-wide mb-3">Thxs To</p>
                <ul className="text-sm tracking-wide">
                    <li className="mb-2">Gusti Allah Pangeran</li>
                    <li className="mb-2">Mama</li>
                    <li className="mb-2">Pc Saya</li>
                    <li>Saya Sendiri</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer