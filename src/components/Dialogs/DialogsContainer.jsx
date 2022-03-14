import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogPage;

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    const onNewMessageChange = (text) => {
        props.store.dispatch(updateNewMessageBodyCreator(text));
    }

    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogPage={state}
        />
    );
};

export default DialogsContainer;