import { useNavigate } from 'react-router-dom';
import Exit from '../../Assets/Game/Controls/Exit.png';
import './flappybird.css';
import Right from '../../Assets/Game/Controls/Right.png';

function FlappyBird() {
  let navigate = useNavigate();

  const redirectHome = () =>{ 
    navigate("/");
  }

  return (
    <div className="flappyBird">
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
            <img className="exitButton" src={Exit} onClick={redirectHome} alt="Exit Button"/>
          </div>
        </div>
      </div>        
    </div>
  );
}

export default FlappyBird;
