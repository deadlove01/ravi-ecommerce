import './App.css';
import HomePage from "./components/homepage.component";
import {
    Routes,
    Route
} from "react-router-dom";
import HatsPage from "./pages/hats.page";
import JacketsPage from "./pages/jackets.page";
import MensPage from "./pages/mens.page";
import WomensPage from "./pages/womens.page";
import SneakersPage from "./pages/sneakers.page";

function App() {
  return (
      <Routes>
          <Route exact path={"/"} element={<HomePage />} />
          <Route path={"/shop/hats"} element={<HatsPage />} />
          <Route path={"/shop/jackets"} element={<JacketsPage />} />
          <Route path={"/shop/mens"} element={<MensPage />} />
          <Route path={"/shop/womens"} element={<WomensPage />} />
          <Route path={"/shop/sneakers"} element={<SneakersPage />} />
      </Routes>
  );
}

export default App;
