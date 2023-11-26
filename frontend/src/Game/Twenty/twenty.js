import './twenty.css';

function Twenty() {
  return (
    <div className="twenty">
      <div className='twentyGameContainer'>
      <iframe title="twenty" src="https://funhtml5games.com/?embed=2048bit" className="twentyGame" frameborder="0" scrolling="no"></iframe>
        <embed className='endpoint' src="http://localhost:5050/2048"/>
      </div>
      <div className="">
      </div>        
    </div>
  );
}

export default Twenty;
