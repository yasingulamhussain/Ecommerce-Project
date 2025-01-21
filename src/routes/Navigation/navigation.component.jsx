import {Outlet, Link} from 'react-router-dom';
import { Fragment, useContext } from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';
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
        <div className='navigation'>
          <Link className='logo-container' to='/'>
            <div className='logo'> <CrwnLogo/></div>
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/'>Home</Link>
            {
              currentUser?//is it a user?
              (
              <span className='nav-link' to='/auth' onClick={signOutUser}>Sign Out</span>//if yes, show sign out
            ):

              (
              <span>
              <Link className='nav-link' to='/auth'>Sign In</Link>
              </span>
              )

            }
            <Link className='nav-link' to='/shop'>Shop</Link>

            <CartIcon/>
          </div>
          {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
      </Fragment>
    )
  };

  export default Navigation;