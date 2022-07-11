import '../styles/CatalogMain.css';
import shortboards from '../data/shortboards';
import funboards from '../data/funboards';
import BoardPreview from './BoardPreview';

function CatalogMain(props) {

  let boards = [];

  if (props.category === 'shortboards') {
    boards = shortboards;
  } else if (props.category === 'funboards') {
    boards = funboards;
  }

  return (
    <div className='catalogMain'>
      <h1>home / surfboards / {props.category}</h1>
      <BoardPreview 
        boards={boards}
      />
    </div>
  );
}

export default CatalogMain;