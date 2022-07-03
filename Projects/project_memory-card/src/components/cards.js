import '../styles/Cards.css';

function Cards(props) {

  return (
    <div className='cardContainer'>
      {props.cards.map((card) => {
        return (
          <div className='card' key={card.id} id={card.id} onClick={props.handleClick}>
            <img src={card.src} id={card.id} alt={card.name}></img>
            <h1 id={card.id}>{card.name}</h1>
          </div>
        )
      })}
    </div>
  );
}

export default Cards;