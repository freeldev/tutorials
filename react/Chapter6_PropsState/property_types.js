// React components provide a way to specify and validate property types
// React has built-in automatic property validation for the variables types

React.PropTypes.array
React.PropTypes.bool
React.PropTypes.func
React.PropTypes.number
React.PropTypes.object
React.PropTypes.string

//Validating Props with createClass
// the summary component destructures ingredients steps and title from the Props
// object then constructs a UI to display that data
const Summary = createClass({
  displayName: "Summary",
  render() {
    const {ingredients, steps, title} = this.Props
    return (
      <div className="summary">
        <h1>{title}</h1>
        <p>
            <span>{ingredients.length} Ingredients</span> |
            <span>{steps.length} Steps</span>
        </p>
      </div>
    )
  }
})

// if we were to render the Summary component using strings it would
// count the chars of the string as steps -- 27 ingredients | 44 steps

render(
  <Summary title="Peanut Butter and Jelly"
    ingredients="peanut butter, jelly, bread"
    steps="spread peanut butter and jelly between bread" />,
  document.getElementById('react-container')
)

// VALIDATE PROPS TO AVOID THE ERROR ABOVE!!

const Summary = createClass({
  displayName: "Summary",
  propTypes: {
    ingredients: PropTypes.array,
    steps: PropTypes.array,
    title: PropTypes.string
  },
  render() {
    const { ingredients, steps, title } = this.props
    return (
      <div className="summary">
        <h1>{title}</h1>
        <p>
            <span>{ingredients.length} Ingredients | </span>
            <span>{steps.length} Steps</span>
        </p>
      </div>
    )
  }
})

// NOW RENDERING THE SUMMARY COMPONENT WILL THROW AN Failed propType error
render(
  <Summary title="Peanut Butter and Jelly"
    ingredients="peanut butter, jelly, bread"
    steps="spread peanut butter and jelly between bread" />,
  document.getElementById('react-container')
)

// what would happen if we rendered the summary component without sending it any
// properties

// This throws a TypeError which causes the app to crash completely
render(
  <Summary />
  document.getElementById('react-container')
)

// WE SHOULD ADD the required attribute of propTypes
const Summary = createClass({
  displayName: "Summary",
  propTypes: {
    ingredients: PropTypes.number.isRequired,
    steps: PropTypes.number.isRequired,
    title: PropTypes.string
  },
  render() }{
    const {ingredients, steps, title} = this.props
    return(
        <div className="summary">
            <h1>{title}</h1>
            <p>
                <span>{ingredients} Ingredients</span>
                <span>{steps} Steps</span>
            </p>
        </div>
    )
  }
})
