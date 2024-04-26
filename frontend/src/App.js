import './App.css';
import NavigationBar from './components/NavigationBar/NavigationBar';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart'
import Account from './pages/Account'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">   
      <NavigationBar/>
      <div className='container'></div>
        <Routes>
          <Route path='/home' element={<HomePage/>} />
          <Route path='/men' element={<HomePage/>} />
          <Route path='/women' element={<HomePage/>} />
          <Route path='/kid' element={<HomePage/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/account' element={<Account/>} />
        </Routes>
    </div>
  );
}

export default App;
