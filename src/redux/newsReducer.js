const ADD_MY_NEWS = 'ADD_NEWS',
  CHANGED_NEWS = 'CHANGED_NEWS';

export const CHANGED_NEWS_Creator = text => ({type: CHANGED_NEWS, changes: text}),
ADD_MY_NEWS_Creator = () => ({type: ADD_MY_NEWS});

let initialState = {
  newsData: [
    {id:1, message: "I started deeeling with redux", date: '10.8.2023 17:30'}
  ],
  newsMessageBuffer: ""
}

const NewsReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_MY_NEWS:
            let dat = new Date();
            let createdNews = {
              id: state.newsData[state.newsData.length - 1].id + 1,
              message: state.newsMessageBuffer,
              date: `${dat.getDate()}.${dat.getMonth()+1}.${dat.getFullYear()} ${dat.getHours()}:${dat.getMinutes()}`
            }
            return {
              ...state,
              newsMessageBuffer: '',
              newsData: [...state.newsData, createdNews]
            };


        case CHANGED_NEWS:
            return {
              ...state, 
              newsMessageBuffer: action.changes
            };


        default:
            return state;
    }
}

export default NewsReducer;