import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
