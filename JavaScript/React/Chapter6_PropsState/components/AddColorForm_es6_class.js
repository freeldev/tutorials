// AddColorForm component renders an HTML form that contains three elements:
// a text input for the title, a color input for the color's hex value,
// and a button to submit the form -- when the form is submitted, a handler function
// is invoked where the default form event is ignored... This prevents the form
// from trying to send a GET request once submitted

import {Component} from 'react';

/*
class AddColorForm extends Component {
  render() {
    return (
      <form onSubmit={e=>e.preventDefault()}>
        <input type="text"
               placeholder="color title..." required />
        <input type="color" required />
        <button>ADD</button>
      </form>
    )
  }
}
*/

// AddColorForm with submit method
class AddColorForm extends Component { // when using React.createClass there is no need to bind this scope to your component methods
  constructor(props) { //added because we moved submit to its own function
    super(props)
    this.submit = this.submit.bind(this) // we must bind the scope of the component to any methods that need to access that scope with this
  }
  submit(e) {
    const {_title, _color} = this.refs // refs allows us to access title and color elements to interact with them
    e.preventDefault(); // prevents the form's default submit behavior
    /*alert(`New Color: ${_title.value} ${_color.value}`) // alert echoes back the data collected via refs */
    // once alert is dismissed -- refs are used again to reset the form values and focus on the title field

    //replace alert with call back funtion for inverse data flow pattern
    this.props.onNewColor(_title.value, _color.value)
    _title.value = '';
    _color.value = '#000000';
    _title.focus();

  }
  // ref fields added to _title and _color so we are able to reference in the
  // AddColorForm component above
  render() {
    return (
      <form onSubmit={this.submit}>
        <input ref="_title" //ref field so we can reference it with this._title
          type="text" placeholder="color title... " required/>
        <input ref="color" // ref field allowing us to reference it with this._color
          type="color" required/>
        <button>ADD</button>
      </form>
    )
  }
}

export default AddColorForm;
