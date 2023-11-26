import './pacman.css';
import Left from '../../Assets/Game/Controls/Left.png';
import Right from '../../Assets/Game/Controls/Right.png';
import LeftLeg from '../../Assets/Game/Controls/LeftLeg.png';
import RightLeg from '../../Assets/Game/Controls/RightLeg.png';
import CoverMouth from '../../Assets/Game/Controls/CoverMouth.png';


function Pacman() {
  return (
    <div className="templeRun">
      <div className='gameContainer'>
        <iframe title="game" className="game" src="https://cdn.htmlgames.com/ClassicPac/" frameborder="0" />
        <embed className='endpoint' src="http://localhost:5050/pacman"/>
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
              <img className='icon' src={LeftLeg} alt='Left Leg'/>
              Up
          </div>
          <div className="iconContainer">
              <img className='icon' src={Right} alt='Right Leg'/>
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



export default Pacman;
