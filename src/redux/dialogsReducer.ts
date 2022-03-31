const dialogs_SEND_MESSAGE = 'dialogs_SEND_MESSAGE'

type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Paul"},
        {id: 2, name: "Den"},
        {id: 3, name: "Petr"},
        {id: 4, name: "Viktor"},
        {id: 5, name: "Kate"},
        {id: 6, name: "July"}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "How are you?"},
        {id: 4, message: "Norm"},
        {id: 5, message: "Yo-yo"}
    ] as Array<MessageType>
}

type InitialStateType = typeof initialState

const  dialogsReducer = (state = initialState, action): InitialStateType => {
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

type SendMessageCreatorType = {
    type: typeof dialogs_SEND_MESSAGE
    newMessageBody: string
}
export const sendMessageCreator = (newMessageBody: string): SendMessageCreatorType =>  ({
    type: dialogs_SEND_MESSAGE, newMessageBody
})

export default dialogsReducer;