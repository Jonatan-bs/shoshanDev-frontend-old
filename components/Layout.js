import Link from 'next/link'
import Head from "next/head"
import Footer from "./Footer";

const Layout = ({children, menus}) => {
    return (
        <> 
            { children }

            <Footer menus={menus}/>
        </>
    )

}
export default Layout