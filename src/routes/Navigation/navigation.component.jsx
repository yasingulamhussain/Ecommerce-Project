import {Outlet, Link} from 'react-router-dom';
import { Fragment, useContext } from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import {NavigationContainer, NavLinks, NavLink, LogoContainer} from './navigation.styles.jsx';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../contexts/cart.context';

const Navigation=()=>{
  const {currentUser}=useContext(UserContext);
  const {isCartOpen}=useContext(CartContext);


    return(
      <Fragment>
        <NavigationContainer>
          <LogoContainer to='/'>
            <div className='logo'> <CrwnLogo/></div>
          </LogoContainer>
          <NavLinks>
            <NavLink to='/'>Home</NavLink>
            {
              currentUser?//is it a user?
              (
              <NavLink as='span' to='/auth' onClick={signOutUser}>Sign Out</NavLink>//if yes, show sign out
            ):

              (
              <span>
              <NavLink className='nav-link' to='/auth'>Sign In</NavLink>
              </span>
              )

            }
            <NavLink className='nav-link' to='/shop'>Shop</NavLink>

            <CartIcon/>
          </NavLinks>
          {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
      </Fragment>
    )
  };

  export default Navigation;