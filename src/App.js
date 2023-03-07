import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Header from './components/Header';
import Rocket from './components/Rocket';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/missions" element={<Missions />} />
          <Route path="/myprofile" element={<MyProfile />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
