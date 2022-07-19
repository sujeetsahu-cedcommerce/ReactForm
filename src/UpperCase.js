import React, { Component } from 'react'

export default class UpperCase extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         text_values:"",
         upper_values:'',
      }
    }

    handleChange = (event) => {
        this.setState({
            text_values:event.target.value,
        }) 
    }

    ConverUpper = (event) => {
        this.setState({
            upper_values:this.state.text_values.toUpperCase(),
        })
        event.preventDefault();
    }

  render() {
    return (
        <div>
      <form onSubmit={this.ConverUpper}>
         <textarea value={this.state.text_values} onChange={this.handleChange} />
         <input type="submit" ></input>

      </form>
      <h4>{this.state.upper_values}</h4><br/>
      </div>
    )
  }
}
