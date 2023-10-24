import { connect } from "react-redux";
import { getUsers, selectAllUsersCount, selectBackBotton, selectFollowingIsFetching, selectIsFetching, selectNextBotton, selectPage, selectPortionOfPages, selectUsersPerPage } from "../../redux/selectors";
import Preloader from "../../common/preloader/preloader";
import React, { useEffect } from "react";

import { FollowingThunkCreator, backBottonClicked, getUsersThunkCreator, nextButonClicked, setPageNumber, unmountClearing } from "../../redux/usersReducer";
import Users from "./Users";

const HUsersContainer = props =>{

    useEffect(() => {
        props.getUsersThunkCreator(props.usersCountForPage, 1, true);
        console.log('ComponentDidMount');
        return () =>{
            props.setPageNumber(1);
            props.unmountClearing();
            console.log('ComponentWillUnmount');
        }
    }, [])

    const renderBackBotton = backBotton => {
        if (backBotton) {
            return (
                <button onClick={props.backBottonClicked} >BACK</button>
            )
        } else return null
    },

    renderNextBotton = nextBotton => {
        if (nextBotton) {
            return (
                <button onClick={props.nextButonClicked} >NEXT</button>
            )
        } else return null
    },

    getPageN = n => {
        props.setPageNumber(n);
        props.getUsersThunkCreator(props.usersCountForPage, n, false);
    }

    return (
        <>
        {
            props.isFetchingData ? <Preloader /> : null
        }
        <Users data={props.data}
            renderBackBotton={renderBackBotton}
            backBottom={props.backBottom}
            ArraycountOfUserPages={props.ArraycountOfUserPages}
            getPageN={getPageN}
            selectedPage={props.selectedPage}
            renderNextBotton={renderNextBotton}
            nextButon={props.nextButon}
            followingIsFetching={props.followingIsFetching}
            FollowingThunkCreator={props.FollowingThunkCreator}
        />
    </>
    )
}



const mapStateToProps = state => {
    console.log('MapStateToProps in UsersContainer')
    return {
        data: getUsers(state),
        allUsersCount: selectAllUsersCount(state),
        usersCountForPage: selectUsersPerPage(state),
        selectedPage: selectPage(state),
        nextButon: selectNextBotton(state),
        backBottom: selectBackBotton(state),
        ArraycountOfUserPages: selectPortionOfPages(state),
        isFetchingData: selectIsFetching(state),
        followingIsFetching: selectFollowingIsFetching(state)
    }
},
    UsersContainer = connect(mapStateToProps, {
        setPageNumber,
        nextButonClicked, backBottonClicked, unmountClearing,
        getUsersThunkCreator, FollowingThunkCreator
    })
        (HUsersContainer);
        
export default UsersContainer;