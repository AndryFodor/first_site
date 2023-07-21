import './App.css';
import Header from './Componens/Header/Header';
import Navbar from './Componens/Navbar/Navbar';
import Profile from './Componens/Profile/Profile';
import Dialogs from './Componens/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import Music from './Componens/Music/Music';
import News from './Componens/News/News';
import Settings from './Componens/Settings/Settings';
import Friends from './Componens/Friends/Friends';

function App(props) {
  return (
          <div className="app-wrapper">
            <Header />
            <Navbar Data = {props.Data.friendsPage}/>
            <div className='app-wrapper-content'>
              <Routes>
              <Route path='/dialogs/*' element={<Dialogs Data = {props.Data.dialogsPage} />}/>
              <Route path='/profile' element ={<Profile Data = {props.Data.profilePage} />}/>
              <Route path='/news'  element = {<News />} />
              <Route path='/music' element={<Music />}/>
              <Route path='/settings' element={<Settings setting1 = 'FIRST setting' />}/>
              <Route path='/friends/*' element = {<Friends Data = {props.Data.friendsPage} />} />
              </Routes>
            </div>
          </div>
  );
}


export default App;
