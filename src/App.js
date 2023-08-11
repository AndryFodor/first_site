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

function App(props) {
  return (
          <div className="app-wrapper">
            <Header />
            <Navbar Data = {props.state}/>
            <div className='app-wrapper-content'>
              <Routes>
              <Route path='/dialogs/*' element={<DialogsConteiner data = {props.state} dispatch = {props.dispatch} />}/>
              <Route path='/profile' element ={<Profile state = {props.state} dispatch = {props.dispatch} />}/>
              <Route path='/news'  element = {<NewsContainer data = {props.state} dispatch = {props.dispatch} />} />
              <Route path='/music' element={<Music />}/>
              <Route path='/settings' element={<Settings setting1 = 'FIRST setting' />}/>
              <Route path='/friends/*' element = {<FriendsConteiner Data = {props.state} />} />
              </Routes>
            </div>
          </div>
  );
}


export default App;
