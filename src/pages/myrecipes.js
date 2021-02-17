import React, { Component } from "react";
import "../pages/myrecipes.css";
import { NavLink, Link } from "react-router-dom";
import axios from '../environment/environment'
import RecipeCard from "../components/recipecard";
import Spinner from 'react-bootstrap/Spinner';

class MyRecipes extends Component {
  state = {
    recipes: [],
    isLoading:true

  };



  displayCard = () => {
    if (this.state.recipes == "") {


      if (this.state.isLoading === true) {
        return (<div style={{ marginTop: '15%' }}><Spinner animation="border" variant="primary" size="lg" /> </div>)
      } else {
        return <div style={{ marginTop: '15%' }}><h1>You have not added any recipes yet </h1></div>
      }
    }
    else {
      return this.state.recipes.map((data, id) => (

        <Link to={{ pathname: `/recipe-details/${localStorage.getItem('userId')}/${data._id}` }} className="navlink">
          <RecipeCard
            key={data.id}
            image={data.imageurl}
            title={data.title}
            ingredients={data.ingredients}
            description={data.description}
          />

        </Link>


      ));
    }
  };



  componentDidMount() {




    const userId = {
      userId: localStorage.getItem('userId')
    }
    axios
      .post("myrecipe/:id", userId)
      //.post("users/myrecipe/", userId) 
      .then(Response => this.setState({ recipes: Response.data, isLoading:false }))
      .catch(err => console.log(err));


  }

  ScreenRenderer = () => {

    //console.log(localStorage.getItem('isLoggedIn'));
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      return (
        <div className="myrecipes-main">
          <div className="recipe-btn-main">
            <NavLink to="/addrecipe/false/mk" className="navlink">
              <button className="add-recipe">Add New Recipe</button>
            </NavLink>
          </div>
          <h1 className="heading">Recipes Added by You</h1>
          <div className="card-display">{this.displayCard()}</div>
        </div>);

    } else {
      return <h1>Please Sign in to use this feature</h1>
    }



  }



  render() {

    console.log(this.props);
    return (
      <div >
        {
          this.ScreenRenderer()
        }
      </div>

    );
  }
}

export default MyRecipes;
