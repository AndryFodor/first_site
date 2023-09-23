import { connect } from "react-redux";
// import StoreContext from "../../StoreContext";
import Friends from "./Friends";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { compose } from "redux";

const mapStateToProps = state => {
    return {
        FriendsData: state.friendsPage.friendsData
    }
};

export default compose(
    connect(mapStateToProps, {}),
    withAuthRedirect
)
(Friends);