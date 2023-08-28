import { connect } from "react-redux";
// import Users from "./Users";
import { followAC, setUsersAC, unfollowAC } from "../../redux/usersReducer";
import UsersC from "./Users";

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
 UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

//  Для функції connect не важливо, чи функціональну компоненту їй передано, чи класову. Всередині вона створена так, що може бути контейнерною для обох, може прокидувати пропси (state i dispatch) в будь-який тип компонент

 export default UsersContainer;