import '../styles/Header.css';
import search from '../photos/icons/magnify.png';
import cart from '../photos/icons/cart-outline.png';

function Header(props) {

  return (
    <header>
      <h1>ShopName</h1>
      <div className='searchBar'>
        <img src={search} alt=''></img>
        <input type='text' placeholder='Search...'></input>
      </div>
      <nav>
        <div className='nav about'>
          <a href='../pages/AboutPage.js'>About</a>
        </div>
        <div className='nav shop'>
          <a href='../pages/CatalogPage.js'>Shop</a>
        </div>
        <div className='nav cart'>
          <img src={cart} alt=''></img>
          <p>{props.cartItems}</p>
          <a href='../pages/CartPage.js'>Cart</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;