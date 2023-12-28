import React, { useState } from 'react';
import './Navbar.css';
import heart from '../images/heart.png';
import help from '../images/help.png';
import { NavLink, Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import user from '../images/user.png';
import sheearnslogo from '../images/sheearnslogo.png';

const Navbar = () => {
  const [keyword, setKeyword] = useState('');
  const { loginWithRedirect, isAuthenticated, logout} = useAuth0();

  const filter = () => {
    if (keyword.trim()) {
      window.location.href = `/shops/${keyword}`;
    } else {
      window.location.href = '/shops';
    }
  };

  return (
    <div>
      <div className='nav-flexbox'>
        <Link to='./'>
          <img src={sheearnslogo} alt='SheEarns Logo' className='sheearns-logo' />
        </Link>
        {/* <Link to='./'>
        <p className='nav-logo'>SheEarns</p>
        </Link> */}
        <div className='nav-mid'>
          <NavLink to='/'>
            <p className='nav-mid-cont'>Home</p>
          </NavLink>
          <NavLink to='/openstore'>
            <p className='nav-mid-cont'>Open Store</p>
          </NavLink>
          <NavLink to='/blogs'>
            <p className='nav-mid-cont'>Our Stories</p>
          </NavLink>
          <NavLink to='/contact'>
            <p className='nav-mid-cont'>Contact</p>
          </NavLink>
          <NavLink to='/about'>
            <p className='nav-mid-cont'>About</p>
          </NavLink>
        </div>
        <div className='nav-right'>
          <div className='input-group nav-search'>
            <div className='form-outline' data-mdb-input-init>
              <input
                type='search'
                id='form1'
                className='form-control nav-search-input'
                placeholder='Explore !'
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <button
              type='button'
              style={{ backgroundColor: '#c15feb', color: 'white' }}
              className='btn'
              data-mdb-ripple-init
              onClick={filter}
            >
              <i className='fas fa-search'></i>
            </button>
          </div>
          {isAuthenticated ? (
            <div>
              <Link to='/account' className='d-flex align-items-center gap-10 text-dark '>
                <img className=' nav-mid-cont' src={user} alt='Account' width={40} />
                
              </Link>
            </div>
          ) : (
            <div>
              <Link to='#' onClick={() => loginWithRedirect()}>
                <p className='nav-mid-cont'>SignIn</p>
              </Link>
            </div>
          )}
          {isAuthenticated &&<Link to='/wishlist'>
            <p className='nav-mid-cont'>
              <img src={heart} width={30} />
            </p>
          </Link>}
          
          <p className='nav-mid-cont'>
            <img src={help} width={30} />
          </p>
          {isAuthenticated&&<><button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} className='nav-mid-cont logout-btn' >LogOut</button></>}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
