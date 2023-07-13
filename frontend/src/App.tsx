import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';

import ChoicePage from './pages/ChoicePage';
import NavigationBar from './components/NavigationBar';
import Background from './components/Background';
import SettingPage from './pages/SettingPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/choice" element={<ChoicePage />} />
          <Route path="/background" element={<Background />} />
          <Route path="/setting" element={<SettingPage />} />
        </Routes>
      </div>
      <NavigationBar />
    </BrowserRouter>
  );
}

export default App
