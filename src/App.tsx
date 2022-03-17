import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Home } from './pages/Home/Home';
import { MovieDetail } from './pages/MovieDetail/MovieDetail';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <div className='container'>
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/movie/:imbID" element={< MovieDetail />} />
            <Route path="*" element={< PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;