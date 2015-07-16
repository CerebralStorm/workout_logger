import marked from 'marked';
import React from 'react';

const Exercise = React.createClass({
  displayName: 'Exercise',

  propTypes: {
    value: React.PropTypes.string.isRequired
  },

  render() {
    const rawMarkup = marked(this.props.value);
    return (
      <div className='exercse'>
        <h2 className='exercse-value'>
          {this.props.value}
        </h2>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}}/>
      </div>
    );
  }
});

export default Exercise;
