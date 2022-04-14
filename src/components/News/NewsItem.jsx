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
            <div className={'header'}>
                <span className={'header__text'}>Новость</span> {props.index + '  '}
            </div>

            <img className={'news_image'} src={props.imageURL} alt="news"/>
            <div>
                {editMode === false ? <div> {props.newsText} </div>
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
                <div className={'buttons__group'}>
                    <NewsButtonGroup editMode={editMode}
                                     setEditMode={setEditMode}
                                     editText={editText}
                                     setEditText={setEditText}
                                     id={props.id}
                                     startState={startState}
                    />
                </div>

            </div>
        </div>
    );
};

export default NewsItem;