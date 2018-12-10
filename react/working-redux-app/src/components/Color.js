import React, { PropTypes, Component } from "react";
import StarRating from "./StarRating";
import "../stylesheets/Color.css";

// const Color = ({ title, color, rating=0, onRemove=f=>f, onRate=f=>f}) =>
//   <section className="color">
//     <h1>{title}</h1>
//     <button onClick={onRemove}>X</button>
//     <div className="color"
//          style={{ backgroundColor: color }}>
//    </div>
//    <div>
//       <StarRating starsSelected={rating} onRate={onRate} />
//    </div>
//   </section>

// Color.propTypes = {
//   title: PropTypes.string.isRequired,
//   color: PropTypes.string.isRequired,
//   rating: PropTypes.number,
//   onRemove: PropTypes.func,
//   onRate: PropTypes.func
// }

// export default Color

class Color extends Component {
  componentWillMount() {
    this.style = { backgroundColor: "#CCC" };
  }

  shouldComponentUpdate(nextProps) {
    // prevents unecessary updates from occurring
    // new props are passed to method as an argument and compared to old -- if they aren't different they won't update
    return this.props.rating !== nextProps.rating; // if they are not equal then it will update  and rerender the color component
  }

  componentWillUpdate(nextProps) {
    const { title, rating } = this.props;
    this.style = null;
    this.refs.title.style.backgroundColor = "red";
    this.refs.title.style.color = "white";
    alert(`${title}: rating ${rating} -> ${nextProps.rating}`);
  }

  componentDidUpdate(prevProps) {
    const { title, rating } = this.props;
    const status = rating > prevProps.rating ? "better" : "worse";
    this.refs.title.style.backgroundColor = "white";
    this.refs.title.style.color = "black";
  }

  render() {
    const { title, color, rating, onRemove, onRate } = this.props;
    return (
      <section className="color" style={this.style}>
        <h1 ref="title">{title}</h1>
        <button onClick={onRemove}>X</button>
        <div className="color" style={{ backgroundColor: color }} />
        <div>
          <StarRating starsSelected={rating} onRate={onRate} />
        </div>
      </section>
    );
  }
}

Color.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  rating: PropTypes.number,
  onRemove: PropTypes.func,
  onRate: PropTypes.func
};

Color.defaultProps = {
  rating: 0,
  onRemove: f => f,
  onRate: f => f
};

export default Color;
