import './App.css';
import HomePage from "./components/homepage.component";
import {Navigate, Route, Routes} from "react-router-dom";
import HatsPage from "./pages/hats.page";
import JacketsPage from "./pages/jackets.page";
import MensPage from "./pages/mens.page";
import WomensPage from "./pages/womens.page";
import SneakersPage from "./pages/sneakers.page";
import ShopPage from "./pages/shope.page";
import Header from "./components/header.component";
import SigninSignupPage from "./pages/signin-signup.page";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils"
import {useEffect, useState} from "react";

import {connect} from "react-redux";
import setCurrentUser from "./redux/user/user.action";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selector";
import CheckoutPage from "./pages/checkout.page";


const  App = (props) => {

    const {updateCurrentUser} = props;

    const onAuthChanged = async user => {
        // console.log(user)
        if(user)
        {
            const userRef = await createUserProfileDocument(user)
            userRef.onSnapshot(snapshot => {
                updateCurrentUser({
                    id: snapshot.id,
                    ...snapshot.data()
                })
                console.log("snap: ",snapshot.data())

            })


        }
        updateCurrentUser(user);
    }

    useEffect(() => {
        console.log("use effect")
        return auth.onAuthStateChanged(onAuthChanged);
    }, []);


    return (
     <div>
         <Header />
         <Routes>

             <Route exact path={"/"} element={<HomePage/>}/>
             <Route exact path={"/shop"} element={<ShopPage/>}/>
             <Route path={"/signin"} element={props.currentUser ? (<Navigate to={"/"} />) : <SigninSignupPage /> } />
             <Route path={"/shop/hats"} element={<HatsPage/>}/>
             <Route path={"/shop/jackets"} element={<JacketsPage/>}/>
             <Route path={"/shop/mens"} element={<MensPage/>}/>
             <Route path={"/shop/womens"} element={<WomensPage/>}/>
             <Route path={"/shop/sneakers"} element={<SneakersPage/>}/>
             <Route exact path={"/shop/checkout"} element={<CheckoutPage />} />

         </Routes>

     </div>

    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
    updateCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps) (App);
