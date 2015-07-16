import alt from '../FluxAlt';
import React from 'react/addons';
import ExerciseActions from '../actions/ExerciseActions';

class ExerciseStore {
  constructor() {
    this.exercises = [];
    this.errorMessage = null;
    this.bindListeners({
      handleFetchExercises: ExerciseActions.FETCH_EXERCISES,
      handleUpdateExercises: ExerciseActions.UPDATE_EXERCISES,
      handleUpdateExercisesError: ExerciseActions.UPDATE_EXERCISES_ERROR,
      handleAddExercise: ExerciseActions.ADD_EXERCISE
    });
  }

  handleFetchExercises() {
    return false;
  }

  handleUpdateExercises(exercises) {
    this.exercises = exercises;
    this.errorMessage = null;
  }

  handleUpdateExercisesError(errorMessage) {
    this.errorMessage = errorMessage;
  }

  handleAddExercise(exercise) {
    const oldExercises = this.exercises;
    this.exercises = React.addons.update(oldExercises, {$push: [exercise]});
  }
}

export default alt.createStore(ExerciseStore, 'ExerciseStore');
