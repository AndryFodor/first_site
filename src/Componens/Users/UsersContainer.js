import { connect } from "react-redux";
import Users from "./Users";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";

const mapStateToProps = state => {
    return {
        data: state.usersPage.users
    }
},
mapDispatchToProps = dispatch => {
    return{
        follow: userID =>{
            dispatch(followAC(userID))
        },
        unfollow: userID =>{
            dispatch(unfollowAC(userID))
        },
        setUsers: users => {
            dispatch(setUsersAC(users));
        }
    }
},
 UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

 export default UsersContainer;