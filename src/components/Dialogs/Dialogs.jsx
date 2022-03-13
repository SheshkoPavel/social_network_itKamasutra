import React, {useRef} from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";


const Dialogs = (props) => {

    let state = props.store.getState().dialogPage;

    let dialogElements = state.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} />));
    let messagesElements = state.messages.map(m => (<Message message={m.message}  />));

    let newMessageBody = state.newMessageBody;



    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }
    const onNewMessageChange = (event) => {
        let text = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(text));
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog__Items}>
                {dialogElements}
            </div>

            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                    <input type="text"
                           placeholder="Write smth"
                           value={newMessageBody}
                           onChange={ onNewMessageChange }
                    />
                    </div>
                    <div><button onClick={onSendMessageClick} >Add message</button></div>
                </div>
            </div>

        </div>
    );
};

export default Dialogs;