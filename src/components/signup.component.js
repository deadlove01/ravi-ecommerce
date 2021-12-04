import React, {useState} from "react";
import FormInput from "./form-input.component";

import '../css/signin.styles.scss'
import CustomButton from "./custom-buttons/custom-button";
import {createUserProfileDocument, auth} from "../firebase/firebase.utils";

const SignUp = () => {
    const formInitialState = {
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    const [formValue, setFormValue] = useState(formInitialState);


    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {email, password, displayName, confirmPassword} = formValue;

        if(password !== confirmPassword)
        {
            alert("Confirm password does not match")
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName});
            setFormValue(formInitialState);
        }catch (error)
        {
            console.log("error signing up user: ", error.message);
        }


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

    const {email, password, displayName, confirmPassword} = formValue;

    return (
        <div className={"sign-up"}>
            <h2>I do not already have an account</h2>
            <span>Sign up with your email and password</span>

            <form className={"sign-up-form"} onSubmit={handleSubmit}>
                <FormInput name={"displayName"} type={"text"} value={displayName} required onChange={handleInputChange} label={"Display Name"} />
                <FormInput name={"email"} type={"email"} value={email} required onChange={handleInputChange} label={"Email"} />
                <FormInput name={"password"} type={"password"} value={password} required onChange={handleInputChange} label={"Password"}  />
                <FormInput name={"confirmPassword"} type={"password"} value={confirmPassword} required onChange={handleInputChange} label={"Confirm Password"}  />

                <CustomButton type={"submit"}>SIGN UP</CustomButton>

            </form>
        </div>
    )
}


export default SignUp;