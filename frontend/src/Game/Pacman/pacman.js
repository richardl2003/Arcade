import './pacman.css';

function Pacman() {
  return (
    <div className="pacman">
      <div className='pacmanGameContainer'>
      <iframe title="pac" src="https://cdn.htmlgames.com/ClassicPac/" className="pacmanGame" frameborder="0" scrolling="no"></iframe>
        <embed className='endpoint' src="http://localhost:5050/pacman"/>
      </div>
      <div className="">
      </div>        
    </div>
  );
}

export default Pacman;
