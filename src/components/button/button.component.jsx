import {BaseButton, GoogleSignInButton, invertedButton} from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  google: 'google-sign-in',
  inverted: 'inverted',
};

const getButton= (buttonType=BUTTON_TYPE_CLASSES.base)=>({
  [BUTTON_TYPE_CLASSES.base]:BaseButton,
  [BUTTON_TYPE_CLASSES.google]:GoogleSignInButton,
  [BUTTON_TYPE_CLASSES.inverted]:invertedButton,
}[buttonType])//


const Button = ({ children, buttonType, ...otherProps }) => {
  const CuttomButton = getButton (buttonType);
  return (
    <CuttomButton {...otherProps}>
      {children}
    </CuttomButton>
  );
};

export default Button;