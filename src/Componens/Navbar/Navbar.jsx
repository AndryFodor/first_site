import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

// Navbar_nav__Krdip == classes.nav
// в модулі класи ідентифікуються унікально, аби не було збігів у класах, оскільки вони клобальні. Ці унікальні значення зберігаються в об'єкті, ключі якого відповідають імені класу

// Щоб дати два класи одному об'єкту, треба виконати конкатенацію імен класів з об'єкта
// let res = `${classes.item} ${classes["ac-tive"]}`

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes["ac-tive"]}>
        <NavLink to="/profile" className={navData =>navData.isActive?classes.activeLink : classes.item}>Profile</NavLink>
        {/* <a href="/profile">Profile</a> */}
      </div>
      <div>
        <NavLink to="/dialogs" className={navData =>navData.isActive?classes.activeLink :  classes.item}>Messages</NavLink>
        {/* <a href="/dialogs">Messages</a> */}
      </div>
      <div>
        <NavLink to="/news" className={navData =>navData.isActive?classes.activeLink :  classes.item}>News</NavLink>
      </div>
      <div>
        <NavLink to="/music" className={navData =>navData.isActive?classes.activeLink :  classes.item}>Music</NavLink>
      </div>
      <div>
        <NavLink to="/settings" className={navData =>navData.isActive?classes.activeLink :  classes.item}>Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
