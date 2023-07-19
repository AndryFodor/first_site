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

// №2 Тепер розподіляю дані у ті компоненти, в яких необхідно їх відобразити

function App(props) {

  // №2 Але як видно, в компоненту Dialogs треба передати два масиви даних. Щоб не робити цього, складу їх в один масив і передам дані одним масивом для зручності
  // №2 В компоненту Profile необхідні дані прийдуть під іменем PostsData, а в Dialogs - під іменем Data
  let DialogsData = [props.Data[1], props.Data[2]];

  return (
          <div className="app-wrapper">
            <Header />
            <Navbar />
            <div className='app-wrapper-content'>
              {/* <MyRoute href = '/dialogs' element = {<Dialogs/>}/>
              <MyRoute href = '/profile' element = {<Profile/>}/> 
              Зірочка в path використовується для того, щоб роут працював для будь якого шляху, в якому є частина ...../dialogs.......*/}
              <Routes>
              <Route path='/dialogs/*' element={<Dialogs Data = {DialogsData} />}/>
              <Route path='/profile' element ={<Profile PostsData = {props.Data[0]} />}/>
              <Route path='/news'  element = {<News />} />
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
