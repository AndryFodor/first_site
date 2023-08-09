const   ADD_MESSAGE = 'ADD-MESSAGE',
    CHANGED_MESSAGE = 'CHANGED-MESSAGE';

export const ADD_MESSAGE_ActionCreator = () => ({type: ADD_MESSAGE}),
CHANGED_MESSAGE_ActionCreator = text => ({type: CHANGED_MESSAGE, changes: text});

const DialogsReducer = (state, action) => {
    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messageData[state.messageData.length - 1].id + 1,
                message: state.newMessageBuffer
              };
              state.newMessageBuffer = '';
              state.messageData.push(newMessage);
              return state;

        case CHANGED_MESSAGE:
            state.newMessageBuffer = action.changes;
            return state;
        default: 
            return state;
    }
}

export default DialogsReducer;