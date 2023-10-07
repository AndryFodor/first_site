const ADD_MY_NEWS = 'ADD_NEWS',
  CHANGED_NEWS = 'CHANGED_NEWS';

export const CHANGED_NEWS_Creator = text => ({type: CHANGED_NEWS, changes: text}),
ADD_MY_NEWS_Creator = () => ({type: ADD_MY_NEWS});

let initialState = {
  newsData: [
    {id: 1, message: "I started deeeling with redux", date: '10.8.2023 17:30'},
    {id: 2, message: "Made a request to the server for the first time", date: '28.08.2023 11:30'},
    {id: 3, message: "Independently implemented the turning of page numbers with bottons 'NEXT' and 'BACK'", date: '30.08.2023 12:50'},
    {id: 4, message: "Made my first PUT request", date: '27.09.2023 14:20'},
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