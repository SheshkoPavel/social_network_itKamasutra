import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                store => {

                    const onSendMessageClick = () => {
                        store.dispatch(sendMessageCreator());
                    }
                    const onNewMessageChange = (text) => {
                        store.dispatch(updateNewMessageBodyCreator(text));
                    }
                    return (
                        <Dialogs
                            updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogPage={store.getState().dialogPage}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;