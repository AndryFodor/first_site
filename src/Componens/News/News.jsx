
const Newss = props => {

    let resultNews = props.NewsData.map(el => {
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
        props.changes(e.target.value);        
    },
    ClickListener = () =>{
        props.click();
    }

    return (
        <div>
            News
            <div>{resultNews}</div>
            <div><textarea onChange={ChangesListener} value={props.buffer}></textarea></div>
            <div><button onClick={ClickListener}>Create news</button></div>
        </div>
    );
}

export default Newss;
