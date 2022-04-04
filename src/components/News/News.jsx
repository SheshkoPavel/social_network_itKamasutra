import React, {useEffect, useState} from 'react';
import axios from "axios";
import NewsItem from "./NewsItem";


const News = (props) => {

    const [news, setNews] = useState([{id: 0, newsText: 'Здесь может быть ваша реклама', imageURL: 'https://r7.pngegg.com/path/452/495/745/react-javascript-angularjs-ionic-github-e09b123ee65b250eca5b7fdc0c317bf4.png'}])

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