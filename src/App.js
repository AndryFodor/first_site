import './App.css';
import Header from './Componens/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Music from './Componens/Music/Music';
import Settings from './Componens/Settings/Settings';
import DialogsConteiner from './Componens/Dialogs/DialogsConteiner';
import FriendsConteiner from './Componens/Friends/FriendsConteiner';
import NewsContainer from './Componens/News/NewsConteiner';
import NavbarContainer from './Componens/Navbar/NavbarContainer';
import UsersContainer from './Componens/Users/UsersContainer';
import ProfileContainer from './Componens/Profile/Profile_Container';

// Таким чином, коли тег App обернути в тег <StoreContext.Provider><StoreContext.Provider/> (компонента App створила свій контекст, в якому міститься змінна store), всі нащадки можуть використовувати цей контекст і напряму брати з нього store
// №2 Тепер тег App обернений тегом Provider з бібліотеки react-redux. Але суть та сама

// У шлляху profile/:userId? userId - це параметр, який приходить в адресовому рядочку. Реакт його може зчитати за допомогою гуків і в об'єкті match в об'єкт params буде передана відповідна властивість з її значенням. ? означає, що цей параметр не є обов'язковим, я якщо його не буде, то роут повинен відобразити просто профіль
function App () {
  return (
          <div className="app-wrapper">
            <Header />
            <NavbarContainer />
            <div className='app-wrapper-content'>
              <Routes>
              <Route path='/dialogs/*' element={<DialogsConteiner />}/>
              <Route path='/profile/:userId?' element ={<ProfileContainer />}/>
              <Route path='/news'  element = {<NewsContainer />} />
              <Route path='/music' element={<Music />}/>
              <Route path='/settings' element={<Settings setting1 = 'FIRST setting' />}/>
              <Route path='/friends/*' element = {<FriendsConteiner />} />
              <Route path='/users' element = { <UsersContainer /> } />
              </Routes>
            </div>
          </div>
  );
}


export default App;
