import React, {useState} from 'react';
import cardsArray from './cards';

function Main() {
  const [cards, setCards] = useState(cardsArray);

  return (
    <div className='main'>
      {cards.map((card, i) => {
        return (
          <div className='main'>
          
          </div>
        )
      })}
    </div>
  );
}

export default Main;