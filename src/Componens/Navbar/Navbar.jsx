import classes from'./Navbar.module.css'

// Navbar_nav__Krdip == classes.nav
// в модулі класи ідентифікуються унікально, аби не було збігів у класах, оскільки вони клобальні. Ці унікальні значення зберігаються в об'єкті, ключі якого відповідають імені класу

// Щоб дати два класи одному об'єкту, треба виконати конкатенацію імен класів з об'єкта
// let res = `${classes.item} ${classes["ac-tive"]}`

const Navbar = () =>{
    return (
        <nav className= {classes.nav}>
        <div className = {`${classes.item} ${classes["ac-tive"]}`}><a href='https://www.google.com.ua'>Profile</a></div>
        <div className = {classes.item} ><a href='https://www.google.com.ua'>Messages</a></div>
        <div className = {classes.item}><a href='https://www.google.com.ua'>News</a></div>
        <div className = {classes.item}><a href='https://www.google.com.ua'>Music</a></div>
        <div className = {classes.item}><a href='https://www.google.com.ua'>Settings</a></div>
      </nav>
    )
}

export default Navbar;