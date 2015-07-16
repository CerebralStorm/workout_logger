import React from 'react/addons';
import Input from 'react-bootstrap/lib/Input';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import FormActions from '../actions/FormActions';
import FormStore from '../stores/FormStore';

const ExerciseForm = React.createClass({
  displayName: 'ExerciseForm',

  propTypes: {
    url: React.PropTypes.string.isRequired,
    formData: React.PropTypes.object.isRequired,
    ajaxSending: React.PropTypes.bool.isRequired
  },

  getInitialState() {
    return {
      formMode: 0
    };
  },

  handleSelect(selectedKey) {
    this.setState({formMode: selectedKey});
  },

  handleChange() {
    let obj;

    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    if (this.state.formMode < 2) {
      obj = {
        value: this.refs.value.getValue()
      };
    } else {
      obj = {
        // This is different because the input is a native HTML element
        // rather than a React element.
        value: this.refs.inlineValue.getDOMNode().value
      };
    }

    FormActions.updateExercise(obj);
  },

  handleSubmit(e) {
    e.preventDefault();
    FormActions.submitExercise(this.props.url, FormStore.getState().exercise);
  },

  render() {
    return (
      <div>
        <form className='commentForm form' onSubmit={this.handleSubmit}>
          <Input type='text' label='Name' placeholder='Reps' ref='value'
                 value={this.props.formData.value}
                 onChange={this.handleChange}
                 disabled={this.props.ajaxSending}/>
          <input type='submit' className='btn btn-primary' value='Post'
                 disabled={this.props.ajaxSending}/>
        </form>
      </div>
    );
  }
});

export default ExerciseForm;
