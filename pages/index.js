import styled from "styled-components";
import theme from '../styles/theme';
import Header from '../components/frontpage/Header';
import Services from '../components/frontpage/Services';
import Projects from '../components/frontpage/Projects';
import Method from '../components/frontpage/Method';
import Contact from '../components/frontpage/Contact';
import { getStrapiMedia, fetchAPI } from "../lib/api";
import App from 'next/app'
import Layout from './../components/Layout';
import animations from "./../scripts/animations"
import {motion, AnimatePresence} from "framer-motion"
import Head from 'next/head'
import DefaultErrorPage from 'next/error'


const Index = ({projects, frontpage, menus, error}) => {
    if( error ) {
        
        return (
        <>
            <Head>
                <meta name="robots" content="noindex"/>
            </Head>
            <DefaultErrorPage statusCode={error.status || 500} />
        </>
        )
    }

    return(
    <motion.div 
        initial="initial"      
        animate="animate"      
        exit="exit"      
        variants={animations.pageTransition}
        onAnimationComplete={animations.scrollTop}
    >

        <Layout menus={menus}>
            
            <Header subtext={frontpage?.subtext || []}/>
            <Services services={frontpage.services || []}/>
            <Projects projects={projects || [] }/>
            <Method/>
            <Contact contactBox={frontpage.contactBox || {}}/>
        </Layout>
    
    </motion.div>
)}

export default Index;


export async function getStaticProps({params}){
    try{
        const projects = await fetchAPI('/projects');
        const frontpage = await fetchAPI('/frontpage');
        return {props: {projects, frontpage}, revalidate: 5}    
    } catch(error){
        return { props: error }
    }
    
}
