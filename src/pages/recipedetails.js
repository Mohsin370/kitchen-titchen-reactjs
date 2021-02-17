import React, { useState, useEffect } from "react";
import "./recipedetails.css";
import AltPic from "../alt.jpg";
import axios from "../environment/environment";
import { Redirect, NavLink } from "react-router-dom";

const RecipeDetails = (props) => {
  const [Title, setTitle] = useState("");
  const [Ingredients, setIngredients] = useState("");
  const [Description, setDescription] = useState("");
  const [imageurl, setimageurl] = useState("");
  const [deleteable, setdeletable] = useState(false);


  useEffect(() => {
    //const { title, ingredients, description } = props.location.details;

    setTitle(localStorage.getItem("title"));
    setIngredients(localStorage.getItem("ingredients"));
    setDescription(localStorage.getItem("description"));


    let allowedExtensions = /(\.jpg|\.png|\.gif|\.jpeg)/i;
    if (!allowedExtensions.exec(localStorage.getItem("imageurl"))) {
      setimageurl(AltPic);

    }
    else {
      setimageurl(localStorage.getItem("imageurl"));
    }

    isDeleteable();// the recipe which is deletable is also editable
  });


  const isDeleteable = () => {

    axios.get(`/recipe-details/deletable/${props.match.params.id}/${props.match.params.uid}`)
      .then(res => {
        console.log(res.data)
        if (res.data!= '') {
          setdeletable(true)
        }
        else {
          setdeletable(false)
        }
      })

  }

  const deleteRecipe = () => {

    axios.delete(`/recipe-details/${props.match.params.id}/${props.match.params.uid}`)
      .then(response => {
        if (response.data.deletedCount > 0) {
          console.log(true);
          props.history.push("/");
        } else {
          console.log(false);
        }
      });

  }

  return (
    <div className="details-page">
      <h1 className="details-header">{Title}</h1>
      <div className="description">
        <img src={imageurl} className="image-detail" />
        <div className="recipe-details">
          <h1> Ingredients:</h1> <textarea value={Ingredients} readOnly>{Ingredients}</textarea>
          <h1>Description:</h1> <textarea value={Description}>{Description}</textarea>
        </div>
        <div className="delete">
          {deleteable ?<NavLink to ={`/addrecipe/true/${props.match.params.uid}`}> <button className="editbtn" >Edit</button></NavLink> : ''}
          {deleteable ? <button className="delbtn" onClick={() => deleteRecipe()}>Delete</button> : ''}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
