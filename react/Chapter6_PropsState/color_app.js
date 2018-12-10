import AddColorForm from "./components/AddColorForm_functional";

import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: []
    };
  }
  render() {
    const { colors } = this.state;
    return (
      <div className="app">
        <AddColorForm />
        <ColorList colors={colors} />
      </div>
    );
  }
}
