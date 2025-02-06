import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword, 
} from '../../utils/firebase/firebase.utils';
import{SignUpContainer, SignUpTitle, ButtonsContainer} from './sign-in-form.styles.jsx';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      console.log('User signed in with Google ' + email);
    } catch (error) {
      console.log(error);
      switch (error.code) {
        case 'auth/account-exists-with-different-credential':
          alert('An account already exists with the same email address but different sign-in credentials');
          break;
        case 'auth/user-disabled':
          alert('The user account has been disabled by an administrator');
          break;
        default:
          console.log(error.code);
      }
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password);
      // console.log('User signed in '+email);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-credential':
          alert('Incorrect password for email');
          break;
        default:
          console.log(error.code);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <SignUpTitle>Already have an account?</SignUpTitle>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <ButtonsContainer >
          <Button type='submit'>Sign In</Button>
          <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
};

export default SignInForm;