import './NavBar.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function NavBar() {
  return (
    <div>
      <nav>
        <ul id='nav-ul'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}