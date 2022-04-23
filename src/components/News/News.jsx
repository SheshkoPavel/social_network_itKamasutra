import React, {useEffect, useState} from 'react';
import NewsItem from "./NewsItem";
import {useDispatch, useSelector} from "react-redux";
import {getNewsDESCThunk, getNewsThunk} from "../../redux/newsReducer";
import AddNewsForm from "./AddNewsForm";
import Button from "@mui/material/Button";
import ImportExportIcon from '@mui/icons-material/ImportExport';
import MyMuiModal from "../Common/MyModal/MyMUIModal";
import Preloader from "../Common/Preloader/Preloader";

const News = (props) => {
    /*    Local server request for take news
        const [news, setNews] = useState([{id: 0, newsText: 'Здесь может быть ваша реклама', imageURL: 'https://r7.pngegg.com/path/452/495/745/react-javascript-angularjs-ionic-github-e09b123ee65b250eca5b7fdc0c317bf4.png'}])

        async function getNews() {
            const response = await axios.get("http://localhost:5000/news", {withCredentials: true});
            setNews(response.data);
        }

        useEffect(() => {getNews()},[])*/
    const dispatch = useDispatch()

    //Загрузка новостей с сервера, после загрузки компоненты (замена классового метода componentDidMount)
    useEffect(() => {
        dispatch(getNewsThunk())
    }, [])

    //Получаю массив новостей из store (newsReducer)
    const news = useSelector(state => state.newsPage.news)
    const isLoadingNews = useSelector(state => state.newsPage.isLoading)

    const [state, setState] = useState(false)
    const onDescClick = () => {
        dispatch(getNewsDESCThunk());
        setState(true);
    }
    const onAscClick = () => {
        dispatch(getNewsThunk());
        setState(false);
    }

    //Преобразуем массив новостей в массив JSX элементов
    let newsElements = news.map((n, index) => <NewsItem key={n.id} id={n.id}
                                                        newsText={n.newsText} imageURL={n.imageURL}
                                                        index={index + 1}    />)

    //Состояние модального окна
    const [modalActive, setModalActive] = useState(false)

    return (
        <div>
            { //Отслеживаю состояние, чтобы понять какую из кнопок показывать
                state === false
                ? <div className={'news__btns__right'}> <Button startIcon={<ImportExportIcon />}
                                                              onClick={onDescClick}
                                                              color="secondary" >
                                                     DESC
                    </Button>
                </div>
                : <div className={'news__btns__right'}> <Button startIcon={<ImportExportIcon />}
                                                                onClick={onAscClick}
                                                                color="secondary" >
                                        ASC
                     </Button>
                </div>
            }

            {/*Кнопка вызова модального окна*/}
            <Button variant={'outlined'} style={{marginLeft: 5}} size={'small'} color={'secondary'}
                    onClick={() => setModalActive(true)}>
                Create news
            </Button>
            <MyMuiModal active={modalActive} setActive={setModalActive} header={'Add News Post'}>
                <AddNewsForm setActive={setModalActive} />
            </MyMuiModal>


            <div>
                {
                    isLoadingNews === true ? <div><Preloader /> {newsElements} </div> : newsElements
                }
{/*                { //Вывод массива новостей
                    newsElements
                }*/}
            </div>

        </div>
    );
};

export default News;