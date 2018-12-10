import { render } from 'react-dom'

render (<Summary />, document.getElementById('react-container'))

// with createClass we can add a method called getDefaultProps that returns
// default values forproperties that are not assigned:

const Summary = createClass({
  displayName: "Summary",
  propTypes: {
    ingredients: PropTypes.number,
    steps: PropTypes.number,
    title: PropTypes.string
  },
  getDefaultProps() {
    return {
      ingredients: 0,
      steps: 0,
      title: "[recipe]"
    }
  },
  render() {
    const {ingredients, steps, title} = this.props
    return (
      <div className="summary">
        <h1>{title}</h1>
        <p>
            <span>{ingredients} Ingredients | </span>
            <span>{steps} Steps</span>
        </p>
      </div>
    )
  }
})
