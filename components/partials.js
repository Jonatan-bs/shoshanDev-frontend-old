import styled from "styled-components";
import NextLink from "next/link";
import marked from "marked";
import DOMPurify from 'isomorphic-dompurify';
import NextImage from 'next/image'
import mq from "../styles/breakpoints";

//Adjustment templates
const templates = {
    hide({sm, md, lg, xl}, display="block"){

        let style = "";

        sm? style += 'display:none;' : style += "display:" + display + ";"; 
        md? style += mq('sm','display:none;') : style += mq('sm', "display:" + display) + ";" 
        lg? style += mq('md','display:none;') : style += mq('md', "display:" + display) + ";" 
        xl? style += mq('lg','display:none;') : style += mq('lg', "display:" + display)  + ";"
        
        return style
        
    },
    paddingTemplate({interval,pb,py,pt,pl,pr,px}){
        return`${ 
            pb || pb===0 ? "padding-bottom:" + pb*interval + "px;" : 
            py || py===0 ? "padding-bottom:" + py*interval + "px;" :
            ""
        }
        ${ 
            pt || pt===0 ? "padding-top:" + pt*interval + "px;" : 
            py || py===0 ? "padding-top:" + py*interval + "px;" :
            ""
        }
        ${ 
            pl || pl===0 ? "padding-left:" + pl*interval + "px;" : 
            px || px===0 ? "padding-left:" + px*interval + "px;" :
            ""
        }
        ${ 
            pr || pr===0 ? "padding-right:" + pr*interval + "px;" : 
            px || px===0 ? "padding-right:" + px*interval + "px;" :
            ""
        }`
    },
    padding(props){
        return` 
        ${
            this.paddingTemplate({interval:30, ...props })
        }
        ${ 
            mq('md', this.paddingTemplate({interval: 50, ...props }))
        }
        
        `
    },
    marginTemplate({interval,mb,my,mt,ml,mr,mx}){
        return`${ 
            mb? "margin-bottom:" + mb*interval + "px;" : 
            my? "margin-bottom:" + my*interval + "px;" :
            ""
        }
        ${ 
            mt? "margin-top:" + mt*interval + "px;" : 
            my? "margin-top:" + my*interval + "px;" :
            ""
        }
        ${ 
            ml? "margin-left:" + ml*interval + "px;" : 
            mx? "margin-left:" + mx*interval + "px;" :
            ""
        }
        ${ 
            mr? "margin-right:" + mr*interval + "px;" : 
            mx? "margin-right:" + mx*interval + "px;" :
            ""
        }`
    },
    margin(props){
        return` 
        ${
            this.marginTemplate({interval:30, ...props })
        }
        ${ 
            mq('md', this.marginTemplate({interval: 50, ...props }))
        }
        
        `
    },
    textStyle: ({size,bold,color,theme,caps,center, lh, italic, width, maxWidth}) =>{ 
        return`
        font-weight: ${ bold?  "bold" : "inherit" };
        color: ${ theme.colors[color] || "inherit"};
        text-transform: ${ caps? "uppercase" : "inherit"};
        text-align: ${ center? "center" :  "inherit"};
        line-height: ${ lh ||  "inherit" };
        letter-spacing: 1px;
        font-style :${italic?  "italic" : "inherit"};
        width: ${width? width : "initial"};
        max-width: ${maxWidth? maxWidth : "initial"};
        ${ `font-size: ${ theme.fontSizes.p[size] || theme.fontSizes.p["md"] || "inherit"};` }
        `
    }
}
//
//  Heading
//
export const Heading = styled.h1`
    ${(props)=>templates.padding(props)}
    ${(props)=>templates.margin(props)}
    font-weight: bold;
    ${ ({caps}) => caps && "text-transform: uppercase;" }
    color: ${ ({color,theme}) => theme.colors[color] || "inherit"};
    ${ ({center}) => center && "text-align: center;" }
    text-align: ${ ({align, center}) => align? align : center? "center" : "inherit"};
    
    ${ ({theme, size}) => `font-size: ${ theme.fontSizes.h[size] || theme.fontSizes.h["md"] || "inherit"};` }
    ${ ({theme, size}) => (
        theme.fontSizes.hmd[size] && (
            mq('md', `
                font-size: ${ theme.fontSizes.hmd[size]};
            `)   
        )
    )}
`

//
//  Link
//
const StyledLink = styled.a`
    cursor: pointer;
    ${ ({py}) => py ? "padding-top: " + py*50 + "px; padding-bottom:" + py*50 + "px;" : ""}
    font-size: ${({size}) => size==="xl"? "4rem" : size==="lg"? "3rem" : size==="md"? "2rem"  : size==="sm"? "1rem" : size==="inherit"? "inherit" : "1.4rem" };
    ${ ({bold}) => bold && "font-weight: bold;" }
    ${ ({caps}) => caps && "text-transform: uppercase;" }
    color: ${ ({color,theme}) => theme.colors[color] || theme.colors.primary };
    width: ${ ({width}) => width || '100%' };
    ${ ({hover, theme}) => hover==="underline"?
        `
        & .hoverTarget{
            position: relative;
            display: inline;
        }
        & .hoverTarget:after {
            content: "";
            height: 4px;
            width: 0%;
            position: absolute;
            bottom: 3px;
            left: 0;
            background: ${theme.colors['primary']};
            transition: width .2s;
        }
        &:hover .hoverTarget:after {
            width: 90%;
        }
        `
        :
        ""
    };
`

export const Link = ({href, name, title, size, color, children, hover, width}) => (
    <NextLink href={href}  scroll={false}>
        <StyledLink title={title} size={size} color={color} hover={hover} width={width}> {name} {children}</StyledLink>
    </NextLink>
)

//
//  Aspect Ratio Image
//
const ApectWrap = styled.div.attrs( ({lazy,src}) => lazy && ({ "data-src" : src}))`
    ${ ({circle}) => circle && "border-radius: 100%;"}
    max-width: ${ ({maxWidth}) => maxWidth || "inherit" };
    width: ${ ({width}) => width || "auto" };
    position: relative;
    ${ ({bgColor}) => bgColor && "background-color:" + bgColor };
    overflow: hidden;
`

const Aspect = styled.div`
    width: 100%;
    padding-bottom: ${ ({desktop, pct}) => desktop? pct : pct}%;

    ${ ({src, lazy}) => !lazy && "background-image: url(" + src + ")" };
    background-size: ${ ({size}) => size || "cover" };
    background-position: center;
    background-repeat: no-repeat;

    ${ ({desktop, pct}) => mq('md', `
        padding-bottom: ${desktop? "0" : pct }%;
    `)}
`


export const AspectRatio = ({desktop, hover, size, lazy, src, pct, width, maxWidth, className, circle, bgColor, children}) => (
    <ApectWrap width={width} size={size} maxWidth={maxWidth} hover={hover} circle={circle} className={className} lazy={lazy} bgColor={bgColor}>
        <Aspect desktop={desktop} pct={pct} src={src}/>
        {children}
    </ApectWrap>
)

//
//  Image
//
const MyImage = styled(NextImage)`
    ${ (props)=>templates.padding(props) }
    ${ ({width}) => width ? "width:" + width : "width: 100%"};
    ${ ({mb}) => mb && "margin-bottom:" + mb*50 + "px"};

`

export const Image = (props) => (
        <MyImage props={props} width={props.width} height={props.height} src={props.src} alt={props.alt} priority={props.priority} layout={props.layout} objectFit={props.objectFit}/>
)

//
//  Section
//
export const Section = styled.section`
    ${ ({dark, theme}) => dark ? ( "background: " + theme.colors.dark2 + "; color: #fff; padding: 50px 0;"): "" }
`

//
//  Container
//
export const Container = styled.div`
    ${({hide,display})=> templates.hide(hide || {}, display )}
    overflow: hidden;
    padding-left: 20px;
    padding-right: 20px;
    ${(props)=>templates.padding(props)}
    max-width: ${ ({maxWidth}) => maxWidth==="lg"? "1800px": maxWidth? maxWidth :  "1400px"};
    margin: 0 auto;
    box-sizing: border-box;
    position: relative;
    width: 100%;

`




//
//  Text
//
export const Text = styled.p`
    margin-bottom: 1rem;
    ${(props)=>templates.padding(props)}
    ${(props)=>templates.textStyle(props)}
    ${(props)=>templates.margin(props)}
    ${({bullet, theme})=>(
        bullet && `
            position: relative;
            padding-left:15px;
            &:before{
            border-radius: 100%;    
            content: "";
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 5px;
            display: inline-block;
            height: 5px;
            margin-right: 5px;
            background-color: ${theme.colors.primary}

        }`
    )}

`

//
//  Markdown
//
const MarkdownStyled = styled.div`
    >p{
         margin-bottom: 1rem ;
        ${(props)=>templates.padding(props)}
        ${(props)=>templates.textStyle(props)}
    }
`

export const Markdown = ({children, hide, py, px, pt, pb, pr, pl, size, bold, color, caps, width, center, lh}) => {
    return(
    <MarkdownStyled 
        py={py}
        px={px}
        pt={pt}
        pb={pb}
        pr={pr}
        pl={pl}
        size={size}
        bold={bold}
        color={color}
        caps={caps}
        width={width}
        center={center}
        lh={lh}
        hide={hide}
        dangerouslySetInnerHTML={ {__html: DOMPurify.sanitize(marked(children.replace("\n", "<br>")))}}>
            
        </MarkdownStyled>
)}

//
//  Grid
//
export const Grid = styled.div`
    display: flex;
    width: 100%;
    ${ 
        ({cols})=> cols.map( (c, i)=>{
        return(
            ` 
                &>:nth-child(${i+1}){
                    width: ${c};
                }
            `
        )
        })
    }  
`

//
//  Span
//
export const Span = styled.span`
    ${({bold}) => bold && "font-weight: bold"}
`

//
//  Center
//
export const Center = styled.div`
    display: flex;
    justify-content: center;
`
//
//  Vignette
//
export const Vignette = styled.div`
    height: 100%;
    position: absolute;
    width: 100%;
    ${({z}) => z && `z-index: ${z}` };
    background: ${({pct}) => `radial-gradient(transparent 51%,#000000${pct==100? "" : pct || "90"})` }
`

//
// Logo
//


export const Logo = styled(Image).attrs(({light})=>({ src:`/images/${light? "logo-light.svg":"logo.svg" }`, alt: "Shoshan Development", width: "330", height: "73" }))`
`
