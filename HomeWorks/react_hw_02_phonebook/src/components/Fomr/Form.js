import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Form extends Component {
  state = {
    name: '',
    inputNumer: '',
  };

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    let { name, inputNumer } = this.state;
    event.preventDefault();
    this.props.onAddName(name, inputNumer);
    this.setState({
      name: '',
      inputNumer: '',
    });
  };

  render() {
    let { name, inputNumer } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleChange}
          />
          Telephone
          <input
            type="tel"
            name="inputNumer"
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
            value={inputNumer}
            onChange={this.handleChange}
          />
          <button type="submit">Add contact</button>
        </label>
      </form>
    );
  }
}

Form.propTypes = {
  onAddName: PropTypes.func.isRequired,
  name: PropTypes.string,
  inputNumer: PropTypes.string,
};
