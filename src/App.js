/* eslint-disable import/no-unresolved */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/swiper-bundle.css';
import './App.scss';

// Public
import HomePage from './pages/HomePage';

// Auth
import SignUpPage from './pages/Auth/SignUpPage';
import PreLoginPage from './pages/Auth/PreLoginPage';
import LoginPage from './pages/Auth/LoginPage';

import ROUTES from './types/routes';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.PRE_LOGIN} element={<PreLoginPage />} />
          <Route path={ROUTES.SIGNUP} element={<SignUpPage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
