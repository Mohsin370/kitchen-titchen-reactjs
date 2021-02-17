import React from 'react'
import './searchbar.css'
import Search from '../search.png'


const Searchbar = (props)=>{


    return (

        <div className="search-main">
         <img className="search-img" src={Search}></img>
        <input className="search" placeholder="Search Recipes" onChange={props.searchvalue}></input>
        </div>
    );


}


export default Searchbar;