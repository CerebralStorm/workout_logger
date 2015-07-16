import alt from '../FluxAlt';
import ExerciseActions from '../actions/ExerciseActions';
import ExercisesManager from '../utils/ExercisesManager';

class FormActions {
  /**
   * Text is being entered in the exercise form, update the state.
   *
   * @param {String} exercise - Exercise to update from form input.
   * @return {void}
   */
  updateExercise(exercise) {
    this.dispatch(exercise);
  }

  /**
   * Submit a new exercise to the server.
   *
   * @param {String} url - Url used for remote request to sumbmit the exercise.
   * @param {String} exercise - New exercise from UI to send to the server.
   * @return {void}
   */
  submitExercise(url, exercise) {
    this.dispatch();
    ExercisesManager.submitExercise(url, exercise)
      .then((returnedExercise) => {
        ExerciseActions.addExercise(returnedExercise);
      },

      (errorMessage) => {
        ExerciseActions.updateExercisesError(errorMessage);
      });
  }
}

export default alt.createActions(FormActions);
