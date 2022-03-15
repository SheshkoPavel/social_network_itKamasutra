const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Paul"},
        {id: 2, name: "Den"},
        {id: 3, name: "Petr"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Kate"},
        {id: 6, name: "July"}
    ],
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Norm"},
        {id: 5, message: "Yo-yo"}
    ],
    newMessageBody: ''
};

const  dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
             return {
                ...state,
                newMessageBody : action.newMessageBody
            };
        }
        case SEND_MESSAGE: {
            let newMessageBody = state.newMessageBody;
            return {
                ...state,
                newMessageBody : '',
                messages: [...state.messages, {id: 6, message: newMessageBody}]
            };
        }
        default : return state;
    }
}

export const sendMessageCreator = () =>  ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text })

export default dialogsReducer;