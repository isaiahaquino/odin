import '../styles/CatalogMain.css';

function CatalogMain(props) {
  return (
    <div className='catalogMain'>
      <h1>home / surfboards / {props.category}</h1>
    </div>
  );
}

export default CatalogMain;