import React from 'react';
import ExerciseForm from './ExerciseForm';
import ExerciseList from './ExerciseList';
import ExerciseStore from '../stores/ExerciseStore';
import FormStore from '../stores/FormStore';
import ExerciseActions from '../actions/ExerciseActions';

const ExerciseBox = React.createClass({
  displayName: 'ExerciseBox',

  propTypes: {
    url: React.PropTypes.string.isRequired,
    pollInterval: React.PropTypes.number.isRequired
  },

  getStoreState() {
    return {
      exercises: ExerciseStore.getState(),
      form: FormStore.getState()
    };
  },

  getInitialState() {
    return this.getStoreState();
  },

  componentDidMount() {
    ExerciseStore.listen(this.onChange);
    FormStore.listen(this.onChange);
    ExerciseActions.fetchExercises(this.props.url, true);
    setInterval(ExerciseActions.fetchExercises,
                this.props.pollInterval,
                this.props.url,
                false);
  },

  componentWillUnmount() {
    ExerciseStore.unlisten(this.onChange);
    FormStore.unlisten(this.onChange);
  },

  onChange() {
    this.setState(this.getStoreState());
  },

  render() {
    return (
      <div className="exerciseBox container">
        <h1>Exercises { this.state.form.ajaxSending ? 'SENDING AJAX REQUEST!' : '' }</h1>
        <ExerciseForm formData={this.state.form.exercise}
                     url={this.props.url}
                     ajaxSending={this.state.form.ajaxSending} />
        <ExerciseList exercises={this.state.exercises.exercises} />
      </div>
    );
  }
});

export default ExerciseBox;
