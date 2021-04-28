import { buildUrl } from 'cloudinary-build-url';

export function getStrapiURL(path = "") {
    return `${
      process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
  }
  
  // Helper to make GET requests to Strapi
  export async function fetchAPI(path, status) {
    try{
      const requestUrl = getStrapiURL(path);
      const response = await fetch(requestUrl);

      if(response.status!==200) throw {status: response.status}

      const data = await response.json();
      return data;
    }
    catch(error){
      throw {status: status || error.status || 500};
    }
  }

export function getStrapiMedia(media, blur) {





const imageUrl = media.url.startsWith("/")
    ? getStrapiURL(media.url)
    : media.url;
return imageUrl;
}


