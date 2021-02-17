import React, { useEffect, useState } from "react";
import "./recipecard.css";

import AltPic from '../alt.jpg'



const RecipeCard = props => {
  const saveStorage = () => {

    { localStorage.setItem('title', props.title) }
    { localStorage.setItem('ingredients', props.ingredients) }
    { localStorage.setItem('description', props.description) }
      localStorage.setItem('imageurl', props.image);
    console.log(props.uid);

  }
  const [image, setState] = useState("")


  useEffect(() => {


    let allowedExtensions = /(\.jpg|\.png|\.gif|\.jpeg)/i;
    if (!allowedExtensions.exec(props.image)) {
      setState(AltPic);

    }
    else {
      setState(props.image);

    }
  })



  return (
    <div className="recipe-top" onClick={saveStorage}>
      <div className="recipe-card">
        <img src={image} />
        <div className="recipe-title">
          <h3> {props.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
