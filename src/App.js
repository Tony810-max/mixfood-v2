/* eslint-disable import/no-unresolved */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/swiper-bundle.css';
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
