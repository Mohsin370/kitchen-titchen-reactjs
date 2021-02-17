import React, { Component } from "react";
import "../pages/addrecipe.css";
import axios from '../environment/environment'
import Upload from '../components/upload';
class AddRecipe extends Component {
  state = {
    Title: "",
    imageurl: '',
    Ingredients: "",
    Description: "",
    isSubmitted: null,
    editable: false,
  };

  getTitle = event => {
    this.setState({
      Title: event.target.value,
      isSubmitted: null

    });
  };

  getImage = event => {
    this.setState({
      imageurl: event.target.value,
      isSubmitted: null
    })

  }

  getIngredients = event => {
    this.setState({
      Ingredients: event.target.value,
      isSubmitted: null

    });
  };

  getDescription = event => {
    this.setState({
      Description: event.target.value,
      isSubmitted: null

    });
  };


  submitData = (e) => {
    const userID = localStorage.getItem('userId');

    e.preventDefault();
    this.setState({ isSubmitted: false });
    const newRecipe = {
      title: this.state.Title,
      imageurl: this.state.imageurl,
      ingredients: this.state.Ingredients,
      description: this.state.Description,
      userId: userID
    }

    axios.post('addrecipe', newRecipe)
    // axios.post('users/addrecipe',newRecipe)

    if (newRecipe.title != "" && this.state.Ingredients != "" && this.state.Description != "") {
      this.setState({ isSubmitted: true });
    }


  };

  editData= (e)=>{
    e.preventDefault();
    this.setState({ isSubmitted: false });

    const editedRecipe = {
      title: this.state.Title,
      imageurl: this.state.imageurl,
      ingredients: this.state.Ingredients,
      description: this.state.Description,
   
    }

    
    if (editedRecipe.title != "" && this.state.Ingredients != "" && this.state.Description != "") {
      this.setState({ isSubmitted: true });
    axios.put(`/editrecipe/recipeid=${this.props.match.params.uid}`,editedRecipe)

    }



  }


  message = () => {

    if (this.state.isSubmitted === true) {
      return <div className="display-positive-result"><h1>Successfuly Added</h1> </div>
    }
    else if (this.state.isSubmitted === false) {
      return <div className="display-negative-result"><h1>All Fields Are Required</h1> </div>
    }
    else if (this.state.isSubmitted === null) {
      return
    }
  }

  componentDidMount() {

    if (this.props.match.params.editable == 'true') {
      this.setState({ editable: true })
      console.log("Set true");
    } else {
      this.setState({ editable: false })
      console.log("Set false");
    }

    //   axios.get(`/recipe-details/${this.props.match.params.uid}`)
    //   .then((res)=>{
    //     console.log(res);

    //     this.setState({
    //       Title: res.data.title,
    //       imageurl: res.data.imageurl,
    //       Ingredients: res.data.ingredients,
    //       Description: res.data.description,  
    //   })

    // })
    //   .catch(error=>console.error(error));




  }
  componentWillMount() {
    axios.get(`/recipe-details/${this.props.match.params.uid}`)
      .then((res) => {

        this.setState({
          Title: res.data[0].title,
          imageurl: res.data[0].imageurl,
          Ingredients: res.data[0].ingredients,
          Description: res.data[0].description,
        })

      })
      .catch(error => console.error(error));

  }


  render() {


    return (
      <div className="addrecipe">

        {this.state.editable ? <h1>Edit Recipe</h1> : <h1>Add your Recipe Details</h1>}
        <div className="recipe-form">
          <form>
            <div className="title">
              <label>Title</label> <input type="text" placeholder="Enter Recipe Title" name="title" value={this.state.Title} onChange={this.getTitle} required></input>
            </div>
            <div className="img">
              <label>Image Url</label> <input type="text" placeholder="Enter Recipe Image Url" name="ImageUrl" value={this.state.imageurl} onChange={this.getImage} required></input>
            </div>
            <div className="ingredients">
              <label>Ingredients</label>{" "}
              <textarea type="text" name="ingredients" placeholder="Enter Ingredients" value={this.state.Ingredients} onChange={this.getIngredients} required></textarea>{""}
            </div>
            <div className="ingredients ">
              <label>Description</label>{""}
              <textarea type="text" name="description" placeholder="Description" value={this.state.Description} onChange={this.getDescription} required></textarea>{" "}
            </div>

            {this.message()}
            {this.state.editable ? <button type="submit" onClick={this.editData} className="addrecipe-button">Update</button>
              : <button type="submit" onClick={this.submitData} className="addrecipe-button"> Submit My Recipe</button>
            }

          </form>



        </div>
      </div>
    );
  }
}

export default AddRecipe;
