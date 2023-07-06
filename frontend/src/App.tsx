import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import Choice from './pages/Choice';
import Header from './components/NavigationBar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/choice" element={<Choice />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
