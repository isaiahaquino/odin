function Score(props) {

  return (
    <div className="score">
      <h1>Score: {props.currentScore.toString()}</h1>
      <h1>High Score: {props.highScore.toString()}</h1>
    </div>
  );
}

export default Score;