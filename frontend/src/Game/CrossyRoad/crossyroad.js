import { useNavigate } from 'react-router-dom';
import Exit from '../../Assets/Game/Controls/Exit.png';
import './crossyroad.css';
import Left from '../../Assets/Game/Controls/Left.png';
import Right from '../../Assets/Game/Controls/Right.png';
import Jump from '../../Assets/Game/Controls/Jump.png';
import Squat from '../../Assets/Game/Controls/Squat.png';
import CrossArms from '../../Assets/Game/Controls/CrossArms.png';

function CrossyRoad() {
  let navigate = useNavigate();

  const redirectHome = () =>{ 
    navigate("/");
  }

  return (
    <div className="crossyRoad">
      <div className='gameContainer'>
        <iframe title="game" className="game" src="https://ducklife.online/crossy-road" scrolling="no" frameborder="0" />
        <embed className='endpoint' src="http://localhost:5050/crossyroad"/>
      </div>
      <div className="instructionsContainer">
        <div className="row">
          <div className="iconContainer">
              <img className='icon' src={Left} alt='Left'/>
              Move left
          </div>
          <div className="iconContainer">
              <img className='icon' src={Right} alt='Right'/>
              Move Right
          </div>
        </div>
        <div className="row">
          <div className="iconContainer">
              <img className='icon' src={Jump} alt='Jump'/>
              Play Again
          </div>
          <div className="iconContainer">
              <img className='icon' src={RightLeg} alt='Squat'/>
              Up
          </div>
        </div>
        <div className="row">
          <div className="iconContainer">
              <img className='icon' src={LeftLeg} alt='Cross arms'/>
              Down
          </div>
          <div className="iconContainer">
            <img className="exitButton" src={Exit} onClick={redirectHome} alt="Exit Button"/>
          </div>
        </div>
      </div>        
    </div>
  );
}

export default CrossyRoad;
