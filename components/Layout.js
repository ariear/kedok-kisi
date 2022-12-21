import Head from "next/head"
import Footer from "./Footer"
import Nav from "./Nav"

const Layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>{ title }</title>
            </Head>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default Layout