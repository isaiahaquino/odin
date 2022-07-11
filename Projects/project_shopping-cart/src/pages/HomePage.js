import '../styles/HomePage.css';
import homebg from '../photos/images/home.jpg';
import { Link } from 'react-router-dom';
import BoardPreview from '../components/BoardPreview';
import featuredBoards from '../data/featuredBoards';

function HomePage(props) {
  return (
    <div className='homePage'>
      <div className='homeMain'>
        <img id='homebg' src={homebg} alt=''></img>
        <div>
          <p>Local family owned & operated<br/>surf shop since 1997</p>
          <button id='shopBtn' type='button'><Link to='/catalog/surfboards'>Shop</Link></button>
        </div>
      </div>

      <div className='featured'>
        <h1>FEATURED PRODUCTS</h1>
        <BoardPreview
          boards={featuredBoards}
          addItemToCart={props.addItemToCart}
        />
      </div>
    </div>
  )
}

export default HomePage;