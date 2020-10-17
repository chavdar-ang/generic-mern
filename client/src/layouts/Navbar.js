import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/" className="nav-link">
                        <span>Home</span>
                    </Link>
                </li>

                <li>
                    <Link to="/components" className="nav-link">
                        <span>Components</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
