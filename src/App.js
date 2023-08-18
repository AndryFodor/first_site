import './App.css';
import Header from './Componens/Header/Header';
import Navbar from './Componens/Navbar/Navbar';
import Profile from './Componens/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import Music from './Componens/Music/Music';
import Settings from './Componens/Settings/Settings';
import DialogsConteiner from './Componens/Dialogs/DialogsConteiner';
import FriendsConteiner from './Componens/Friends/FriendsConteiner';
import NewsContainer from './Componens/News/NewsConteiner';

// Таким чином, коли тег App обернути в тег <StoreContext.Provider><StoreContext.Provider/> (компонента App створила свій контекст, в якому міститься змінна store), всі нащадки можуть використовувати цей контекст і напряму брати з нього store
function App () {
  return (
          <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
              <Routes>
              <Route path='/dialogs/*' element={<DialogsConteiner />}/>
              <Route path='/profile' element ={<Profile />}/>
              <Route path='/news'  element = {<NewsContainer />} />
              <Route path='/music' element={<Music />}/>
              <Route path='/settings' element={<Settings setting1 = 'FIRST setting' />}/>
              <Route path='/friends/*' element = {<FriendsConteiner />} />
              </Routes>
            </div>
          </div>
  );
}


export default App;
