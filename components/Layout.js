import Link from 'next/link'
import Head from "next/head"
import Footer from "./Footer";

const Layout = ({children, menus}) => {
    return (
        <>
            <Head>
                {/* <script type="text/javascript" src="/static/app.js"></script> */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet"></link>
                <meta charSet="UTF-8"/>
                <title>Shoshan Development</title>

            </Head>
 
            { children }

            <Footer menus={menus}/>
        </>
    )

}
export default Layout