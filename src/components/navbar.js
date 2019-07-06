import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    // <nav>
    //   <Link to='/'>Introduction</Link>
    //   <br />
    //   <Link to='/about'>About</Link>
    // </nav>

    <nav className='navbar navbar-expand-sm navbar-light bg-light'>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarContent'
        aria-controls='navbarContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon' />
      </button>

      <div className='collapse navbar-collapse' id='navbarContent'>
        <ul className='navbar-nav'>
          <li className='nav-item mx-3'>
            <Link to='/'>Introduction</Link>
          </li>
          <li className='nav-item mx-3'>
            <Link to='/about'>About</Link>
          </li>
          {/* <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/electronics"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Electronics
              </Link>
              <div
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link className="dropdown-item" to="/electronics/mobile">
                  Mobile Phone
                </Link>
                <Link className="dropdown-item" to="/electronics/desktop">
                  Desktop PC
                </Link>
                <Link className="dropdown-item" to="/electronics/laptop">
                  Laptop
                </Link>
              </div>
            </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
