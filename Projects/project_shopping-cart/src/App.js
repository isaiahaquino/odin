import './styles/App.css';
import HomePage from './pages/HomePage';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import featured from './data/featuredBoards';

function App() {

  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <Router>
      <div>

        <Header 
        cartItemCount={cartItemCount}
        />

        <Routes>
          <Route exact path='/' element={
            <HomePage
            cartItems={cartItemCount}
            />
          }/> 
          <Route exact path='/about' element={
            <AboutPage />
          }/>
          <Route exact path='/catalog/*' element={
            <CatalogPage />
          }/>
          <Route exact path='/cart' element={
            <CartPage 
            cartItemCount={cartItemCount}
            cartItems={featured}
            />
          }/>
        </Routes>

        <Footer />

      </div>
    </Router>

  );
}

export default App;
