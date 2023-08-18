import StoreContext from "../../StoreContext";
import { ADD_MY_NEWS_Creator, CHANGED_NEWS_Creator } from "../../redux/newsReducer";
import Newss from "./News";


const NewsContainer = () => {
    return (
        <StoreContext.Consumer>
            {store => {
                let NewsData = store.getState().newsPage.newsData,
                buffer = store.getState().newsPage.newsMessageBuffer,
                
                Changes = text => {
                    store.dispatch(CHANGED_NEWS_Creator(text));        
                },
                Click = () =>{
                    store.dispatch(ADD_MY_NEWS_Creator());
                }
                return <Newss click = {Click} changes = {Changes} NewsData = {NewsData} buffer = {buffer}/>
            }}
        </StoreContext.Consumer>
    )
    
}

export default NewsContainer;
