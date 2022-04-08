import React from 'react';
import './NewsItem.scss'
import NewsDeleteButton from "./NewsDeleteButton";


const NewsItem = (props) => {

    return (
        <div className='main_content'>
            <div>
                <span className={'header'}>Новость</span> {props.id + '  '}
            </div>

            <img className={'news_image'} src={props.imageURL} alt="news"/>
            <div>
                {props.newsText}
                <NewsDeleteButton id={props.id} />

            </div>
        </div>
    );
};

export default NewsItem;