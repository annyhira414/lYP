import React from "react";

export default class Formsone extends React.Component {
  state = {
    person: "",
    email: "",
    password: "",
  };

  handelChange = (e) => {
    console.log(e.target.value);
    // this.setState = e.target.value; aita vul . setState akta method
    this.setState({
      person: e.target.value,
    });
  };

  handelEmail = (e) => {
    console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  };
  handelPassword = (e) => {
    console.log(e.target.password)
    this.setState({
      password:e.target.value
    });
  };



  render() {
    const { person, email, password } = this.state;
    return (
      <>
        <h1>i am form one </h1>
        <form>
          <label>
            Name:
            <input
              type="text"
              placeholder="please name"
              value={person}
              onChange={this.handelChange}
            />
            <h1>{person}</h1>
          </label>
          <br />
          <br />
          <label>
            Email Address:
            <input
              type="email"
              placeholder="email Add"
              value={email}
              onChange={this.handelEmail}
            />
          </label>
          <br />
          <br />
          <label>
            Password:
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={this.handelPassword}
            />
          </label>
        </form>
      </>
    );
  }
}
