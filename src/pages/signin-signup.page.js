import React from "react";

import "../css/signin-signup.styles.scss";
import SignIn from "../components/signin.component";
import SignUp from "../components/signup.component";

const SigninSignupPage = () => (
    <div className={"signin-signup"}>
        <SignIn />
        <SignUp />
    </div>
)


export default SigninSignupPage;