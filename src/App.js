import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Header';
import Mission from './components/Mission';
import MyProfile from './pages/MyProfile';
import Rocket from './components/Rocket';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
