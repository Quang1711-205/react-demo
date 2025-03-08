import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import PromoBar from './component/layout/PromoBar/Promobar';
import Header from "./component/layout/Header/Header";
import Footer from './component/layout/Footer/Footer';
import Home from './pages/home/Home';
import ProductDetails from './pages/ProductDetails/ProductDetai';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <PromoBar />
      <Header />
        {/* Điều hướng trang */}
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/san-pham/:id" element={<ProductDetails />} /> 
        </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;