import './twenty.css';
import Left from '../../Assets/Game/Controls/Left.png';
import Right from '../../Assets/Game/Controls/Right.png';
import Jump from '../../Assets/Game/Controls/Jump.png';
import Squat from '../../Assets/Game/Controls/Squat.png';
import CoverMouth from '../../Assets/Game/Controls/CoverMouth.png';

function Twenty() {
  return (
    <div className="twenty">
      <div className='gameContainer'>
      <iframe title="twenty" src="https://funhtml5games.com/?embed=2048bit" className="twentyGame" frameborder="0" scrolling="no"></iframe>
        <embed className='endpoint' src="http://localhost:5050/2048"/>
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
              Up
          </div>
          <div className="iconContainer">
              <img className='icon' src={Squat} alt='Squat'/>
              Down
          </div>
        </div>
        <div className="row">
          <div className="iconContainer">
              <img className='icon' src={CoverMouth} alt='Cover Mouth'/>
              Exit
          </div>
        </div>
      </div>        
    </div>
  );
}

export default Twenty;
