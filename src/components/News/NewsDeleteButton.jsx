import React from 'react';
import {ThemeProvider} from "@emotion/react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import {deleteNewsPostThunk} from "../../redux/newsReducer";
import {useDispatch} from "react-redux";
import {createTheme} from "@mui/material/styles";

const NewsDeleteButton = (props) => {
    const dispatch = useDispatch()

    const theme = createTheme({
        palette: {
            deletePost: {
                main: '#72648b',
                contrastText: '#fff'
            },
        },
    });

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Button startIcon={<DeleteIcon />}
                        size={"small"}
                        color={"deletePost"}
                        onClick={()=> {dispatch(deleteNewsPostThunk(props.id))}}  >
                    delete
                </Button>
            </ThemeProvider>
        </div>
    );
};

export default NewsDeleteButton;