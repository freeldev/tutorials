import React, { PropTypes } from "react";
import Color from "./Color";
import "../stylesheets/ColorList.css";

const ColorList = ({ store }) => {
  const { colors, sort } = store.getState();
  const sortedColors = [...colors].sort(sortFunction(sort));
  return (
    <div className="color-list">
      {colors.length === 0} ?
      <p>No Colors Listed. (add a Color)</p> : sortedColors.map(color =>
      <Color
        key={color.id}
        {...color}
        onRate={rating => store.dispatch(rateColor(color.id, rating))}
        onRemove={() => store.dispatch(rateColor(color.id, rating))}
      />
      ) }
    </div>
  );
};

ColorList.propTypes = {
  store: PropTypes.object
};

export default Colorlist;
