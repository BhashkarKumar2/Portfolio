import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ImageClassifier from './pages/ImageClassifier';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image-classifier" element={<ImageClassifier />} />
      </Routes>
    </Router>
  );
}

export default App;
