import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import Navbar from './components/Navbar';
import 'path-browserify';
import 'os-browserify/browser';
import 'crypto-browserify';
import 'buffer';
import 'stream-browserify';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;

