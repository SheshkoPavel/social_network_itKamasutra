const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const  dialogsReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody;
            break;
        case SEND_MESSAGE:
            let newMessageBody = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: newMessageBody})
            break;
    }

    return state;
}

export const sendMessageCreator = () =>  ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text })

export default dialogsReducer;