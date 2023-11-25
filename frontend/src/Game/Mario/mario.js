import './mario.css';
import { useEffect, useState } from 'react';
import Webcam from "react-webcam";
import axios from 'axios';

function Mario() {
  const [videoSrc, setVideoSrc] = useState('');
  useEffect(() => {

    const fetchData = async () => {
      const response = await axios.get('http://localhost:5050/');
      setVideoSrc(URL.createObjectURL(new Blob([response.data])));
    }; 
    
    fetchData();
  }, [])


  return (
    <div className="App">
      <div className="App-header">
        <div className="game">
          <iframe title="Camera" className="App-game" src="https://playclassic.games/games/jump-and-run-snes-games-online/play-super-mario-world-online/play/" scrolling="none" frameborder="0"></iframe>
        </div>
        <div className="App-video">
          <h3>Video Stream</h3>
          <Webcam src={videoSrc} />
          {/* <img className="App-video-feed" src="http://localhost:5050/video_feed" alt="video stream" /> */}
        </div>        
      </div>
    </div>
  );
}

export default Mario;
