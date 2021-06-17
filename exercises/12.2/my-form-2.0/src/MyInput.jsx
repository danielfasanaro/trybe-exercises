import React from 'react';

class MyInput extends React.Component {
  render() {
    const { label, name, type, maxlength, required, handler, value, blur, checked } = this.props;
    return (
      <label>
        { label }
        <input
          name={ name }
          onChange={ handler }
          value={ value }
          type={ type }
          maxLength={ maxlength }
          required={ required }
          onBlur={ blur }
          checked={ checked }
        />
      </label>
    );
  }
}

export default MyInput;