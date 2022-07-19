import React, { Component } from "react";

export default class Checkboxes extends Component {
  constructor(props) {
    super(props);
    this.state = {
        checked_arr:[],
        permanent_Checked_arr:[],
    };
  }

  OnChangeHandler = (event) => {
    // alert(event.target.id);
    // alert(event.target.checked);
   
    if(event.target.checked){
        this.setState({
            checked_arr:[...this.state.checked_arr,event.target.value],
        })
    }
    else{
        var itemToBeRemoved = event.target.value;
        var filteredArray = this.state.checked_arr.filter(item => !itemToBeRemoved.includes(item))
        this.setState({
            checked_arr:filteredArray,
        })
    }
  }

  Show_Checkboxes = (event) => {
    event.preventDefault();
    this.setState({
        permanent_Checked_arr:this.state.checked_arr,
        // permanent_Checked_arr:[...this.state.permanent_Checked_arr,[...this.state.checked_arr,event.target.value]],
    })

     
  }
  render() {
    return (
      <div>
        <form onSubmit={this.Show_Checkboxes}>
          <label>Cricket</label>
          <input type="checkbox" value="Cricket" onChange={this.OnChangeHandler} id="Cricket"></input> 
          <br />
          <label>Boxing</label>
          <input type="checkbox" value="Boxing" onChange={this.OnChangeHandler} id="Boxing"></input>
          <br />
          <label>Singing</label>
          <input type="checkbox" value="Singing" onChange={this.OnChangeHandler} id="Singing"></input>
          <br />
          <input type="submit"></input>
        </form>
        <div>
        {
            this.state.permanent_Checked_arr.map((hobbies) => 
                <h4>{hobbies}</h4>
            )
        }
        </div>
       
      </div>
    );
  }
}
