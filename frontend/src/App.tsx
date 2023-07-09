import { Route, Routes } from "react-router-dom";
import "./App.css";
import ChoicePage from "./pages/ChoicePage";
import NavigationBar from "./components/NavigationBar";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/choice" element={<ChoicePage />} />
        <Route path="/mainpage" element={<MainPage />} />
      </Routes>
    </div>
  );
}

export default App;
