import React from 'react';
import {Backdrop, Box, Fade, Modal, Typography} from "@mui/material";
import Button from "@mui/material/Button";

const MyMuiModal = ({active, setActive, children, header}) => {

    //Настройки модального окна
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: '#afaef0',
        border: '2px solid #000',
        boxShadow: 24,
        p: 3
    }

    return (
        <div>
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

                    {children}

                    <div style={{textAlign: "right"}}>
                    <Button onClick={ () => setActive(false) } >Close</Button>
                    </div>
                </Box>
            </Fade>
            </Modal>
        </div>
    );
};

export default MyMuiModal;