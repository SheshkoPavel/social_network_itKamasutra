import React, {useEffect, useState} from 'react';
import './NewsItem.scss'
import NewsButtonGroup from "./NewsButtonGroup";

const NewsItem = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [editText, setEditText] = useState(props.newsText);

    useEffect(() => {
        setEditText(props.newsText)
    }, [props.newsText]);

    const onNewsTextChange = (e) => {
        setEditText(e.currentTarget.value);
    }

    return (
        <div className='main_content'>
            <div>
                <span className={'header'}>Новость</span> {props.id + '  '}
            </div>

            <img className={'news_image'} src={props.imageURL} alt="news"/>
            <div>
                {editMode === false ? props.newsText
                                    : <input type={"text"} value={editText} onChange={onNewsTextChange} />

                }
                <NewsButtonGroup editMode={editMode}
                                 setEditMode={setEditMode}
                                 editText={editText}
                                 setEditText={setEditText}
                                 id={props.id}
                />

            </div>
        </div>
    );
};

export default NewsItem;