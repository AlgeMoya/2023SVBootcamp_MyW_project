import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Choice from './pages/Choice';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/choice" element={<Choice />} />
        </Routes>
      </div>
      <NavigationBar />
    </BrowserRouter>
  );
}

export default App
