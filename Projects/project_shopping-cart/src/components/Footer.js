import '../styles/Footer.css';
import fb from '../photos/icons/facebook.png';
import tw from '../photos/icons/twitter.png';
import ig from '../photos/icons/instagram.png';

function Footer() {
  return (
    <div className='footer'>
      <div className='main'>
        <div className='logo'>
          <h1>FakeSurf</h1>
        </div>
        <div className='links'>
          <p>Shop</p>
          <p>About</p>
          <p>Lookbook</p>
          <p>Privacy Policy</p>
          <p>Legal</p>
          <p>Terms & Conditions</p>
        </div>
        <div className='subscribe'>
          <p>Subscribe to the newsletter</p>
          <input type='text' placeholder='Your Email'></input>
        </div>
        <div className='social'>
          <p>Social Media</p>
          <div>
            <img src={ig} alt=''></img>
            <img src={fb} alt=''></img>
            <img src={tw} alt=''></img>
          </div>
        </div>
      </div>

      <footer>
        <p>Created by Isaiah Aquino</p>
        <div></div>
        <p>© 2022</p>
      </footer>
    </div>
  );
}

export default Footer;