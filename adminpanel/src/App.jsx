import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar/NavigationBar';
import AddProductPage from './pages/AddProductPage';
import ListProductPage from './pages/ListProductPage';
import SiteFooter from './components/SiteFooter/SiteFooter';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route path='/addproduct' element={<AddProductPage/>} /> 
          <Route path='/listproduct' element={<ListProductPage/>} />
        </Routes>
        <SiteFooter/>
      </BrowserRouter>
      
    </div>
  )
}

export default App