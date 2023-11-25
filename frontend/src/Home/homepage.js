import './homepage.css';
import { useNavigate } from 'react-router-dom';

function Homepage() {

  let navigate = useNavigate(); 

  return (
    <div>
        <button type='button' onClick={() => navigate('/game/1')}>
          Temple Run
        </button>
        <button type='button' onClick={() => navigate('/game/2')}>
          Mario
        </button>
    </div>
  );
}

export default Homepage;
