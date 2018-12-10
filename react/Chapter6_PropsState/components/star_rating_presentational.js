// In order to make the StarRating compoennt presentational, we need to remove
// state -- only use props

const StarRating = ({ starsSelected=0, totalStars=5, onRate=f=>f}) =>
  <div className="star-rating">
    {[...Array(totalStars)].map((n, i) =>
        <Star key={i}
              selected={i<starsSelected}
                onClick={() => onRate(i+1)} /> // onRate sends the rating as an argument
    )}
    <p>{starsSelected} of {totalStars} stars</p>
  </div>
