import StoreContext from "../../StoreContext";
import Friends from "./Friends";


const FriendsConteiner = () =>{

    return (
        <StoreContext.Consumer>
            {store => {
                let FriendsData = store.getState().friendsPage.friendsData;
                return <Friends FriendsData = {FriendsData}/>
            }}
        </StoreContext.Consumer>)
}

export default FriendsConteiner;