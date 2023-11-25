import { React, useEffect, useRef, useCallback} from 'react';
import './homepage.css';
// import { useNavigate } from 'react-router-dom';
import Settings from '../Assets/Home/Settings.svg';
import Title from '../Assets/Home/Title.png';
import Exercise from '../Assets/Home/Exercise.svg';
import Clap from '../Assets/Home/Clap.svg';
import Profile from '../Assets/Home/Profile.png';
import TempleRunBackground from '../Assets/Game/TempleRun/TempleRunBackground.png'
import TempleRunCover from '../Assets/Game/TempleRun/TempleRunCover.png';
import MarioCover from '../Assets/Game/Mario/MarioCover.png';
import FlappyBirdCover from '../Assets/Game/FlappyBird/FlappyBirdCover.png';
import TwentyCover from '../Assets/Game/2048/2048Cover.png';
import PacmanCover from '../Assets/Game/Pacman/PacmanCover.png';

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
      <div className='carouselContainer'>
        <GameCarousel/>
        <div className='divider'/>
      </div>
    </div>
  );
}

const GameCarousel = () => {
  const carouselRef = useRef(null);
  const gameCount = 4 // Max amount of games to scroll right to

  // Swipe left or right based on key pressed
  const handleKeyDown = useCallback((event) => {
    // remove event listener so user cannot scroll during a current scroll
    window.removeEventListener('keydown', handleKeyDown);

    // Retrieve current margin
    const computedStyle = window.getComputedStyle(carouselRef.current);
    var marginLeft = computedStyle.getPropertyValue('margin-left');
    marginLeft = parseInt(marginLeft, 10);

    // Add to margin based on key pressed
    if (event.key === 'ArrowLeft' && marginLeft < 50) marginLeft += 210;
    else if (event.key === 'ArrowRight' && marginLeft > -(gameCount*210 - 50)) marginLeft -= 210;
    carouselRef.current.style.marginLeft = `${marginLeft}px`;

    // wait 0.4 seconds until user is allowed to scroll again
    setTimeout(() => {
      window.addEventListener('keydown', handleKeyDown);
    }, 200);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className='carousel' ref={carouselRef}>
      <Game name="Temple Run" cover={TempleRunCover} backgroundCover={TempleRunBackground}/>
      <Game name="Mario" cover={MarioCover}/>
      <Game name="Flappy Bird" cover={FlappyBirdCover}/>
      <Game name="2048" cover={TwentyCover}/>
      <Game name="Pacman" cover={PacmanCover}/>
      <Game name="Temple Run" cover={TempleRunCover} backgroundCover={TempleRunBackground}/>
      <Game name="Mario" cover={MarioCover}/>
      <Game name="Flappy Bird" cover={FlappyBirdCover}/>
      <Game name="2048" cover={TwentyCover}/>
      <Game name="Pacman" cover={PacmanCover}/>
    </div>
  )
}

const Game = ({name, cover, backgroundCover}) => {
  return (
    <img className='gameCover' src={cover} alt={`${name}`}/>
  );
}

/* <button type='button' onClick={() => navigate('/game/1')}>
  Temple Run
</button>
<button type='button' onClick={() => navigate('/game/2')}>
  Mario
</button> */

export default Homepage;
