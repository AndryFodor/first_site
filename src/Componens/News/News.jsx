import { ADD_MY_NEWS_Creator, CHANGED_NEWS_Creator } from "../../redux/store";


const Newss = props => {

    let resultNews = props.data.newsData.map(el => {
        return (
            <div>
                <p>{el.id}. ATTENTION!!!</p>
                <div>{el.message}</div>
                <p>{el.date}</p>
                <br />
            </div>
        )
    }),
    
    ChangesListener = e => {
        props.dispatch(CHANGED_NEWS_Creator(e.target.value));        
    },
    ClickListener = () =>{
        props.dispatch(ADD_MY_NEWS_Creator());
    }

    return (
        <div>
            News
            <div>{resultNews}</div>
            <div><textarea onChange={ChangesListener} value={props.data.newsMessageBuffer}></textarea></div>
            <div><button onClick={ClickListener}>Create news</button></div>
        </div>
    );
}

export default Newss;
