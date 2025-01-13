import {Outlet, Link} from 'react-router-dom';
import { Fragment } from 'react';
import {ReactComponent as CrwnLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';


const Navigation=()=>{
    return(
      <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'>
            <div className='logo'> <CrwnLogo/></div>
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/'>Home</Link>
            <Link className='nav-link' to='/sign-in'>Sign In</Link>

          </div>

        </div>
        <Outlet/>
      </Fragment>
    )
  };

  export default Navigation;