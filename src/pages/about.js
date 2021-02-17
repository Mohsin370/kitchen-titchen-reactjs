import React, { Component } from 'react';
import './about.css'
import {Container,Row,Col} from 'react-bootstrap'

const About = () =>{

return(
    <div className="about-main">
        
            <div className="Main-about-image">
                <h1 className="about-header">Its all about cooking Amazing stuff</h1>
            </div>
            <h1>What you can do here</h1>
            <div className="points">
            <p>You can contribute with your recipes</p>
            <p>You can enjoy recipes added by other members</p>
            <p>You will be able to add</p>
            <p>You can update or delete your recipe</p>
            <p>You will always find something new here, Happy cooking!</p>
            </div>
            <p className="footer">You can contact me at mohsinijaz13@gmail.com</p>
    </div>
)

}

export default About;