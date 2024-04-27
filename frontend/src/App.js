import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart'
import Account from './pages/Account'
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import KidPage from './pages/KidPage';
import { Routes, Route } from 'react-router-dom';
import SiteFooter from './components/SiteFooter/SiteFooter';

function App() {
  return (
    <div className="App">   
      <NavigationBar/>
      <div className='container'></div>
        <Routes>
          <Route path='/home' element={<HomePage/>} />
          <Route path='/men' element={<MenPage/>} />
          <Route path='/women' element={<WomenPage/>} />
          <Route path='/kid' element={<KidPage/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/account' element={<Account/>} />
        </Routes>
      <SiteFooter/>
    </div>
  );
}

export default App;
