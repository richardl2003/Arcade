import './spaceinvaders.css';
import LeftLeg from '../../Assets/Game/Controls/LeftLeg.png';
import RightLeg from '../../Assets/Game/Controls/RightLeg.png';
import CoverMouth from '../../Assets/Game/Controls/CoverMouth.png';
import CrossArms from '../../Assets/Game/Controls/CrossArms.png';

function SpaceInvaders() {
  return (
    <div className="spaceInvaders">
      <div className='gameContainer'>
      <iframe title="space" src="https://freeinvaders.org" className="spaceGame" frameborder="0" scrolling="no"></iframe>
        <embed className='endpoint' src="http://localhost:5050/spaceinvaders"/>
      </div>
      <div className="instructionsContainer">
        <div className="row">
          <div className="iconContainer">
              <img className='icon' src={LeftLeg} alt='LeftLeg'/>
              Move Left
          </div>
          <div className="iconContainer">
              <img className='icon' src={RightLeg} alt='RightLeg'/>
              Move Right
          </div>
        </div>
        <div className="row">
          <div className="iconContainer">
              <img className='icon' src={CrossArms} alt='Cross Arms'/>
              Fire
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

export default SpaceInvaders;
