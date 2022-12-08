import { FETCH_NEWS } from "../types";

export const fetchNewsData = () => {
    return async(dispatch) => {
        try {
            const response = await fetch('https://api.coinstats.app/public/v1/news/latest?skip=0&limit=20');
            const newsResponse = await response.json();
            const news = [];

            for(const noticia of newsResponse.news){
                news.push({
                    id: noticia.id,
                    title:noticia.title,
                    imageURL: noticia.imgURL,
                    link: noticia.link,
                    description: noticia.description,
                    source: noticia.source
                });
            }

            console.log('noti',news)


            dispatch({type:FETCH_NEWS, payload:news});

            console.log(newsResponse);
        } catch (e) {
            console.log('error',e)
        }
    }
}