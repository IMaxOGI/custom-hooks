import React from "react";
import ExampleWorkHooks from "./Components/ExampleWorkHooks";
import "./App.css";

class App extends React.Component {
  render() {
    return <div className="app">{<ExampleWorkHooks />}</div>;
  }
}

export default App;
