import '../styles/HomePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import homebg from '../photos/images/home.jpg';

function HomePage(props) {
  return (
    <div className='homePage'>

      <Header 
      cartItems={props.cartItems}
      />
      
      <div className='homeMain'>
        <img id='homebg' src={homebg} alt=''></img>
        <div>
          <p>Local family owned & operated<br/>surf shop since 1997</p>
          <button id='shopBtn' type='button'>Shop</button>
        </div>
      </div>

      <div className='featured'>
        <h1>FEATURED PRODUCTS</h1>
        <div className='featuredContainer'>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default HomePage;