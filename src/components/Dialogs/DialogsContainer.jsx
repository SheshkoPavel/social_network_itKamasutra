import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => {
            dispatch(updateNewMessageBodyCreator(text))
        } ,
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}

let AuthRedirectContainer = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectContainer);

export default DialogsContainer;