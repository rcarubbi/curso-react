import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            {" | "}
            <NavLink exact to="/courses" activeClassName="active">Courses</NavLink>
            {" | "}
            <NavLink exact to="/about" activeClassName="active">About</NavLink>
            
        </nav>
    );
}

export default Header;