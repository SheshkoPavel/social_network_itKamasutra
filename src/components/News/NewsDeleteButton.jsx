import React from 'react';
import {ThemeProvider} from "@emotion/react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import {deleteNewsPostThunk} from "../../redux/newsReducer";
import {useDispatch} from "react-redux";
import {createTheme} from "@mui/material/styles";
import {ButtonGroup} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

const NewsDeleteButton = (props) => {
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
                <ButtonGroup variant="outlined" size="small" aria-label="outlined button group">
                <Button startIcon={<EditIcon />}
                        color={"myColorGroup"}
                >
                        edit
                </Button>
                <Button startIcon={<DeleteIcon />}
                            color={"myColorGroup"}
                            onClick={()=> {dispatch(deleteNewsPostThunk(props.id))}}  >
                        delete
                </Button>
                </ButtonGroup>
            </ThemeProvider>
        </div>
    );
};

export default NewsDeleteButton;