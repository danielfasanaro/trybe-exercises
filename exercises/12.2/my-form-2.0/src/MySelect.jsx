import React from 'react'
import './MySelect.css'

class MySelect extends React.Component {
  render() {
    const { name, handler, value } = this.props;
    const states = [ "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT",
                     "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS",
                     "RR", "SC", "SE", "SP", "TO" ];
    return (
      <label>
        Estado:
        <select className="my-select" name={ name } onChange={ handler } value={ value }>
          {states.map(state => <option>{state}</option>)}
        </select>
      </label>
    );
  }
}

export default MySelect;