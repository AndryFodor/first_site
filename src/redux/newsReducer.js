const ADD_MY_NEWS = 'ADD_NEWS',
  CHANGED_NEWS = 'CHANGED_NEWS';

export const CHANGED_NEWS_Creator = text => ({type: CHANGED_NEWS, changes: text}),
ADD_MY_NEWS_Creator = () => ({type: ADD_MY_NEWS});

const NewsReducer = (state, action) => {
    switch(action.type){
        case ADD_MY_NEWS:
            let dat = new Date();
            let createdNews = {
              id: state.newsData[state.newsData.length - 1].id + 1,
              message: state.newsMessageBuffer,
              date: `${dat.getDate()}.${dat.getMonth()+1}.${dat.getFullYear()} ${dat.getHours()}:${dat.getMinutes()}`
            }
            state.newsMessageBuffer = '';
            state.newsData.push(createdNews);
            return state;


        case CHANGED_NEWS:
            state.newsMessageBuffer = action.changes;
            return state;


        default:
            return state;
    }
}

export default NewsReducer;