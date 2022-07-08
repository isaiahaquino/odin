import '../styles/HomePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage(props) {
  return (
    <div className='homePage'>

      <Header 
      cartItems={props.cartItems}
      />
      
      <div className='homeMain'>

      </div>

      <Footer />
    </div>
  )
}

export default HomePage;