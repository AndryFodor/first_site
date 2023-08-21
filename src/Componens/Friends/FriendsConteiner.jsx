import { connect } from "react-redux";
// import StoreContext from "../../StoreContext";
import Friends from "./Friends";


const mapStateToProps = state => {
    return {
        FriendsData: state.friendsPage.friendsData
    }
},
mapDispatchToProps = dispatch => {
    return{}
},
FriendsConteiner = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default FriendsConteiner;