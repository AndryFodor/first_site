import { connect } from "react-redux";
// import StoreContext from "../../StoreContext";
import { ADD_MY_NEWS_Creator, CHANGED_NEWS_Creator } from "../../redux/newsReducer";
import Newss from "./News";




const mapStateToProps = state => {
    return{
        NewsData: state.newsPage.newsData,
        buffer: state.newsPage.newsMessageBuffer
    }
},
mapDispatchToProps = dispatch => {
    return{
        click: () => {
            dispatch(ADD_MY_NEWS_Creator());
        },
        changes: text => {
            dispatch(CHANGED_NEWS_Creator(text));
        }
    }
},
NewsContainer = connect(mapStateToProps, mapDispatchToProps)(Newss);



export default NewsContainer;
