import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './Home/homepage';
import { routes } from './Home/games';

function App() {
  console.log(routes)
  return (
    <div className="App">
      <Router basename="/">
          <Routes>
            <Route path='/' element={<Homepage/>}/>
            {
              routes.map((route) => (
                <Route key={route.id} path={route.path} element={route.element}/>
              ))
            }
          </Routes>
      </Router>
    </div>
  );
}

export default App;
