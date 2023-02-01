import React from 'react';
import PropTypes from 'prop-types';

export default function ValueOptions({ setValue, value }) {
  function onChange(event) {
    const { value: nextValue } = event.target;

    setValue(nextValue);
  }

  return (
    <fieldset>
      <legend>Set value</legend>

      <div>
        <label htmlFor="value">Value</label>
        <input id="value" onChange={onChange} type="text" value={value} />
        &nbsp;
        <button onClick={() => setValue('')} type="button">
          Clear
        </button>
      </div>
    </fieldset>
  );
}

ValueOptions.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string,
};
