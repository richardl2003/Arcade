import './templeRun.css';
import Left from '../../Assets/Game/Controls/Left.png';
import Right from '../../Assets/Game/Controls/Right.png';
import Jump from '../../Assets/Game/Controls/Jump.png';
import Squat from '../../Assets/Game/Controls/Squat.png';

function TempleRun() {
  return (
    <div className="templeRun">
      <div className='templeRunContainer'>
        <iframe title="templeRunGame" className="templeRunGame" src="https://html5.gamedistribution.com/f2af2ecc05a445edb6862c589e996a7e/" frameborder="0" />
        <embed className='endpoint' src="http://localhost:5050/templerun"/>
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
              <img className='icon' src={Squat} alt='Squat'/>
              Slide
          </div>
        </div>
        <div className="row">
          <div className="iconContainer">
              <img className='icon' src={Jump} alt='Cross arms'/>
              Jump
          </div>
          <div className="iconContainer">
              <img className='icon' src={Squat} alt='Squat'/>
              Exit
          </div>
        </div>
      </div>        
    </div>
  );
}

export default TempleRun;
