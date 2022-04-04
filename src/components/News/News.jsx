import React, {useEffect, useState} from 'react';
import axios from "axios";
import NewsItem from "./NewsItem";



const News = (props) => {

    const [news, setNews] = useState([])

    async function getNews() {
       const response = await axios.get("http://localhost:5000/news", {withCredentials: true});
        setNews(response.data);
    }

    useEffect(() => {getNews()},[])

    let newsElements = news.map(n => <NewsItem key={n.id} id={n.id} newsText={n.newsText} imageURL={n.imageURL}/>)

    return (
        <div>
            <div>
{/*                <button onClick={getTestUsers}>Get users from server</button>*/}
                {
                    newsElements
                }
            </div>
            <div>
                <button>Добавить новость</button>
            </div>
        </div>
    );
};

export default News;