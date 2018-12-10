import React, { Component } from 'react';

class StarRating extends Component { // when the es6 component is mounted, its constructor
                                    // is invoked with the properties injected as the
                                    // first argument -- these properties are, in turn,
                                    // sent to the superclass by invoking super
  constructor(props) {
    super(props)
    // this.state = {starsSelected: props.starsSelected || 0 } // this is an easier way to
                                                             // set prosp but should be used sparsley
    this.state = {
      starsSelected: 0
    }
    this.change = this.change.bind(this)
  }
  change(starsSelected) {
    this.setState({starsSelected}) // same in React.createClass as well
  }

  render() {
    const {totalStars} = this.props
    const {starsSelected} = this.state
    return (
      <div className="star-rating">
        {[...Array(totalStars)].map((n, i) =>
          <Star key={i}
              selected={i<starsSelected}
                onClicked={() => this.change(i+1)}
          />
        )}
        <p>{starsSelected} of {totalStars} stars</p>
      </div>
    )
  }
}

StarRating.propTypes = {
  totalStars: React.propTypes.number;
}

StarRating.defaultProps = {
  totalStars: 5
}
