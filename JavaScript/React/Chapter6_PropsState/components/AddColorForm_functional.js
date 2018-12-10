// Refs used in functional stateless components -- these componenets do not have
// this so we cannot use this.refs -- we must use a function which passes
// the input instancee as an argument.  we can capture that instance and save it
// to a local variable

const AddColorForm = ({onNewColor=f=>f}) => {
  let _title, _color
  const submit = e => {
    e.preventDefault()
    onNewColor(_title.value, _color.value)
    _title.value = ''
    _color.value = '#000000'
    _title.focus()
  }
  return (
    <form onSubmit={submit}>
      <input ref={input => _title = input}
             type="text"
             placeholder="color title..." required />
      <input ref={input => _color = input}
             type="color" required />
      <button>ADD</button>
    </form>
  )
}

export default AddColorForm;
