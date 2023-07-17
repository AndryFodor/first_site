import './App.css';
import Header from './Componens/Header/Header';
import Navbar from './Componens/Navbar/Navbar';
import Profile from './Componens/Profile/Profile';
import Dialogs from './Componens/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import Music from './Componens/Music/Music';
import News from './Componens/News/News';
import Settings from './Componens/Settings/Settings';
// import MyRoute from './Componens/MyRoute/MyRoute';

// Установлюємо пакет react-router-dom командою npm install react-router-dom -save. -save заносить в package.json про це інформацію, щоб при скачуванні інші користувачі не розбиралися в тому, якого пакета їм не вистачає
// Компонента Route працює подібно конструкції if-else. if(path='/path1'<Component1/>else if(path = 'path2')<Component2/>else if...)
// Але є один нюанс. Ця компонента повинна буде обернена в дві компоненти, аби працювати: <Routes><Routes/> та <BrowserRouter><BrowserRouter/>.Інакше Компонента Route не буде працювати
function App() {
  return (
          <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
              {/* <MyRoute href = '/dialogs' element = {<Dialogs/>}/>
              <MyRoute href = '/profile' element = {<Profile/>}/> 
              Зірочка в path використовується для того, щоб роут працював для будь якого шляху*/}
              <Routes>
              <Route path='/dialogs/*' element={<Dialogs />}/>
              <Route path='/profile' element ={<Profile />}/>
              <Route path='/news' element={<News />} />
              <Route path='/music' element={<Music />}/>
              <Route path='/settings' element={<Settings setting1 = 'FIRST setting' />}/>
              </Routes>
              {/* <Profile /> */}
              {/* <Dialogs /> */}
            </div>
          </div>
  );
}


export default App;
