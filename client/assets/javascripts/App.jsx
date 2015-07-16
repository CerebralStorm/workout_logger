import $ from 'jquery';
import React from 'react';
import ExerciseBox from './components/ExerciseBox';

$(function onLoad() {
  function render() {
    if ($('#content').length > 0) {
      React.render(
        <div>
          <ExerciseBox url='exercises.json' pollInterval={5000}/>

          <div className='container'>

          </div>
        </div>,
        document.getElementById('content')
      );
    }
  }

  render();

  // Next part is to make this work with turbo-links
  $(document).on('page:change', () => {
    render();
  });
});
