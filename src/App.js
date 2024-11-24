import "./App.css";
import { Header } from "./Header/Header";
import { AboutPage } from "./About/AboutPage";
import { MainPage } from "./MainPage/MainPage";
import { ServicePage } from "./SevicePage/ServicePage";

function App() {
  return (
    <div className="main-container">
      <Header />
      <MainPage />
      <AboutPage />
      <ServicePage />
    </div>
  );
}

export default App;
