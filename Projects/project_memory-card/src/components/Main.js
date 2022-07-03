import React, {useState} from 'react';
import cardsArray from './cardsArray';
import Cards from './Cards';
import Score from './Score';

function Main() {

  const defaultArray = JSON.parse(JSON.stringify(cardsArray));

  const [cards, setCards] = useState(defaultArray);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const handleClick = (e) => {
    const newCards = cards;
    const card = newCards.filter((card) => card.id == e.target.id)[0].selected;
    const index = newCards.findIndex((card) => card.id == e.target.id);

    if (!card) {
      newCards[index].selected = true;
      shuffleCards(newCards);
      handleScore(1);
    } else {
      handleScore(0);
      resetGame();
    }
  };

  const handleScore = (num) => {
    if (num === 0) {
      setCurrentScore(0);
    } else {
      const score = currentScore + num;
      setCurrentScore(score);
      
      if (currentScore >= highScore) {
        setHighScore(score);
      }
    }
  }

  const shuffleCards = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    setCards(array);
  }

  const resetGame = () => {
    console.log('You lose!\nGame is resetting...');
    const newArray = JSON.parse(JSON.stringify(cardsArray));
    shuffleCards(newArray);
  };

  return (
    <div className='main'>
      <Score
        currentScore={currentScore}
        highScore={highScore}
      />
      <Cards 
        cards={cards} 
        handleClick={handleClick}
      />
    </div>
  );
}

export default Main;