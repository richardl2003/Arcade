import { useNavigate } from 'react-router-dom';
import Exit from '../../Assets/Game/Controls/Exit.png';
import './mario.css';
import Left from '../../Assets/Game/Controls/Left.png';
import Right from '../../Assets/Game/Controls/Right.png';
import Jump from '../../Assets/Game/Controls/Jump.png';
import Squat from '../../Assets/Game/Controls/Squat.png';


function Mario() {
  let navigate = useNavigate();

  const redirectHome = () =>{ 
    navigate("/");
  }

  return (
    <div className="mario">
      <div className='gameContainer'>
        <iframe title="game" className="game" src="https://playclassic.games/games/jump-and-run-snes-games-online/play-super-mario-world-online/play/" scrolling="no" frameborder="0" />
        <embed className='endpoint' src="http://localhost:5050/mario"/>
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
              Jump
          </div>
          <div className="iconContainer">
              <img className='icon' src={Squat} alt='Squat'/>
              Sprint/Throw
          </div>
        </div>
        <div className="row">
          <div className="iconContainer">
            <img className="exitButton" src={Exit} onClick={redirectHome} alt="Exit Button"/>
          </div>
        </div>
      </div>        
    </div>
  );
}
export default Mario;
