import './spaceinvaders.css';

function SpaceInvaders() {
  return (
    <div className="space">
      <div className='spaceGameContainer'>
      <iframe title="space" src="https://freeinvaders.org" className="spaceGame" frameborder="0" scrolling="no"></iframe>
        <embed className='endpoint' src="http://localhost:5050/spaceinvaders"/>
      </div>
      <div className="">
      </div>        
    </div>
  );
}

export default SpaceInvaders;
