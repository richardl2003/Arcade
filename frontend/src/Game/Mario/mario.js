import './mario.css';

function Mario() {
  return (
    <div className="mario">
      <div className='marioGameContainer'>
      <iframe title="marioGame" className="marioGame" src="https://playclassic.games/games/jump-and-run-snes-games-online/play-super-mario-world-online/play/" scrolling="none" frameborder="0"/>
        <embed className='endpoint' src="http://localhost:5050/mario"/>
      </div>
      <div className="">
      </div>        
    </div>
  );
}

export default Mario;
