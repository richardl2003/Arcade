import './templeRun.css';
import Left from '../../Assets/Game/Controls/Left.png';
import Right from '../../Assets/Game/Controls/Right.png';
import Jump from '../../Assets/Game/Controls/Jump.png';
import Squat from '../../Assets/Game/Controls/Squat.png';
import CoverMouth from '../../Assets/Game/Controls/CoverMouth.png';
import CrossArms from '../../Assets/Game/Controls/CrossArms.png';

function TempleRun() {
  return (
    <div className="templeRun">
      <div className='gameContainer'>
        <iframe title="game" className="game" src="https://html5.gamedistribution.com/f2af2ecc05a445edb6862c589e996a7e/" frameborder="0" />
        <embed className='endpoint' src="http://localhost:5050/templerun"/>
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
              Play Again
          </div>
          <div className="iconContainer">
              <img className='icon' src={Squat} alt='Squat'/>
              Slide
          </div>
        </div>
        <div className="row">
          <div className="iconContainer">
              <img className='icon' src={CrossArms} alt='Cross Arms'/>
              Jump
          </div>
          <div className="iconContainer">
              <img className='icon' src={CoverMouth} alt='Cover Mouth'/>
              Exit
          </div>
        </div>
      </div>        
    </div>
  );
}

export default TempleRun;
