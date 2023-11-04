const   ADD_MESSAGE = 'socialNetwork/dialogsPage/ADD-MESSAGE';

export const ADD_MESSAGE_ActionCreator = newMessage => ({type: ADD_MESSAGE, newMessage});

let initialState = {
    dialogsData: [
        {id:1, name:"Andrew"},
        {id:2, name:"Naaame2"},
        {id:3, name:"3"},
        {id:4, name:"Name4"},
        {id:5, name: "LongggggggNName5"},
        {id:6, name: "..."}
      ],
      messageData: [
        {id: 1, message: ' Lorem, ipsum dolor sit amet consectetur'},
        {id: 2, message: 'Dadipisicing elit. Ut, aperiam voluptate quae eius itaque consequatur, nostrum necessitatibus maiores dignissimos perferendis id aliquid nam ipsum possimus sed aliquam nulla cumque cupiditate.'},
        {id: 3, message: 'Message of 5 lorems: Lorem Lorem Lorem Lorem Lorem'}
      ]
}

const DialogsReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messageData[state.messageData.length - 1].id + 1,
                message: action.newMessage
              };
              return {
                ...state,
                messageData: [...state.messageData, newMessage]
              }

        default: 
            return state;
    }
}

export default DialogsReducer;