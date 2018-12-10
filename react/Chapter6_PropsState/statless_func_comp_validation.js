const Summary = ({ ingredients, steps, title }) => (
  return <div>
    <h1>{title}</h1>
    <p>{ingredients} Ingredients | {steps} Steps</p>
  </div>
)

Summary.propTypes = {
  ingredients: React.PropTypes.number.isRequired, // proptype validation
  steps: React.PropTypes.number.isRequired // proptype validation
}

Summary.defaultProps = {
  ingredients: 1,
  steps: 1
}

// using default property values with functional stateless components

const Summary = ({ ingredients=0, steps=0, title='[recipe]'}) => {
  return <div>
    <h1>{title}</h1>
    <p>{ingredients} Ingredients | {steps} Steps</p>
  </div>
}

// EMEAScript proposal for Class Fields *& Static Properties
// allows us to encapsulate propTypes and defaultProps inside of class
// declaration. Property initiatlizers also provide encapuslation and cleaner
// syntax

class Summary extends React.Component {
  static propTypes = {
    ingredients: PropTypes.number,
    steps: PropTypes.number,
    title: (props, propName) =>
      (typeof props[propName] !== 'string') ?
        new Error("A title must be a string") :
          (props[propName].length > 20) ?
            new Error('title is over 20 characters') :
            null
  }
  static defaultProps = {
    ingredients: 0,
    steps: 0,
    title: "[recipe]"
  }

  render() {
    const {ingredients, steps, title} =this.props
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
}
