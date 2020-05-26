import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">
      Note Me
        </div>
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link"
          to="/" exact>Main
      </NavLink>
      </li>
      <li>
        <NavLink className="nav-link"
          to="/about">Information
        </NavLink>
      </li>
    </ul>
  </nav>
)

