import {
  BrowserRouter as
  Router,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Rocket from './components/Rockets';

function App() {
  return (
    <Router>
      <Header />
      <Rocket />
    </Router>
  );
}

export default App;
