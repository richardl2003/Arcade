import './homepage.css';
// import { useNavigate } from 'react-router-dom';
import TempleRunBackground from '../Assets/Game/TempleRun/TempleRunBackground.png'
import Settings from '../Assets/Home/Settings.svg';
import Title from '../Assets/Home/Title.png';
import Exercise from '../Assets/Home/Exercise.svg';
import Clap from '../Assets/Home/Clap.svg';
import Profile from '../Assets/Home/Profile.png';

function Homepage() {

  // let navigate = useNavigate(); 

  return (
    <div className='homepage'>
      <img className='homeBackground' src={TempleRunBackground} alt='homeBackground' />
      <div className='navbar'>
        <div className='leftNavbar'>
          <img className='settingsIcon' src={Settings} alt='settingsIcon'/>
          <div className='time'>
            1:30 PM
          </div>
        </div>
        <img className='title' src={Title} alt='Title' />
        <div>
          <img className='exercise' src={Exercise} alt='Exercise' />
          <img className='clap' src={Clap} alt='Clap' />
          <img className='profile' src={Profile} alt='Profile' />
        </div>
      </div>
      <div className='carousel'>
        Hello
      </div>
    </div>
  );
}

/* <button type='button' onClick={() => navigate('/game/1')}>
  Temple Run
</button>
<button type='button' onClick={() => navigate('/game/2')}>
  Mario
</button> */

export default Homepage;
