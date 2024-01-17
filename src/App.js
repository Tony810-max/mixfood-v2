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
import SignUpPage from './pages/SignUpPage';
import SignUpEmailPage from './pages/SignUpEmailPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signupemail" element={<SignUpEmailPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
