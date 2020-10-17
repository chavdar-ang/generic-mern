import React from 'react';
import { Link } from 'react-router-dom';
import entities from "../entities.json";


function Sidebar() {
    console.log(entities);
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/" className="nav-link">
                        <span>Home</span>
                    </Link>
                </li>

                <li>
                    <Link to="/page/components" className="nav-link">
                        <span>Components</span>
                    </Link>
                </li>
                <li>
                    <h4>Entities</h4>
                </li>
                {
                    Object.keys(entities).forEach(key => {
                        console.log(key);
                        return (<div>{key}</div>);
                    })
                }

            {/* // return (<li><Link to={key} key={key}>{key}</Link></li>) */}
            </ul>
        </div>
    );
}

export default Sidebar;
