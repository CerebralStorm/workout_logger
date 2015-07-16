import alt from '../FluxAlt';
import ExercisesManager from '../utils/ExercisesManager';

class ExerciseActions {
  /**
   * Fetch exercises from server.
   *
   * @param {String} url - Url used for remote request.
   * @param {Boolean} displaySpinner - Flag whether to show wait spinner
   * @return {void}
   */
  fetchExercises(url, displaySpinner) {
    this.dispatch(displaySpinner);
    ExercisesManager.fetchExercises(url)
      .then((exercises) => this.actions.updateExercises(exercises),
      (errorMessage) => this.actions.updateExercisesError(errorMessage));
  }

  /**
   * A new list of exercises is available, refresh the store.
   *
   * @param {Array} exercises - New exercises to replace those in the store
   * @return {void}
   */
  updateExercises(exercises) {
    this.dispatch(exercises);
  }

  /**
   * An error occurred while fetching exercises, dispatch error message.
   *
   * @param {String} errorMessage - Error message received from server.
   * @return {void}
   */
  updateExercisesError(errorMessage) {
    this.dispatch(errorMessage);
  }

  /**
   * A new exercise has been submitted to the server, dispatch it.
   *
   * @param {String} exercise - New exercise from UI.
   * @return {void}
   */
  addExercise(exercise) {
    this.dispatch(exercise);
  }
}

export default alt.createActions(ExerciseActions);
