import '../styles/HomePage.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function HomePage(props) {
  return (
    <div className='homePage'>
      <Header 
      cartItems={props.cartItems}
      />

      <Footer />
    </div>
  )
}

export default HomePage;