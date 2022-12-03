import React from 'react';
import { NavLink } from 'react-router-dom';
import "./header.css"

const Header = () => {
    return (
        <div className="header">
            <nav >
                <NavLink  to="/"  className={({ isActive }) =>
              isActive ? 'active' : undefined
            }>Home</NavLink>
                <NavLink to="/users"  className={({ isActive }) =>
              isActive ? 'active' : undefined
            }>Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;