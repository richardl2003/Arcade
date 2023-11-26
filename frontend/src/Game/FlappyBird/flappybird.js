import './flappybird.css';



import Right from '../../Assets/Game/Controls/Right.png';

import CoverMouth from '../../Assets/Game/Controls/CoverMouth.png';


function FlappyBird() {
  return (
    <div className="templeRun">
      <div className='gameContainer'>
        <iframe title="game" className="game" src="https://flappybird.io" frameborder="0" />
        <embed className='endpoint' src="http://localhost:5050/flappybird"/>
      </div>
      <div className="instructionsContainer">
        <div className="row">
          <div className="iconContainer">
              <img className='icon' src={Right} alt='Right'/>
              Flap
          </div>
          <div className="iconContainer">
              <img className='icon' src={CoverMouth} alt='CoverMouth'/>
              Exit
          </div>
        </div>
      </div>        
    </div>
  );
}

export default FlappyBird;
