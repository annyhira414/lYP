import React from "react";

export default class Option extends React.Component {
  state ={js: ''}
  
  jsChange = (e) =>{
    console.log(e.target.value)
    this.setState({
        js : e.target.value
    })
  }
  
    render() {
        const {js} = this.state
    return (
      <>
        <h1>I am Option</h1>
        <select value ={js} onChange={this.jsChange}>
          <option value="React"> react</option>
          <option value="Angula"> Angula</option>
          <option value="vue Js"> vue Js</option>
          <option value="JQurey"> JQurey</option>
        </select>
      </>
    );
  }
}
