import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import './HeaderSlim.css';

const HeaderSlim = () => {
  return (
    <div className='header-p'>
      <div className='navbar-lib'>
        <div className='navbar-top-p'></div>
        <div className='navbar-content-p'>
          <p>koribrus.io</p>

          <Menu>
            <ul type='1' className='apps-dropdown'>
              <Link to='/1'>
                <li className='apps-dropdown-item'>
                  <span className='dropdown-count'>1</span>
                  expanding cards
                </li>
              </Link>
              <Link to='/2'>
                <li className='apps-dropdown-item'>
                  <span className='dropdown-count'>2</span>
                  progress steps
                </li>
              </Link>
              <li className='apps-dropdown-item'>
                <span className='dropdown-count'>3</span>
                <a href='/' className='coming-soon'>
                  <span>rotating nav</span>
                  <span>(coming soon)</span>
                </a>
              </li>
              <li className='apps-dropdown-item'>
                <span className='dropdown-count'>4</span>
                <a href='/' className='coming-soon'>
                  <span>hidden search</span>
                  <span>(coming soon)</span>
                </a>
              </li>
              <li className='apps-dropdown-item'>
                <span className='dropdown-count'>5</span>
                <a href='/' className='coming-soon'>
                  <span>blurry loading</span>
                  <span>(coming soon)</span>
                </a>
              </li>
            </ul>
          </Menu>
        </div>
      </div>
      <div className='banner-p'>
        <div className='overlay-p'>
          <div className='banner-content'>
            <Link to='/'>
              <h1 className='banner-title'>50 react apps</h1>
            </Link>
            <p className='banner-text'></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSlim;
