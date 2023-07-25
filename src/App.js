
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/main/Main';

function App() {
  return (
    <div className='App'>
    <Router>
    <Routes>
          <Route path="/" element={<div><Main /></div>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;
