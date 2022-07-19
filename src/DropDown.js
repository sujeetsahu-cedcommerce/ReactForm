import React, { Component } from "react";

export default class DropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
        selected_value:"",
        days:"",
    };
  }

  OnchangeHandler = (event) => {
      this.setState({
        selected_value:event.target.value,
      })
  }

  ShowDays = (event) => {
    this.setState({
        days:this.state.selected_value,
    })
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.ShowDays}>
          <label>
            Pick Any Number
            <select onChange={this.OnchangeHandler}>
              <option value="Sunday">1</option>
              <option value="Monday">2</option>
              <option value="Tuesday">3</option>
              <option value="Wednesday">4</option>
              <option value="Thursday">5</option>
              <option value="Friday">6</option>
              <option value="Saturday">7</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h4>{this.state.days}</h4>
      </div>
    );
  }
}
