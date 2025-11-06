import './App.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'></Route>
          <Route path='/cart'></Route>
        </Routes>
      </Router>
       
    </div>
  );
}

export default App;
