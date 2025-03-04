import React from 'react';
import { BrowserRouter, Routes, Router, Route } from 'react-router-dom';
import PromoBar from './component/layout/PromoBar/Promobar';
import Header from "./component/layout/Header/Header";
import Footer from './component/layout/Footer/Footer';
import HomeContainer from './pages/home/HomeContainer';

function App() {
  return (
    <BrowserRouter>
      <PromoBar />
      <Header />
      {/* Điều hướng trang */}
      <Routes>
        <Route path="/" element={<HomeContainer />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;