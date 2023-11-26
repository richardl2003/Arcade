import './flappybird.css';

function FlappyBird() {
  return (
    <div className="flappy">
      <div className='flappyGameContainer'>
      <iframe title="flappyGame" className="flappyGame" src="https://flappybird.io" scrolling="none" frameborder="0"/>
        <embed className='endpoint' src="http://localhost:5050/flappybird"/>
      </div>
      <div className="">
      </div>        
    </div>
  );
}

export default FlappyBird;
