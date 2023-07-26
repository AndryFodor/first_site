import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import FriendLink from "./Friends/FriendLink";

const Navbar = props => {

  let resultFriends = props.Data.friendsPage.friendsData.map(el => {
    if(el.id <= 3) return <FriendLink logo = {el.img} alt = {el.alt} name = {el.name} id = {el.id}/>
    else return null;
  });

  return (
    <nav className={classes.nav}>
      <div className={classes["ac-tive"]}>
        <NavLink to="/profile" className={navData =>navData.isActive?classes.activeLink : classes.item}>Profile</NavLink>
      </div>
      <div>
        <NavLink to="/dialogs" className={navData =>navData.isActive?classes.activeLink :  classes.item}>Messages</NavLink>
      </div>
      <div>
        <NavLink to="/news" className={navData =>navData.isActive?classes.activeLink :  classes.item}>News</NavLink>
      </div>
      <div>
        <NavLink to="/music" className={navData =>navData.isActive?classes.activeLink :  classes.item}>Music</NavLink>
      </div>
      <div className={classes.settings}>
        <NavLink to="/settings" className={navData =>navData.isActive?classes.activeLink :  classes.item}>Settings</NavLink>
      </div>
      <div>
        <NavLink to="/friends" className={navData =>navData.isActive?classes.activeLink :  classes.item}> <p className={classes.friendsTitle}>Friends</p></NavLink>
        <div className={classes.friends}>{resultFriends}</div>
      </div>
    </nav>
  );
};

export default Navbar;
