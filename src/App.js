import React, { useState } from 'react';
import LandingPage from './pages/landingPage';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './components/navbar';
import MyRecipes from './pages/myrecipes';
import AddRecipe from './pages/addrecipe';
import Allrecipes from './pages/allrecipes';
import RecipeDetails from './pages/recipedetails';
import Auth from './pages/auth';
import About from './pages/about';
//

function App() {

  const isLoggedIn = localStorage.getItem('isLoggedIn');
 

  return (
    


      <Router>
        <Navbar />
        <Switch>
          
          <Route path="/" exact><LandingPage /> <Allrecipes /></Route>
          <Route path="/allrecipes"><Redirect path="/" /> </Route>
          <Route path="/recipe-details/:id/:uid" exact component={RecipeDetails}></Route>
          <Route path="/myrecipes/:id" exact><MyRecipes /></Route>
          <Route path="/addrecipe/:editable/:uid" exact component={AddRecipe} ></Route>
          <Route path="/about" exact component={About}></Route>
          
          <Route path="/auth">   { isLoggedIn == 'true'?<Redirect path="/" />:<Auth/>  }</Route>
          <Redirect path="/" />
        </Switch>

      </Router>
  
  );
}

export default App;
