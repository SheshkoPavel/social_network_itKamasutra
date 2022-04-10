import React from 'react';
import {ThemeProvider} from "@emotion/react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import {deleteNewsPostThunk, updateNewsPostTextThunk} from "../../redux/newsReducer";
import {useDispatch} from "react-redux";
import {createTheme} from "@mui/material/styles";
import {ButtonGroup} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import SendIcon from "@mui/icons-material/Send";

const NewsButtonGroup = (props) => {
    const dispatch = useDispatch()

    const theme = createTheme({
        palette: {
            myColorGroup: {
                main: '#72648b',
                contrastText: '#fff'
            },
        },
    });

    return (
        <div>
            <ThemeProvider theme={theme}>
                { props.editMode === false
                    ?   <ButtonGroup variant="outlined" size="small" aria-label="outlined button group">
                        <Button startIcon={<EditIcon />}
                                color={"myColorGroup"}
                                onClick={()=> {props.setEditMode(true)}}
                        >
                            edit
                        </Button>
                        <Button startIcon={<DeleteIcon />}
                                color={"myColorGroup"}
                                onClick={()=> {dispatch(deleteNewsPostThunk(props.id))}}  >
                            delete
                        </Button>
                        </ButtonGroup>
                    : <ButtonGroup variant="outlined" size="small" aria-label="outlined button group">
                        <Button startIcon={<EditIcon />}
                                color={"myColorGroup"}
                                onClick={()=> {props.setEditMode(false)}}
                        >
                            undo edit
                        </Button>
                        <Button onClick={() => {
                            dispatch(updateNewsPostTextThunk({updateId: props.id, newNewsText: props.editText}))
                            props.setEditMode(false);
                            }}
                                startIcon={<SendIcon />}
                                color={"myColorGroup"}
                        >
                            ok
                        </Button>
                    </ButtonGroup>
                }
            </ThemeProvider>
        </div>
    );
};

export default NewsButtonGroup;