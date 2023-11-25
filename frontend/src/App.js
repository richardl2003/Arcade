import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './Home/homepage';
import TempleRun from './Game/TempleRun/templeRun';

function App() {

  return (
    <div className="App">
      <Router basename="/">
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/templeRun' element={<TempleRun/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
