import { React, useEffect, useRef, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './homepage.css';
import Settings from '../Assets/Home/Settings.svg';
import Title from '../Assets/Home/Title.png';
import Exercise from '../Assets/Home/Exercise.svg';
import Clap from '../Assets/Home/Clap.svg';
import Profile from '../Assets/Home/Profile.png';
import { games } from './games.js';

function Homepage() { 
  return (
    <div className='homepage'>
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
  let navigate = useNavigate();
  const carouselRef = useRef(null);
  const gameCount = 5 // Max amount of games to scroll right to

  // mainGameIndex keeps track for div elements, curMainGameIndex keeps track for callback to route
  const [mainGameIndex, setMainGameIndex] = useState(0);
  var curMainGameIndex = useRef(0);

  // Tracks name and background transition
  const [backgroundTransition, setBackgroundTransition] = useState("");
  const [nameTransition, setNameTransition] = useState("");

  // Execute event based on key pressed
  const handleKeyDown = useCallback((event) => {
    // If enter key pressed, enter that game
    if (event.key === 'Enter') {
      navigate(games[curMainGameIndex.current].route)
      return;
    }

    // Add to margin based on left/right key pressed, and set the new main game hovered
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      // remove event listener so user cannot scroll during a current scroll
      window.removeEventListener('keydown', handleKeyDown);

      // Retrieve current margin
      const computedStyle = window.getComputedStyle(carouselRef.current);
      var marginLeft = computedStyle.getPropertyValue('margin-left');
      marginLeft = parseInt(marginLeft, 10);

      // Shift left
      if (event.key === 'ArrowLeft' && marginLeft < 50) {
        marginLeft += 210;

        curMainGameIndex.current -= 1;
        setMainGameIndex((prevIndex) => prevIndex - 1);

        // Add background and name transition
        setBackgroundTransition("backgroundTransition");
        setNameTransition("nameTransition");
        setTimeout(() => {
          setBackgroundTransition("");
          setNameTransition("");
        }, 200);
      }

      // Shift right
      else if (event.key === 'ArrowRight' && marginLeft > -(gameCount*210 - 50)) {
        marginLeft -= 210;

        curMainGameIndex.current += 1;
        setMainGameIndex((prevIndex) => prevIndex + 1);

        // Add background transition
        setBackgroundTransition("backgroundTransition");
        setNameTransition("nameTransition");
        setTimeout(() => {
          setBackgroundTransition("");
          setNameTransition("");
        }, 200);
      }
      carouselRef.current.style.marginLeft = `${marginLeft}px`;

      // wait 0.4 seconds until user is allowed to scroll again
      setTimeout(() => {
        window.addEventListener('keydown', handleKeyDown);
      }, 200);
    }
  }, [navigate]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className='carousel' ref={carouselRef}>
      {games.map((game, index) => (
        <Game
          key={index}
          name={game.name}
          cover={game.cover}
          isMain={index === mainGameIndex}
        />
      ))}
      <div className='mainGameTitle' id={nameTransition}>
        {games[mainGameIndex].name}
      </div>
      <img className='homeBackground' id={backgroundTransition} src={games[mainGameIndex].backgroundCover} alt='homeBackground' />
    </div>
  )
}

const Game = ({name, cover, backgroundCover, isMain}) => {
  return (
    <img className='gameCover' id={isMain ? 'mainGame' : ''} src={cover} alt={`${name}`}/>
  );
}

export default Homepage;
