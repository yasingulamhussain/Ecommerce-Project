import {Outlet, Link} from 'react-router-dom';
import { Fragment, useContext } from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation=()=>{
  const {currentUser}=useContext(UserContext);



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

          </div>

        </div>
        <Outlet/>
      </Fragment>
    )
  };

  export default Navigation;