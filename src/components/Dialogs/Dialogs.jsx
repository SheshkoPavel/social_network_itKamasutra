import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogElements = state.dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />));
    let messagesElements = state.messages.map(m => (<Message message={m.message} key={m.id} />));

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
                </div>
            </div>

        </div>
    );
};

export default Dialogs;