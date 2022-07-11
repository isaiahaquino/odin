import '../styles/CatalogPage.css';
import { Route, Routes, Link } from 'react-router-dom';
import CatalogMain from '../components/CatalogMain';

function CatalogPage(props) {
  return (
    <div className='catalogPage'>
      <div className='catalogNav'>
        <h1>Catalog</h1>
        <ul className='listMain'>
          <li>
            <Link to='surfboards'>Surfboards</Link>
            <ul className='listSub'>
              <li><Link className='catalogLink' style={{textDecoration:'none'}} to='surfboards/shortboards'>Shortboards</Link></li>
              <li><Link className='catalogLink' style={{textDecoration:'none'}} to='surfboards/funboards'>Funboards</Link></li>
              <li><Link className='catalogLink' style={{textDecoration:'none'}} to='surfboards/longboards'>Longboards</Link></li>
            </ul>
          </li>
        </ul>
      </div>

      <Routes>
        <Route path='surfboards' element={
          <CatalogMain
            category={'surfboards'}
            addItemToCart={props.addItemToCart}
          />
        }/>
        <Route path='surfboards/shortboards' element={
          <CatalogMain 
            category={'surfboards / shortboards'}
            addItemToCart={props.addItemToCart}
          />
        }/>
        <Route path='surfboards/funboards' element={
          <CatalogMain 
            category={'surfboards / funboards'}
            addItemToCart={props.addItemToCart}
          />
        }/>
        <Route path='surfboards/longboards' element={
          <CatalogMain 
            category={'surfboards / longboards'}
            addItemToCart={props.addItemToCart}
          />
        }/>
      </Routes>
    </div>
  );
}

export default CatalogPage;