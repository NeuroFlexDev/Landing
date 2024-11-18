import "./App.css";
import { Header } from "./Header/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AboutPage } from "./About/AboutPage";
import { MainPage } from "./MainPage/MainPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
