import { connect } from "react-redux";
// import StoreContext from "../../StoreContext";
import Friends from "./Friends";


const mapStateToProps = state => {
    return {
        FriendsData: state.friendsPage.friendsData
    }
},
FriendsConteiner = connect(mapStateToProps, {})(Friends);

export default FriendsConteiner;