import React, { Component } from 'react'

export default class DarkMode extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         theme_value:"light",
         fname:"",
         lname:"",
      }
    }
    OnChangeHandler = () => {

    }
    Submit_form = (event) => {
        event.preventDefault();
          let value = this.state.theme_value === "light" ? "dark" : "light";
          this.setState({
              theme_value:value,
          })
      
    }
  render() {
      if(this.state.theme_value==="light"){
        return (
            <div style={{backgroundColor:"white",border:"1px solid black",color:"black"}}>
                <form onSubmit={this.Submit_form}>
                    <input type="text" placeholder="enter name" style={{color:"black"}}></input><br/>
                    <input type="number" placeholder="enter age" style={{color:"black",}}></input><br/>
                    <input type="submit" value="submit"></input>
                </form>
            </div>
          )
      }
      else{
        return (
            <div style={{backgroundColor:"black",color:"white"}}>
                <form onSubmit={this.Submit_form}>
                    <input type="text" placeholder="enter first name" style={{color:"white",backgroundColor:"black"}}></input><br/>
                    <input type="number" placeholder="enter last age" style={{color:"white",backgroundColor:"black"}}></input><br/>
                    <input type="submit" value="submit" style={{color:"white",backgroundColor:"black"}}></input>
                </form>
            </div>
          )
      }
  }
}
