import '../styles/CatalogMain.css';
import shortboards from '../data/shortboards';
import funboards from '../data/funboards';
import BoardPreview from './BoardPreview';

function CatalogMain(props) {

  let boards = [];

  if (props.category === 'surfboards') {
    shortboards.forEach((board) => {
      boards.push(board);
    });
    funboards.forEach((board) => {
      boards.push(board);
    });
  } else if (props.category === 'surfboards / shortboards') {
    boards = shortboards;
  } else if (props.category === 'surfboards / funboards') {
    boards = funboards;
  }

  return (
    <div className='catalogMain'>
      <h1>home / {props.category}</h1>
      <BoardPreview 
        boards={boards}
        addItemToCart={props.addItemToCart}
      />
    </div>
  );
}

export default CatalogMain;