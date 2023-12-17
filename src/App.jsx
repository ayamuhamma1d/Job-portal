import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import CustomNavbar from './shared/CustomNavbar';
import RegisterCandidate from './components/registerCandidate/RegisterCandidate';
import ListCandidate from './components/listCandidate/ListCandidate';
import NotFoundPage from './shared/notFoundPage/NotFoundPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register-candidate" element={<RegisterCandidate />} />
          <Route path="/list-candidate" element={<ListCandidate />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
