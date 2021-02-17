import React, { Component } from "react";
import "../pages/myrecipes.css";
import { Link } from "react-router-dom";
import axios from '../environment/environment';
import RecipeCard from "../components/recipecard";
import Searchbar from "../components/searchbar";
import Spinner from 'react-bootstrap/Spinner';

class Allrecipes extends Component {
  state = {
    recipes: "",
    filtervalue: "",
    filteredRecipes: "",
    isLoading : true,
  };

  searchvalue = (event) => {
   
    let filtervalue = event.target.value;
   // console.log(filtervalue);
    this.setState({filteredRecipes: this.state.recipes, filtervalue: filtervalue });
    
    
  }


  output = () => {

    let search
    if(this.state.filtervalue.length !== 0)
    {
      search = this.state.filteredRecipes.filter( (item) => {
     // return item.title.toLowerCase().startsWith(this.state.filtervalue.toLowerCase())
      return (item.title.toLowerCase().indexOf(this.state.filtervalue.toLowerCase()))>-1
     
    })
     
    
    }
    else{
      search = this.state.filteredRecipes;

    }


    if (search == "") {
      const style ={  minHeight:'50%'}

      if(this.state.isLoading === true){
      return (<div style={{marginTop:'15%'}}><Spinner animation="border" variant="primary"  size="lg"  /> </div> )
    }else{
      return <div style={{marginTop:'15%'}}><h1>No Recipe Found </h1></div>
      }
    
   
      //<h1 style={style}>No Recipe Found</h1>;
    } else {
      return search.map((data, id) => (
        <Link to={{ pathname:`/recipe-details/${localStorage.getItem('userId')}/${data._id}` }} className="navlink">
          <RecipeCard
            key={id.toString()}
            image={data.imageurl}
            title={data.title}
            ingredients={data.ingredients}
            description={data.description}
          />
        </Link>
      ));
    }
  };

  async componentDidMount() {
    
    
    await axios
      .get("allrecipe")
    //.get("users/allrecipe/")
    .then((Response) => this.setState({ recipes: Response.data, filteredRecipes: Response.data, isLoading:false }))
      .catch((err) => console.log(err));
   }

  render() {
    return (
      <div className="myrecipes-main" id="allrecipes" style={{ minHeight:'100vh'}}>
        <h1 className="heading">Recipes only for you</h1>
          <Searchbar searchvalue={this.searchvalue}></Searchbar>{" "}
        <div className="card-display">{this.output()}</div>
      </div>
    );
  }
}

export default Allrecipes;
