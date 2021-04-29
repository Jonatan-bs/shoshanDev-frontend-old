import styled from "styled-components";
import Header from './../../components/project/Header';
import {Container, Text, Grid, Image, Heading} from './../../components/partials';
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
import React, { useState, useEffect } from 'react';

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

const Project = ({project, menus, error}) => {

    const router = useRouter()
    if(router.isFallback) {
        return <LoadingPage/>
    }

    // This includes setting the noindex header because static files always return a status 200 but the rendered not found page page should obviously not be indexed
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
                    <title>{project?.titleAndMeta?.title ? `Shoshan Development - ${project.titleAndMeta.title}` : "Shoshan Development"}</title>
                    <meta name="description" content={project?.titleAndMeta?.metaDescription || "Case"}></meta>
                </Head>     
                <Header src={getStrapiMedia(project.headerImage)} alt={project.headerImage.alternativeText} bgColor={project.bgColor || "#333"} title={project.title} subtitle={project.subtitle}/>
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
                <DynamicContent content={project.content || []}/>   
            </Layout>
        </motion.div>
    )
}

export default Project;

export async function getStaticProps({params}){
    const {slug} = params
    try{
    
        let project = await fetchAPI(`/projects/slug/${slug}`)
        
        return {props: {project}, revalidate: 5}

    }catch(error){
        return { props: {
            error
        } }
    }
}

export async function getStaticPaths() {
    try{
        let projects = await fetchAPI('/projects')
        return {
            paths: projects?.map((project) => `/project/${project.slug}`) || [],
            fallback: true,
        }
    }catch{
        return {
            paths: [],
            fallback: true,
        }
    }
  }