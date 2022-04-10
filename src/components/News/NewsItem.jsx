import React, {useEffect, useState} from 'react';
import './NewsItem.scss'
import NewsDeleteButton from "./NewsDeleteButton";
import {useDispatch} from "react-redux";
import {createTheme} from "@mui/material/styles";
import {ThemeProvider} from "@emotion/react";
import {ButtonGroup} from "@mui/material";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from '@mui/icons-material/Send';
import {deleteNewsPostThunk, updateNewsPostTextThunk} from "../../redux/newsReducer";


const NewsItem = (props) => {

    const dispatch = useDispatch()

    const theme = createTheme({
        palette: {
            myColorGroup: {
                main: '#72648b',
                contrastText: '#fff'
            },
        },
    });

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
                <div>
                    <ThemeProvider theme={theme}>
                        <ButtonGroup variant="outlined" size="small" aria-label="outlined button group">
                            <Button startIcon={<EditIcon />}
                                    color={"myColorGroup"}
                                    onClick={()=> {setEditMode(true)}}
                            >
                                edit
                            </Button>
                            <Button startIcon={<DeleteIcon />}
                                    color={"myColorGroup"}
                                    onClick={()=> {dispatch(deleteNewsPostThunk(props.id))}}  >
                                delete
                            </Button>
                            {editMode === true ? <Button onClick={() => {

                                dispatch(updateNewsPostTextThunk({updateId: props.id, newNewsText: editText}))
                                setEditMode(false);
                            }}
                                                         startIcon={<SendIcon />}
                                                         color={"myColorGroup"}

                                                >
                                ok
                            </Button>
                                : null}
                        </ButtonGroup>
                    </ThemeProvider>
                </div>

            </div>
        </div>
    );
};

export default NewsItem;