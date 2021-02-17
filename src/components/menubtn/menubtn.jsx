import React, { Component,useState } from 'react'
import './menubtn.css';
import Menulinks from './menulinks';

const Menubtn = ()=>{

    const [state, setstate] = useState(false)
    const togglemenu =()=>{
        setstate(!state)
    }


    return(
    <div className= "menubtn">
        <div className="menu-btn" onClick={togglemenu}>
            <div className="menu-listbtn"></div>
            <div className="menu-listbtn"></div>
            <div className="menu-listbtn"></div>
        </div>

       {state? <div className="links">
            <Menulinks></Menulinks>
        </div>:''}
    </div>
    )

}

export default Menubtn;