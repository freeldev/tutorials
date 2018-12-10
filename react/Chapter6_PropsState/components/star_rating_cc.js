
import Star from './star'
// star rating component

const StarRating = React.createClass({
  displayName: "StarRating",
  propTypes: {
    totalStars: PropTypes.number
  },
  getDefaultProps() {
    return {
      totalStars: 5
    }
  },
  getInitialState() { // state can be added by using getInitialState when using createClass
    return {
      starsSelected: 0
    }
  },
  componentWillMount() { // useful when wanting to use component in many different component trees
                         // across different applications - it is not very common
                         // this method is called once when the component is mounted, and you can call
                         // this.setState() from this method -- it also has access to this.props

    const { starsSelected } = this.props
    if (starsSelected) {
      this.setState({starsSelected})
    }
  }
  change(starsSelected){
    this.setState({starsSelected})
  },
  render() {
    const { totalStars } = this.props // totalStars deconstructed from props
    const {starsSelected} = this.state // starsSelected deconstructed from state
    return (
      <div className="star-rating">
          {[...Array(totalStars)].map((n, i) => // used with the Array constructor to initialize a new array of a specific lenght that is mapped to Star elements
              <Star key={i}
                    selected={i<starsSelected}
                    onCLick={() => this.change(i+1)}
              />
          )}
      </div>
    )
  }
})

render(
  <StarRating totalStars={7} starsSelected={3} />,
  document.getElementById('react-container')
)
