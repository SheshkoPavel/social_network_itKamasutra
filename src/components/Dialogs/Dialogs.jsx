import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name: "Paul"},
        {id: 2,name: "Den"},
        {id: 3,name: "Petr"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Kate"},
        {id: 6, name: "July"}
    ];

    let messages = [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Norm"},
        {id: 5, message: "Yo-yo"}
    ];

    let dialogElements = dialogs.map(dialog => (<DialogItem name={dialog.name} id={dialog.id} />));
    let messagesElements = messages.map(m => (<Message message={m.message} />));

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialog__Items}>
                {dialogElements}
            </div>

            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

export default Dialogs;