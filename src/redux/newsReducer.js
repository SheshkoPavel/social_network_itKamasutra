import {newsAPI} from "../api/api";

const SET_NEWS = 'SET_NEWS'

const initialState = {
    news: [
        {id: 0, newsText: 'Здесь может быть ваша реклама', imageURL: 'https://r7.pngegg.com/path/452/495/745/react-javascript-angularjs-ionic-github-e09b123ee65b250eca5b7fdc0c317bf4.png'}
    ]
}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_NEWS: {
            return {
                ...state,
                news: action.news
            }
        }

        default :
            return state;
    }
}

export const setNewsAC = (news) => ({type: SET_NEWS, news})

export const getNewsThunk = () => async (dispatch) => {
    let response = await newsAPI.getNews();
    dispatch(setNewsAC(response.data));
}