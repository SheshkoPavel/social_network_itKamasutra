import React, {useEffect, useState} from 'react';
import './NewsItem.scss'
import NewsButtonGroup from "./NewsButtonGroup";
import TextField from '@mui/material/TextField';

const NewsItem = (props) => {

    const [editMode, setEditMode] = useState(false)
    const [editText, setEditText] = useState(props.newsText);

    const startState = props.newsText;

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
                                    : <TextField onChange={onNewsTextChange}
                                                 size={"small"}
                                                 helperText="Please enter new text"
                                                 multiline
                                                 rows={3}
                                                 type={"text"}
                                                 value={editText}
                                                 style={{marginTop: 5, width: 600}}
                                                  />

                }
                <NewsButtonGroup editMode={editMode}
                                 setEditMode={setEditMode}
                                 editText={editText}
                                 setEditText={setEditText}
                                 id={props.id}
                                 startState={startState}
                />

            </div>
        </div>
    );
};

export default NewsItem;