import React, { Component } from 'react'

export default class Textbox extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
          text_values:"",
          submitted_text_value:"",
      }
    }

    GetTextValue = (e) => {
        this.setState({
            text_values:e.target.value,
        })
    }

    SubmitForm = (event) => {
        this.setState({
            submitted_text_value:this.state.text_values,
        })
        event.preventDefault();
    }
  render() {
    return (
        <>
      <form onSubmit={this.SubmitForm}>
          <input type="number" value={this.state.text_values} onChange={this.GetTextValue}></input>
          <input type="submit" value="Submit" />
      </form>
      <p>{this.state.submitted_text_value}</p>
      </>
    )
  }
}
