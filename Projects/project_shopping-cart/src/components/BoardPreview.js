import '../styles/BoardPreview.css';

function BoardPreview(props) {
  return (
    <div className='boards'>
      {props.boards.map((board) => {
        return (
          <div className="boardContainer" key={board.id} id={board.id}>
            <h1>{board.name}</h1>
            <h2>{board.description}</h2>
            <h3>{board.price}</h3>
            <img src={require(`../photos/images/${board.img}`)} alt=''></img>
            <button type='button' className='addBtn' id={board.id} onClick={props.addItemToCart}>Add to cart</button>
          </div>
        );
      })}
    </div>
  );
}

export default BoardPreview;
