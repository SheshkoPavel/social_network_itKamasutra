import React from 'react';

const NewsItem = (props) => {
    return (
        <div style={{textAlign:"center", marginBottom: 25}}>
            <div>
                <span style={{fontWeight: "bold"}}>Новость</span> {props.id + '  '}
            </div>

            <img style={{height: 200}} src={props.imageURL} alt="news image"/>
            <div >
                {props.newsText}
            </div>
        </div>
    );
};

export default NewsItem;