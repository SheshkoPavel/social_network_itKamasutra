import React, {useEffect} from 'react';
import NewsItem from "./NewsItem";
import {useDispatch, useSelector} from "react-redux";
import {getNewsThunk} from "../../redux/newsReducer";
import AddNewsForm from "./AddNewsForm";



const News = (props) => {

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getNewsThunk())
    }, [])

    const news = useSelector(state => state.newsPage.news)

/*    Local server request for take news
    const [news, setNews] = useState([{id: 0, newsText: 'Здесь может быть ваша реклама', imageURL: 'https://r7.pngegg.com/path/452/495/745/react-javascript-angularjs-ionic-github-e09b123ee65b250eca5b7fdc0c317bf4.png'}])

    async function getNews() {
        const response = await axios.get("http://localhost:5000/news", {withCredentials: true});
        setNews(response.data);
    }

    useEffect(() => {getNews()},[])*/

    let newsElements = news.map(n => <NewsItem key={n.id} id={n.id} newsText={n.newsText} imageURL={n.imageURL}/>)

    return (
        <div>
            <div>
                {
                    newsElements
                }
            </div>
            <div style={{textAlign: "center"}}>
                <AddNewsForm />
            </div>
        </div>
    );
};

export default News;