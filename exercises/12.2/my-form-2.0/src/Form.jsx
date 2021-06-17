import React from 'react';
import MyInput from './MyInput';
import MySelect from './MySelect';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Nome: "",
      Email: "",
      CPF: "",
      Cidade: "",
      Estado: "AC",
      Radio: "",
      // Radio: {
      //   Casa: true,
      //   Apartamento: false,
      // },
    }

    this.handleInput = this.handleInput.bind(this);
    this.clearOnNumber = this.clearOnNumber.bind(this);
  }

  handleInput(event, { uppercase } = { uppercase: false }) {
    const { name, value } = event.target;
    if (uppercase) return this.setState({ [name]: value.toUpperCase() });
    this.setState({ [name]: value});
  }

  clearOnNumber(event) {
    const { name } = event.target;
    if ( this.state[name].match(/^\d/)) this.setState({ [name]: "" });
  }

  // handleRadio(event, radio) {
  //   const { name } = event.target;
  //   const checked = Object.keys(this.state[radio]).reduce((newState, option) => {
  //     if (option === name) newState[option] = true;
  //     else newState[option] = false;
  //     return newState;
  //   }, {});
  //   this.setState({ [radio]: checked });
  // }

  render() {
    return (
      <div>
        <fieldset className="personal-info">
          <MyInput
            label="Nome"
            name="Nome"
            type="text"
            maxlength="40"
            required={ true }
            handler={ event => this.handleInput(event, { uppercase: true }) }
            value={ this.state.Nome }
          />
          <MyInput
            label="Email"
            name="Email"
            type="text"
            maxlength="50"
            required={ true }
            handler={ event => this.handleInput(event) }
            value={ this.state.Email }
          />
          <MyInput
            label="CPF"
            name="CPF"
            type="text"
            maxlength="11"
            required={ true }
            handler={ event => this.handleInput(event) }
            value={ this.state.CPF }
          />
          <MyInput
            label="Cidade"
            name="Cidade"
            type="text"
            maxlength="28"
            required={ true }
            handler={ event => this.handleInput(event) }
            value={ this.state.Cidade }
            blur={ event => this.clearOnNumber(event) }
          />
          <MySelect
            name="Estado"
            handler={ event => this.handleInput(event) }
            value={ this.state.Estado }
          />
          <div>
            <MyInput
              label="Casa"
              type="radio"
              value="Casa"
              name="Radio"
              handler={ event => this.handleInput(event) }
              // checked={ this.state.Radio.Casa }
            />
            <MyInput
              label="Apartamento"
              type="radio"
              value="Apartamento"
              name="Radio"
              handler={ event => this.handleInput(event) }
              // checked={ this.state.Radio.Apartamento }
            />
          </div>

        </fieldset>
      </div>
    );
  }
}

export default Form;