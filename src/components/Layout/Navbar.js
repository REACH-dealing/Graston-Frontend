import React from 'react';
import { Link } from 'react-router-dom';
import './ComponentsStyle.css';

function Navbar() {
  return (
    <div className='navbarContainer'>
      <nav className='navbar'>
        {/* 1 */}
        <div>
            <Link to={'/'} className='text-decoration-none'><h3 className='logo fw-bolder'>جــــــــــراســــــــــــــتون</h3></Link>
        </div>
        {/* 2 */}
        <div>
          <ul className='list mt-3'>
            <li className='list__item'><Link className='list__item__link active' to="/">Home</Link></li>
            <li className='list__item'><Link className='list__item__link not-active' to="/">Shop</Link></li>
            <li className='list__item'><Link className='list__item__link not-active' to="/">About Us</Link></li>
            <li className='list__item'><Link className='list__item__link not-active' to="/">Contact Us</Link></li>
          </ul>
        </div>

        {/* 3 */}
        <div className=''>
        <Link to={'/LoginPage'} className='link'>
          <button className='me-4'>
            Login
          </button>
          </Link>
          <Link to={'/RegisterPage'} className='link'>
            <button className=''>
              Sign Up
            </button>
          </Link>
        </div>

        {/* 4 */}
        <div className='d-flex justify-content-center align-items-center'>
            <img src='/assets/translate.png' alt='translate'/>
            <select className='language ms-3'>
                <option>العربية</option>
                <option>English</option>
            </select>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
