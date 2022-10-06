import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"


const Format = ({ title, children }) => {
    const headTitle = `SilverShieldGlobal Limited ${title ? title : ''}`
    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{headTitle}</title>
            </Head>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Format