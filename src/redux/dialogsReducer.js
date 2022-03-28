const dialogs_SEND_MESSAGE = 'dialogs_SEND_MESSAGE';

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
    ]
};

const  dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case dialogs_SEND_MESSAGE: {
            let newMessageBody = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length + 1, message: newMessageBody}]
            };
        }
        default : return state;
    }
}

export const sendMessageCreator = (newMessageBody) =>  ({ type: dialogs_SEND_MESSAGE, newMessageBody })

export default dialogsReducer;