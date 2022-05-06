import React from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {
return(
    <header>
        <nav>
            <ul className="nav nav-tabs">
            <li className="nav-item">
                    <NavLink activeClassName="active" to='/' className='nav-link'>Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" to='/addPatient' className='nav-link'>Add Patient</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" to='/addVaccinations' className='nav-link'>Administrator Vaccination</NavLink>
                </li>
            </ul>
        </nav>
    </header>
)
}
export default Header;