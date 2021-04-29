import styled from "styled-components";
import {fetchAPI } from "./../../lib/api";
import HeaderLogo from "./../../components/partials/HeaderLogo"
import DynamicContent from "./../../components/partials/DynamicContent"
import {useRouter} from 'next/router'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import Header from "./../../components/page/Header"
import Layout from './../../components/Layout';
import LoadingPage from './../../components/loadingPage';
import {motion, AnimatePresence} from "framer-motion"
import animations from "./../../scripts/animations"

const SmallBoxes = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 50px 0;

`
const SmallBox = styled.div`
    width: 33.3%;
    height: 200px;
    ${({color})=> color && "background-color:" + color};
    color: #fff;
    justify-content: center;
    display: flex;
    align-items: center;
    ${ ({bgImage}) => bgImage && "background-image: url(" + bgImage + ")"  };
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-origin: content-box;
    padding: 10px;
`
const ImageAndText = styled.div`
    display:flex;
    &>:nth-child(1){
        width: 50%;
        padding-right: 25px;
    }
    &>:nth-child(2){
        width: 50%;
        padding-left: 25px;
    }
`

const Page = ({page, menus, error}) => {
    const router = useRouter()

    if(router.isFallback) {
        return <LoadingPage/>
    }

    // This includes setting the noindex header because static files always return a status 200 but the rendered not found page page should obviously not be indexed
    if( error, !page ) {
        
        return (
        <>
            <Head>
                <meta name="robots" content="noindex"/>
            </Head>
            <DefaultErrorPage statusCode={error.status || !page && 404 || 500} />
        </>
        )
    }
    
    return (
        <motion.div 
        initial="initial"      
        animate="animate"      
        exit="exit"      
        variants={animations.pageTransition}
        onAnimationComplete={animations.scrollTop}
        >
            <Layout menus={menus}>  
                <Head>
                    <title>{page?.titleAndMeta?.title? `Shoshan Development - ${page.titleAndMeta.title}` : "Shoshan Development"}</title>
                    <meta name="description" content={page?.titleAndMeta?.metaDescription || ""}></meta>
                </Head> 
                <HeaderLogo/>
                {page.hide_title || <Header title={page.title}/>}
                <DynamicContent content={page?.content || []}/>
            </Layout> 
        </motion.div>
    )
}

export default Page;

export async function getStaticProps(ctx){
    const {slug1} = ctx.params
    try{
        let page = await fetchAPI(`/pages/slug/${slug1}?no_front=false`)

        return {
            props: {
                page
            }, 
            revalidate: 5
        }   
        
    }catch(error){
        
        return { props: {
            error
        } }
    }
}


export async function getStaticPaths() {
    try{
        let pages = await fetchAPI('/pages?no_front=false');

        //Only get pages whit one parent
        let filteredPages = pages?.filter((page) => page.full_slug.split('/').length === 1 ) || [];
        return {
        paths: filteredPages?.map((page) => `/${page.full_slug}`) || [],
        fallback: true,
        }
    }catch{
        return {
            paths: [],
            fallback: true,
        }
    }
}