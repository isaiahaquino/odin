import './styles/App.css';
import HomePage from './pages/HomePage';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import CatalogPage from './pages/CatalogPage';
import CartPage from './pages/CartPage';
import uniqid from 'uniqid';
import shortboards from './data/shortboards';
import funboards from './data/funboards';

function App() {

  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const boards = shortboards.concat(funboards);

  function addItemToCart(e) {
    let newItems = cartItems;
    let newItem = boards.filter(board => board.id === e.target.id)[0];
    newItem = JSON.parse(JSON.stringify(newItem));
    newItem.id = cartItemCount;
    newItems.push(newItem);
    setCartItems(newItems);

    setCartItemCount(cartItemCount + 1);
  }

  function removeItemFromCart(e) {
    const newItems = cartItems.filter(item => !(item.id === parseInt(e.target.id)));
    setCartItems(newItems);

    setCartItemCount(cartItemCount - 1);
  }


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
            addItemToCart={addItemToCart}
            />
          }/> 
          <Route exact path='/about' element={
            <AboutPage />
          }/>
          <Route exact path='/catalog/*' element={
            <CatalogPage 
              addItemToCart={addItemToCart}
            />
          }/>
          <Route exact path='/cart' element={
            <CartPage 
            cartItemCount={cartItemCount}
            cartItems={cartItems}
            removeItemFromCart={removeItemFromCart}
            />
          }/>
        </Routes>

        <Footer />

      </div>
    </Router>

  );
}

export default App;
