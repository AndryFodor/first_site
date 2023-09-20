import { connect } from "react-redux";
// import StoreContext from "../../StoreContext";
import Friends from "./Friends";
import withAuthRedirect from "../../HOC/withAuthRedirect";

const AuthRedirect = withAuthRedirect(Friends);
const mapStateToProps = state => {
    return {
        FriendsData: state.friendsPage.friendsData
    }
},
FriendsConteiner = connect(mapStateToProps, {})(AuthRedirect);

export default FriendsConteiner;