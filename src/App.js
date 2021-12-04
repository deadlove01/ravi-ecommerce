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
import ShopPage from "./pages/shope.page";
import Header from "./components/header.component";
import SigninSignupPage from "./pages/signin-signup.page";

function App() {
    return (
     <div>
         <Header />
         <Routes>

             <Route exact path={"/"} element={<HomePage/>}/>
             <Route exace path={"/shop"} element={<ShopPage/>}/>
             <Route path={"/signin"} element={<SigninSignupPage />} />
             <Route path={"/shop/hats"} element={<HatsPage/>}/>
             <Route path={"/shop/jackets"} element={<JacketsPage/>}/>
             <Route path={"/shop/mens"} element={<MensPage/>}/>
             <Route path={"/shop/womens"} element={<WomensPage/>}/>
             <Route path={"/shop/sneakers"} element={<SneakersPage/>}/>

         </Routes>

     </div>

    );
}

export default App;
