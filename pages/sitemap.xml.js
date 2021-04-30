import React from 'react';



const createSitemap = (posts, path) => `
        ${posts
          .map(({ slug, full_slug, no_front }) => {
            if(no_front) return;
            return `
                    <url>
                        <loc>${`${process.env.URL}/${full_slug? full_slug : path? path+ "/"+slug : slug}`}</loc>
                    </url>
                `;
          })
          .join('')}
    
    `;
const createSitemapManuel = (full_slug) => `
        <url>
            <loc>${`${process.env.URL}/${full_slug}`}</loc>
        </url>
    `

const Sitemap = () => {
    return(
        <></>

        )
}

export default Sitemap;


export async function getServerSideProps(ctx){
    let request = await fetch(process.env.NEXT_PUBLIC_STRAPI_API_URL+"/pages");
    const pages = await request.json();
    request = await fetch(process.env.NEXT_PUBLIC_STRAPI_API_URL+"/projects");
    const projects = await request.json();

    ctx.res.setHeader('Content-Type', 'text/xml')
    ctx.res.write(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`)
    ctx.res.write(createSitemapManuel(''));
    ctx.res.write(createSitemap(pages));
    ctx.res.write(createSitemap(projects, 'project'));
    ctx.res.write(`</urlset>`)
    ctx.res.end();


    return { props: {pages,projects}  }
    
}