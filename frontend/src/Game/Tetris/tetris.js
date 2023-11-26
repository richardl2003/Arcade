import './tetris.css';

function Tetris() {
  return (
    <div className="tetris">
      <div className='tetrisGameContainer'>
      <iframe title="tetris" src="https://playclassic.games/games/puzzle-solving-nes-games-online/tetris" className="twentyGame" frameborder="0" scrolling="no"></iframe>
        <embed className='endpoint' src="http://localhost:5050/tetris"/>
      </div>
      <div className="">
      </div>        
    </div>
  );
}

export default Tetris;
