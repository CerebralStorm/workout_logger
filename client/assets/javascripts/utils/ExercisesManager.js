import $ from 'jquery';

const ExercisesManager = {
  /**
   * Retrieve exercises from server using AJAX call.
   *
   * @param {String} url - Url of server to retrieve exercises.
   * @returns {Deferred} - jqXHR result of ajax call.
   */
  fetchExercises(url) {
    return $.ajax({
      url: url,
      dataType: 'json'
    });
  },

  /**
   * Submit new exercise to server using AJAX call.
   *
   * @param {String} url - Url of where to post exercise.
   * @param {Object} exercise - Exercise body to post.
   * @returns {Deferred} - jqXHR result of ajax call.
   */
  submitExercise(url, exercise) {
    return $.ajax({
      url: url,
      dataType: 'json',
      type: 'POST',
      data: {exercise: exercise}
    });
  }
};

export default ExercisesManager;
