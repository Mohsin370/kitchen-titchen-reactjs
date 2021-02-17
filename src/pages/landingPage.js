import React from 'react';
import './landingpage.css'
import { Link } from 'react-scroll';
const landingPage =()=>{

return(
        <div className = "landing-page-main">
            <div className = "landing-heading">
                <h1>Are you looking for a recipe?</h1>
                <h2>We got it covered</h2>
                <Link className = "link-class"  smooth={true} offset ={0} to ={'allrecipes'}>
                <button className = "landing-btn">Explore </button>
                </Link>
            </div>
        </div>
);

}

export default landingPage;