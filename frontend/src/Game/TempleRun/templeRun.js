import './templeRun.css';

function TempleRun() {
  return (
    <div className="templeRun">
      <div className='gameContainer'>
        <iframe title="game" className="game" src="https://html5.gamedistribution.com/f2af2ecc05a445edb6862c589e996a7e/" frameborder="0" />
      </div>
      <div className="App-video">
        <embed className='endpoint' src="http://localhost:5050/templerun"/>
      </div>        
    </div>
  );
}

export default TempleRun;
