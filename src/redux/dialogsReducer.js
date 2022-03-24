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
    ]
};

const  dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessageBody = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: newMessageBody}]
            };
        }
        default : return state;
    }
}

export const sendMessageCreator = (newMessageBody) =>  ({ type: SEND_MESSAGE, newMessageBody })


export default dialogsReducer;