import React from 'react';

class MyRadio extends React.Component {
  render() {
    const { label, handler, checked, name, value } = this.props;
    return (
      <label>
        { label }
        <input
          name={ name }
          type="radio"
          value={ value }
          onChange={ handler }
          // checked={ checked }
        />
      </label>
    );
  }
}

export default MyRadio;