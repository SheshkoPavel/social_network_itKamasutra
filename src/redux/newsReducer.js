import {newsAPI} from "../api/api";

const news_SET_NEWS = 'SET_NEWS'
const news_ADD_NEW_NEWS = 'news_ADD_NEW_NEWS'

const initialState = {
    news: [
        {id: 0, newsText: 'Здесь может быть ваша реклама', imageURL: 'https://r7.pngegg.com/path/452/495/745/react-javascript-angularjs-ionic-github-e09b123ee65b250eca5b7fdc0c317bf4.png'}
    ]
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {

        case news_SET_NEWS: {
            return {
                ...state,
                news: action.news
            }
        }
        case news_ADD_NEW_NEWS: {
            return {
                ...state,
                news: [...state.news,
                    {id: action.newNews.id, newsText: action.newNews.newsText, imageURL: action.newNews.imageURL}
                ]
            }
        }

        default :
            return state;
    }
}

export const setNewsAC = (news) => ({type: news_SET_NEWS, news})
export const addNewNewsAC = (newNews) => ({type: news_ADD_NEW_NEWS, newNews})

export const getNewsThunk = () => async (dispatch) => {
    try {
    let response = await newsAPI.getNews();
    dispatch(setNewsAC(response.data));
    } catch (error) {
        console.log('Check server. ' + error);
    }
}

export const addNewNewsThunk = (newNews) => async (dispatch) => {
    let response = await newsAPI.addNewNews(newNews);
    dispatch(addNewNewsAC(response.data));
}

export const deleteNewsPostThunk = (NewsId) => async (dispatch) => {
    try {
        await newsAPI.deleteNewsPost(NewsId);
        let response = await newsAPI.getNews();
        dispatch(setNewsAC(response.data));
    } catch (error) {
        console.log('Check server. ' + error);
    }
}

export const updateNewsPostTextThunk = (updateIdAndMessage) => async (dispatch) => {
    await newsAPI.updateNewsPost(updateIdAndMessage);
    let response = await newsAPI.getNews();
    dispatch(setNewsAC(response.data));
}