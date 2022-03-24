import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";
import AddMessageForm from "./AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogElements = state.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />));
    let messagesElements = state.messages.map(m => (<Message message={m.message} key={m.id} />));

    if (props.isAuth === false) {
      return  <Navigate to={"/login"} />
    };

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
                    <AddMessageForm sendMessage={props.sendMessage} />

                    {/*<div>
                    <input type="text"
                           placeholder="Write smth"
                           value={newMessageBody}
                           onChange={ onNewMessageChange }
                    />
                    </div>
                    <div><button onClick={onSendMessageClick} >Add message</button></div>*/}
                </div>
            </div>

        </div>
    );
};

export default Dialogs;