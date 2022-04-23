import {newsAPI} from "../api/api";

const news_SET_NEWS = 'SET_NEWS'
const news_ADD_NEW_NEWS = 'news_ADD_NEW_NEWS'
const news_DELETE_NEWS_POST = 'news_DELETE_NEWS_POST'
const news_UPDATE_NEWS_POST = 'news_UPDATE_NEWS_POST'
const news_IS_LOADING_NEWS = 'news_IS_LOADING_NEWS'

const initialState = {
    news: [
        {id: 0, newsText: 'Здесь может быть ваша реклама', imageURL: 'https://r7.pngegg.com/path/452/495/745/react-javascript-angularjs-ionic-github-e09b123ee65b250eca5b7fdc0c317bf4.png'}
    ],
    isLoading: false
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case news_IS_LOADING_NEWS:
            return {
                ...state,
                isLoading: true
            }

        case news_SET_NEWS: {
            return {
                ...state,
                news: action.news,
                isLoading: false
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
        case news_DELETE_NEWS_POST: {
            return {
                ...state,
                news: state.news.filter(n => n.id !== action.NewsId)
            }
        }
        case news_UPDATE_NEWS_POST: {
            return  {
                ...state,
                news: state.news.filter(n => {
                    if (n.id === action.updateIdAndMessage.updateId) {
                        n.newsText = action.updateIdAndMessage.newNewsText
                        return n
                    }
                    return  n
                })
            }
        }

        default :
            return state;
    }
}

const LoadingNewsAC = () => ({type: news_IS_LOADING_NEWS})
export const setNewsAC = (news) => ({type: news_SET_NEWS, news})
export const addNewNewsAC = (newNews) => ({type: news_ADD_NEW_NEWS, newNews})
export const updateNewsPostAC = (updateIdAndMessage) => ({type: news_UPDATE_NEWS_POST, updateIdAndMessage})
export const deleteNewsPostAC = (NewsId) => ({type: news_DELETE_NEWS_POST, NewsId})

export const getNewsThunk = () => async (dispatch) => {
    try {
        dispatch({type: news_IS_LOADING_NEWS}) // is like dispatch(LoadingNewsAC())
        let response = await newsAPI.getNews();
        dispatch(setNewsAC(response.data));
    } catch (error) {
        console.log('Check server. ' + error);
    }
}

export const getNewsDESCThunk = () => async (dispatch) => {
    try {
        let response = await newsAPI.getNewsDESC();
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
        dispatch(deleteNewsPostAC(NewsId))
    } catch (error) {
        console.log('Check server. ' + error);
    }
}

export const updateNewsPostTextThunk = (updateIdAndMessage) => async (dispatch) => {
    try {
    dispatch(updateNewsPostAC(updateIdAndMessage));
    await newsAPI.updateNewsPost(updateIdAndMessage);
    } catch (error) {
        console.log('Check server. ' + error);
    }
}