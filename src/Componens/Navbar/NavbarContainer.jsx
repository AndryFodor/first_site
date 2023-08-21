import { connect } from "react-redux";
import Navbar from "./Navbar";


const mapStateToProps = state => {
    return{
        fData: state.friendsPage.friendsData
    }
},
mapDispatchToProps = dispatch => {
    return{}
},
NavbarContainer = connect(mapStateToProps, mapDispatchToProps)(Navbar);

export default NavbarContainer;