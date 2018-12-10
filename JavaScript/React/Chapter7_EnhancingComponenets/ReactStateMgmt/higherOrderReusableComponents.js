import { render } from "react-dom";

const DataComponent = (
  ComposedComponent,
  url // all higher order components are functions
) =>
  class DataComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        loading: false,
        loaded: false
      };
    }
    componentWillMount() {
      this.setState({ loading: true });
      fetch(url)
        .then(response => response.json())
        .then(data =>
          this.setState({
            loaded: true,
            loading: false,
            data
          })
        );
    }

    render() {
      return (
        <div className="data-component">
          {this.state.loading} ?
          <div>Loading...</div> :
          <ComposedComponent
            {...this.state}
            {...this.props} // passess props down to the composed component
          />
        </div>
      );
    }
  };

const PeopleList = ({ data }) => (
  <ol className="people-list">
    {data.results.map((person, i) => {
      const { first, last } = person.name;
      return (
        <li key={i}>
          {first} {last}
        </li>
      );
    })}
  </ol>
);

const RandomMeUsers = DataComponent(PeopleList, "https://randomuser.me/api/");

render(
  <RandomMeUsers count={10} />,
  document.getElementById("react-container")
);

// DataComponent reused to create a drop-down list of countries

const CountryNames = (
  { data, selected = "" } // pre-selected is united states because that is the default of the list
) => (
  <select className="people-list" defaultValue={selected}>
    {data.map(({ name }, i) => (
      <option key={i} value={name}>
        {name}
      </option>
    ))}
  </select>
);

const CountryDropDown = DataComponent(
  CountryNames,
  "https://restcountries.eu/rest/v1/all"
);

render(
  <CountryDropDown selected="United States" />, // this is what selts the efault to United States  --> only works if props are passed from HOC
  document.getElementById("react-container")
);
