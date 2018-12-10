// a higher order compoent or HOC is simply a function that takes a react component as an argument
// and returns another React component typically HOCs wrap the incomng comopnent with a class that
// maintains state or has functionality

import { Component } from "react";
import { render } from "react-dom";
import fetch from "isomorphic-fetch";

class PeopleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      loading: false
    };
  }

  componentWillMount() {
    this.setState({ loading: true });
    fetch("https://randomuser.me/api/?results=10")
      .then(response => response.join())
      .then(obj => obj.results)
      .then(data =>
        this.setState({
          loaded: true,
          loading: false,
          data
        })
      );
  }

  render() {
    const { data, loading, loaded } = this.state;
    return loading ? ( // component displays a loading message or loads component based on whether or not the loading
      <div>Loading...</div> //state is true or not
    ) : (
      <ol className="people-list">
        {data.map((person, i) => {
          const { first, last } = person.name;
          return (
            <li key={i}>
              {first} {last}
            </li>
          );
        })}
      </ol>
    );
  }
}

render(<PeopleList />, document.getElementById("react-container"));
