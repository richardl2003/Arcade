import { useNavigate } from 'react-router-dom';
import Exit from '../../Assets/Game/Controls/Exit.png';
import './tetris.css';
import Left from '../../Assets/Game/Controls/Left.png';
import Right from '../../Assets/Game/Controls/Right.png';
import Jump from '../../Assets/Game/Controls/Jump.png';
import Squat from '../../Assets/Game/Controls/Squat.png';
import CrossArms from '../../Assets/Game/Controls/CrossArms.png';

function Tetris() {
  let navigate = useNavigate();

  const redirectHome = () =>{ 
    navigate("/");
  }

  return (
    <div className="tetris">
      <div className='gameContainer'>
      <iframe title="tetris" src="https://playclassic.games/games/puzzle-solving-nes-games-online/tetris" className="game" frameborder="0" scrolling="no"></iframe>
        <embed className='endpoint' src="http://localhost:5050/tetris"/>
      </div>
      <div className="instructionsContainer">
        <div className="row">
          <div className="iconContainer">
              <img className='icon' src={Left} alt='Left'/>
              Move Left
          </div>
          <div className="iconContainer">
              <img className='icon' src={Right} alt='Right'/>
              Move Right
          </div>
        </div>
        <div className="row">
          <div className="iconContainer">
              <img className='icon' src={Jump} alt='Jump'/>
              Enter
          </div>
          <div className="iconContainer">
              <img className='icon' src={Squat} alt='Squat'/>
              Down
          </div>
        </div>
        <div className="row">
        <div className="iconContainer">
              <img className='icon' src={CrossArms} alt='Cross Arms'/>
              Rotate
          </div>
          <div className="iconContainer">
            <img className="exitButton" src={Exit} onClick={redirectHome} alt="Exit Button"/>
          </div>
        </div>
      </div>        
    </div>
  );
}

export default Tetris;
