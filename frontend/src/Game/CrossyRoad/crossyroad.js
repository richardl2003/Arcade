import './crossyroad.css';

function CrossyRoad() {
  return (
    <div className="crossy">
      <div className='crossyGameContainer'>
      <iframe title="crossy" src="https://ducklife.online/crossy-road" className="crossyGame" frameborder="0" scrolling="no"></iframe>
        <embed className='endpoint' src="http://localhost:5050/crossyroad"/>
      </div>
      <div className="">
      </div>        
    </div>
  );
}

export default CrossyRoad;
