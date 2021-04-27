import styled from "styled-components";
import Header from './../../components/project/Header';
import {Container, Text, Grid, Image} from './../../components/partials';
import InfoBox from './../../components/project/partials/InfoBox';
// import Content from './../../components/project/Content';
import {motion, animatePresence} from "framer-motion"
import { getStrapiMedia, fetchAPI } from "./../../lib/api";
import DynamicContent from "./../../components/partials/DynamicContent"
import {useRouter} from 'next/router'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import mq from "../../styles/breakpoints";
import Layout from './../../components/Layout';
import LoadingPage from './../../components/loadingPage';
import animations from "./../../scripts/animations"

const ContainerMod = styled(Container)`
    display: flex;
    flex-wrap: wrap;
    
`

const TextWrap = styled.div`
    width: 100%;
    ${mq('lg', `
        width: 65%;
    `)}
`
const InfoBoxWrap = styled.div`
    width: 100%;
    padding-bottom: 50px;
    display: none;
    ${mq('lg', `
        width: 35%;
        display: block;
    `)}
`
const InfoBoxWrapMobile = styled(InfoBoxWrap)`
    display: block;
    ${mq('lg', `
        display: none;
    `)}
`

const Project = ({project, menus}) => {
    
    const router = useRouter()
    if(router.isFallback) {
        return <LoadingPage/>
    }

    // This includes setting the noindex header because static files always return a status 200 but the rendered not found page page should obviously not be indexed
    if( !project || project.error) {
        return (
        <>
            <Head>
                <meta name="robots" content="noindex"/>
            </Head>
            <DefaultErrorPage statusCode={404} />
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
                <Header src={getStrapiMedia(project.headerImage)} bgColor={project.bgColor || "#333"} title={project.title} subtitle={project.subtitle}/>
                <ContainerMod py="3"> 
                    <InfoBoxWrapMobile  data-aos="fade-left">
                        <InfoBox entries={project.info}/>
                    </InfoBoxWrapMobile>
                    <TextWrap data-aos="fade-right">
                        <Text pr="1" lh="1.6">
                            {project.text}
                        </Text>
                    </TextWrap>
                    <InfoBoxWrap  data-aos="fade-left">
                        <InfoBox entries={project.info}/>
                    </InfoBoxWrap>
                </ContainerMod>
                <DynamicContent content={project.content}/>   
            </Layout>
        </motion.div>
    )
}

export default Project;

export async function getStaticProps({params}){
    const {slug} = params
    let project = await fetchAPI('/projects?slug=' + slug)
        
    project = project.length? project.error || project[0] : null
    return {props: {project}, revalidate: 5}    
}

export async function getStaticPaths() {
    let projects = await fetchAPI('/projects')
    return {
      paths: projects?.map((project) => `/project/${project.slug}`) || [],
      fallback: true,
    }
  }