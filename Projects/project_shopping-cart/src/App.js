import './styles/App.css';
import HomePage from './pages/HomePage';
import React, { useState, useEffect } from 'react';

function App() {

  const [cartItems, setCartItems] = useState(0);

  return (
    <div>
      <HomePage
        cartItems={cartItems}
      />
    </div>
  );
}

export default App;
