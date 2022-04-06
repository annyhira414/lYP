import React from "react";
import Forms from './Forms';
import Formsone from "./Formsone";
import Option from "./Option";

class App extends React.Component {
    render() {
      return (
        <div>
          <h1>I am app</h1>
          <Forms />
          <Formsone />
          <Option />
        </div>
      );
     }
  }

  export default App;