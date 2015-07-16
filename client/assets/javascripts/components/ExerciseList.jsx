import React from 'react';
import Exercise from './Exercise';

const ExerciseList = React.createClass({
  displayName: 'ExerciseList',

  propTypes: {
    exercises: React.PropTypes.array
  },

  render() {
    const reversedData = this.props.exercises.slice(0).reverse();
    const exerciseNodes = reversedData.map((exercise, index) => {
      // `key` is a React-specific concept and is not mandatory for the
      // purpose of this tutorial. if you're curious, see more here:
      // http://facebook.github.io/react/docs/multiple-components.html#dynamic-children
      return (
        <Exercise value={exercise.value} key={index}/>
      );
    });

    return (
      <div className="exerciseList">
        {exerciseNodes}
      </div>
    );
  }
});

export default ExerciseList;
