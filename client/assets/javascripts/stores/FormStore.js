import alt from '../FluxAlt';
import FormActions from '../actions/FormActions';
import ExerciseActions from '../actions/ExerciseActions';

const emptyExercise = {author: '', text: ''};

class FormStore {
  constructor() {
    this.mode = 0;
    this.exercise = emptyExercise;
    this.ajaxSending = false;
    this.bindListeners({
      handleUpdateExercise: FormActions.UPDATE_EXERCISE,
      handleSubmitExercise: FormActions.SUBMIT_EXERCISE,
      handleFetchExercises: ExerciseActions.FETCH_EXERCISES,
      handleUpdateExercises: ExerciseActions.UPDATE_EXERCISES,
      handleUpdateExercisesError: ExerciseActions.UPDATE_EXERCISES_ERROR,
      handleAddExercise: ExerciseActions.ADD_EXERCISE
    });
  }

  handleUpdateExercise(exercise) {
    this.exercise = exercise;
  }

  handleSubmitExercise() {
    this.ajaxSending = true;
    this.exercise = emptyExercise;
  }

  handleFetchExercises(displaySpinner) {
    if (displaySpinner) {
      this.ajaxSending = true;
    }
  }

  handleUpdateExercises() {
    this.ajaxSending = false;
  }

  handleUpdateExercisesError() {
    this.ajaxSending = false;
  }

  handleAddExercise() {
    this.ajaxSending = false;
  }
}

export default alt.createStore(FormStore, 'FormStore');
