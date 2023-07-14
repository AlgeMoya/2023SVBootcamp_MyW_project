import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import ChoicePage from './pages/Page8';
import NavigationBar from './components/NavigationBar';
import Page8 from './pages/Page8';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/choice" element={<ChoicePage />} />
          <Route path="/page8" element={<Page8 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
