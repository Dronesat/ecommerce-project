import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import HomePage from './pages/HomePage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import Account from './pages/Account'
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import KidPage from './pages/KidPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SiteFooter from './components/SiteFooter/SiteFooter';
import ProductDisplayPage from './pages/ProductDisplayPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar/>
        <div className='container'></div>
          <Routes>
            <Route path='/home' element={<HomePage/>} />
            <Route path='/men' element={<MenPage/>} />
            <Route path='/women' element={<WomenPage/>} />
            <Route path='/kid' element={<KidPage/>} />
            <Route path='product' element={<ProductDisplayPage/>}>
              <Route path=':productID' element={<ProductDisplayPage/>}/>
            </Route>
            <Route path='/cart' element={<ShoppingCartPage/>} />
            <Route path='/account' element={<Account/>} />
          </Routes>
        <SiteFooter/>
      </BrowserRouter>   
    </div>
  );
}

export default App;
