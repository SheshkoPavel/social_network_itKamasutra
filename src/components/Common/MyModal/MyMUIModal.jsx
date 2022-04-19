import React from 'react';
import {Backdrop, Box, Fade, Modal, ThemeProvider, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {createTheme} from "@mui/material/styles";

const MyMuiModal = ({active, setActive, children, header}) => {

    //Настройки модального окна
    const style = {
        position: 'absolute',
        top: '50%',
        left: '53%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#afaef0',
        border: '2px solid #000',
        boxShadow: 24,
        p: 3
    }

    //Кастомный стиль для кнопки
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
                <Modal aria-labelledby="transition-modal-title"
                       aria-describedby="transition-modal-description"
                       open={active}
                       onClose={() => setActive(false)}
                       closeAfterTransition
                       BackdropComponent={Backdrop}
                       BackdropProps={{
                           timeout: 500,
                       }}
                >

                    <Fade in={active}>
                        <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h6" component="h2">
                                { //Текст заголовка модального окна
                                    header}
                            </Typography>

                            <div>{children}</div>

                            <div style={{textAlign: "right"}}>
                                <Button onClick={() => setActive(false)} size={'small'}
                                        color={'myColorGroup'} variant={'outlined'}>
                                    Close
                                </Button>
                            </div>
                        </Box>
                    </Fade>
                </Modal>
            </ThemeProvider>
        </div>
    );
};

export default MyMuiModal;