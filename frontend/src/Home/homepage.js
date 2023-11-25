import './homepage.css';
import { useNavigate } from 'react-router-dom';
import Settings from '../Assets/Home/Settings.svg';
import TempleRunBackground from '../Assets/Game/TempleRun/TempleRunBackground.png'

function Homepage() {

  let navigate = useNavigate(); 

  return (
    <div className='homepage'>
      <img className='homeBackground' src={TempleRunBackground} />
      <div className='navbar'>
        <img className='settingsIcon' src={Settings}/>
        <div className='time'>
          1:30 PM
        </div>
      </div>
      <div className='carousel'>
        Hello
      </div>
    </div>
  );
}

{/* <button type='button' onClick={() => navigate('/game/1')}>
  Temple Run
</button>
<button type='button' onClick={() => navigate('/game/2')}>
  Mario
</button> */}

export default Homepage;
