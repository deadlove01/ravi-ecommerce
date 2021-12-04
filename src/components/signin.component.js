import React, {useState} from "react";
import FormInput from "./form-input.component";

import '../css/signin.styles.scss'
import CustomButton from "./custom-buttons/custom-button";
import {signInWithGoogle} from "../firebase/firebase.utils";

const SignIn = () => {
    const formInitialState = {
        email: '',
        password: ''
    }
    const [formValue, setFormValue] = useState(formInitialState);


    const handleSubmit = (e) =>{
        e.preventDefault();

        setFormValue(formInitialState);
    }

    const handleInputChange = (e) =>{
        const {name, value} = e.target;

        setFormValue((prevState) =>{
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const {email, password} = formValue;

    return (
        <div className={"sign-in"}>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput name={"email"} type={"email"} value={email} required onChange={handleInputChange} label={"Email"} />
                <FormInput name={"password"} type={"password"} value={password} required onChange={handleInputChange} label={"Password"}  />

                <div className={"buttons"}>
                    <CustomButton type={"submit"}>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                </div>

            </form>
        </div>
    )
}


export default SignIn;