const ColorList = ({ colors=[] }) =>
  <div className="color-list">
    {(colors.length === 0 ) ?
      <p>No Colors Listed. (add a Color)</p> :
        colors.map(color =>
          <Color key={color.id} {...color} />
        )
      }
  </div>
