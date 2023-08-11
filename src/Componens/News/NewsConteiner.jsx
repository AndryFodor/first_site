import { ADD_MY_NEWS_Creator, CHANGED_NEWS_Creator } from "../../redux/newsReducer";
import Newss from "./News";


const NewsContainer = props => {

    let NewsData = props.data.newsPage.newsData,
    buffer = props.data.newsPage.newsMessageBuffer,
    
    Changes = text => {
        props.dispatch(CHANGED_NEWS_Creator(text));        
    },
    Click = () =>{
        props.dispatch(ADD_MY_NEWS_Creator());
    }

    return <Newss click = {Click} changes = {Changes} NewsData = {NewsData} buffer = {buffer}/>
}

export default NewsContainer;
