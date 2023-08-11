import Friends from "./Friends";


const FriendsConteiner = props =>{

    let FriendsData = props.Data.friendsPage.friendsData

    return <Friends FriendsData = {FriendsData}/>
}

export default FriendsConteiner;