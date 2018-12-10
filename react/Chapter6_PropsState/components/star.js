//clickable star component
//if star is selected --- it will add the class 'slelected'

const Star = ({ selected=False, onClick=f=>f}) =>
  <div className={(selected) ? "star selected" : "star"}
    onClick={onClick} > {// whenever item is clicked onClick will be invoked}
  </div>

Star.propTypes = {
  selected: React.propTypes.bool;
  onClick: React.propTypes.func
}

export default Star;
