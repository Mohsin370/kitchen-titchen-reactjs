import React, { useState } from 'react';
import './navlink.css';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
const Navlinks = (props) => {

    const [state, setstate] = useState(null)
    const loggedInFailure = () => {
        setstate(false)
        localStorage.setItem('isLoggedIn', false);
        localStorage.setItem('userId'," ");
        window.location.reload(false);

    }
    const withlogin = () => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            return (<ul className="ulist">
                <li><Link className="link-class" smooth={true} offset={0} to={'allrecipes'}>
                    <NavLink to="/allrecipes" className="navlink">Recipes</NavLink>
                </Link></li>
                <li><NavLink to={`/myrecipes/${localStorage.getItem('userId')}`} className="navlink">My Recipes</NavLink></li>
                <li><NavLink to="/about" className="navlink">About</NavLink></li>
                <li className="logout" onClick={loggedInFailure} >Logout</li>
            </ul>

            );
        } else {
            return (<ul className="ulist">
                <li><Link className="link-class" smooth={true} offset={0} to={'allrecipes'}>
                    <NavLink to="/allrecipes" className="navlink">Recipes</NavLink>
                </Link></li>
                <li><NavLink to={`/myrecipes/${localStorage.getItem('userId')}`} className="navlink">My Recipes</NavLink></li>
                <li><NavLink to="/about" className="navlink">About</NavLink></li>
                <li><NavLink to="/auth" className="navlink">Authentication</NavLink></li>
            </ul>
            );
        }
    }
    return (

        <div className="navlinks-main">


            {withlogin()}

        </div>

    );

}

export default Navlinks;