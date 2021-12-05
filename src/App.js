import './App.css';
import HomePage from "./components/homepage.component";
import {Navigate, Route, Routes} from "react-router-dom";
import ShopPage from "./pages/shope.page";
import Header from "./components/header.component";
import SigninSignupPage from "./pages/signin-signup.page";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils"
import React, {useEffect} from "react";

import {connect} from "react-redux";
import setCurrentUser from "./redux/user/user.action";
import {createStructuredSelector} from "reselect";
import {selectCurrentUser} from "./redux/user/user.selector";
import CheckoutPage from "./pages/checkout.page";
import CollectionPage from "./pages/collection.page";
import CollectionOverview from "./components/shop/collection-overview.component";


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
             <Route path={"/shop"} element={<ShopPage/>} >
                 <Route path={""} element={<CollectionOverview />} />
                 <Route path={`:collectionId`} element={<CollectionPage />} />
             </Route>
             <Route path={"/signin"} element={props.currentUser ? (<Navigate to={"/"} />) : <SigninSignupPage /> } />
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
