import React, { Component } from "react";
import "../styles/styles.css";

//classBased component
class Header extends Component {
  state = {
    active: false,
    title: "The keywords are common",
    keywords: "hey",
  };

  //the flat arrow function will refrence the this to class not the object that is calling the mehod
  //same as using the bind() in regular function
  inputChangeHandler = (event) => {
    const value = event.target.value === "" ? false : true;
    console.log(event.target.value);
    console.log(value);
    this.setState({
      active: value,
      keywords: event.target.value,
    });
  };

  //React.component
  render() {
    // const style = {
    //   background: "red",
    // };
    // if (this.state.keywords !== "") {
    //   style.background = "blue";
    // } else {
    //   style.background = "red";
    // }
    //a single epression can be returned using the {} braces
    return (
      <header
        style={{
          background: `${this.state.active ? "red" : "blue"}`,
        }}
      >
        <div className="logo">Logo</div>
        <input type="text" onChange={this.inputChangeHandler} />\
      </header>
    );
  }
}

export default Header;
