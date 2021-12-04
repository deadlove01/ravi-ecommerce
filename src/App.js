import './App.css';
import HomePage from "./components/homepage.component";
import {Route, Routes} from "react-router-dom";
import HatsPage from "./pages/hats.page";
import JacketsPage from "./pages/jackets.page";
import MensPage from "./pages/mens.page";
import WomensPage from "./pages/womens.page";
import SneakersPage from "./pages/sneakers.page";
import ShopPage from "./pages/shope.page";
import Header from "./components/header.component";
import SigninSignupPage from "./pages/signin-signup.page";
import {auth} from "./firebase/firebase.utils"
import {useEffect, useState} from "react";


const  App = () => {

    const [currentUser, setCurrentUser] = useState(null);

    const onAuthChanged = user => {
        setCurrentUser(user);
        console.log(user)
    }

    useEffect(() => {
        console.log("use effect")
        return auth.onAuthStateChanged(onAuthChanged);
    }, []);


    return (
     <div>
         <Header currentUser={currentUser} />
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
