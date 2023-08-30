import { connect } from "react-redux";
// import Users from "./Users";
import { backBottonClickedAC, clearNextBackCounterAC, followAC, nextBottonClickedAC, setAllUsersCountAC, setPageNumberAC, setUsersAC, setUsersPagesAC, unfollowAC } from "../../redux/usersReducer";
import UsersC from "./Users";

const mapStateToProps = state => {
    return {
        data: state.usersPage.users,
        allUsersCount: state.usersPage.allUsersCount,
        usersCountForPage: state.usersPage.usersCountForPage,
        selectedPage: state.usersPage.selectedPage,
        nextButon: state.usersPage.nextButon,
        backBottom: state.usersPage.backBottom,
        ArraycountOfUserPages: state.usersPage.portionOfPages
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
        },
        setPageNumber: number => {
            dispatch(setPageNumberAC(number))
        },
        setUsersCount: count => {
            dispatch(setAllUsersCountAC(count))
        },
        setCountOfUP: count => {
            dispatch(setUsersPagesAC(count))
        },
        nextButonClicked: () => {
            dispatch(nextBottonClickedAC())
        },
        backBottonClicked: () => {
            dispatch(backBottonClickedAC())
        },
        unmountClearing: () => {
            dispatch(clearNextBackCounterAC())
        }
    }
},
 UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC);

//  Для функції connect не важливо, чи функціональну компоненту їй передано, чи класову. Всередині вона створена так, що може бути контейнерною для обох, може прокидувати пропси (state i dispatch) в будь-який тип компонент

 export default UsersContainer;