import React from 'react';
import PropTypes from 'prop-types';

export default function Form({ onHandleChange }) {
  return (
    <div>
      <div>
        <button type="button" name="Good" onClick={onHandleChange}>
          Good
        </button>
        <button type="button" name="Neutral" onClick={onHandleChange}>
          Neutral
        </button>
        <button type="button" name="Bad" onClick={onHandleChange}>
          Bad
        </button>
      </div>
    </div>
  );
}

Form.propTypes = {
  onHandleChsnge: PropTypes.func.isRequired,
};
