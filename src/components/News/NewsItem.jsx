import React, {useEffect, useState} from 'react';
import './NewsItem.scss'
import NewsButtonGroup from "./NewsButtonGroup";
import TextField from '@mui/material/TextField';
import {useSelector} from "react-redux";

const NewsItem = (props) => {
//Отслеживаю включен ли режим редактирования
    const [editMode, setEditMode] = useState(false)
    const [editText, setEditText] = useState(props.newsText);

//Начальный текст, при нажатии на кнопку отмены, устанавливается в поле инпута
    const startState = props.newsText;

    const isAuth = useSelector(state => state.auth.isAuth)

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
                { //Отслеживаю что показывать, текст, или поле редактирования
                    editMode === false ? <div> {props.newsText} </div>
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

                {
                    isAuth ? <div className={'buttons__group'}>
                        <NewsButtonGroup editMode={editMode}
                                         setEditMode={setEditMode}
                                         editText={editText}
                                         setEditText={setEditText}
                                         id={props.id}
                                         startState={startState}
                        />
                    </div> : null
                }
            </div>
        </div>
    );
};

export default NewsItem;