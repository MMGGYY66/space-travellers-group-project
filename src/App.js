import {
  BrowserRouter as
  Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Missions from './components/Missions';
import Rockets from './components/Rockets';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Missions />} />
        <Route path="/Rockets" element={<Rockets />} />
        <Route path="/Missions" element={<Missions />} />
      </Routes>
    </Router>
  );
}

export default App;
