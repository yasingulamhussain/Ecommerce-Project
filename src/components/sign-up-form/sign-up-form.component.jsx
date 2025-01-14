import { useState } from "react";
import {auth, createAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import {createUserDocumentFromAuth} from "../../utils/firebase/firebase.utils";
import FormInput from '../form-input/form-input.component.jsx';// Define the default state for the form fields
import './sign-up-form.styles.scss';
import Button from "../button/button.component.jsx";
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

const SignUpForm = () => {
    // State to manage the form fields
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    // Log the form fields state whenever it changes (for debugging purposes)
    console.log(formFields);
    const resetFormFields= () => {
        setFormFields(defaultFormFields);
    };



    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const {user}= await createAuthUserWithEmailAndPassword( email,password);
            await createUserDocumentFromAuth(user,{displayName}); resetFormFields();
        }catch(error){
            if (error.code === 'auth/email-already-in-use') {
                (alert('Email already in use'));
            }
                console.log('error creating the user', error.message);
            }
    };

    // Handler to update the form field values based on user input
    const handleChange = (event) => {
        const { name, value } = event.target; // Destructure name and value from the event
        // Update the specific form field dynamically using the field's name
        setFormFields({ ...formFields, [name]: value });
    };

    return (
        <div className="sign-up-container">
            <h2> Don't have an account?</h2>
            <span>
                Sign Up with your email and password
            </span>

            {/* Form to capture user inputs */}
            <form onSubmit={handleSubmit}>

                {/* Input for Display Name */}
                <FormInput
                    label="Display Name"
                    type="text"
                    required
                    onChange={handleChange} // Update state when input changes
                    name="displayName" // Name matches the state key
                    value={displayName} // Controlled input with state value
                />
                {/* Input for Email */}
                <FormInput
                    label="Email"
                    type="email"
                    required
                    onChange={handleChange}
                    name="email"
                    value={email}
                />
                {/* Input for Password */}
                <FormInput
                    label="Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                {/* Input for Confirm Password */}
         
                <FormInput
                    label="Confirm Password"
                    type="password"
                    required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />

                {/* Submit button */}
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    );
};

export default SignUpForm;
