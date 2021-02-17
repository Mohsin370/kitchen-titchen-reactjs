import React from 'react'
import './searchbar.css'
const Searchbar = (props)=>{
    return (
        <div className="search-main">
        <input className="search" placeholder="Search Recipes" onChange={props.searchvalue}></input>
        </div>
    );
}


export default Searchbar;