import {Outlet, Link} from 'react-router-dom';
import { Fragment, useContext } from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

const Navigation=()=>{
  const {currentUser, setCurrentUser}=useContext(UserContext);
  const signOutHandler=async()=>{
    await signOutUser();
    setCurrentUser(null);
  };


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
              <span className='nav-link' to='/auth' onClick={signOutHandler}>Sign Out</span>//if yes, show sign out
            ):

              (
              <span className='nav-link' to='/auth'>Sign In</span>//if no, show sign in
              )

            }

          </div>

        </div>
        <Outlet/>
      </Fragment>
    )
  };

  export default Navigation;