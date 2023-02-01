import React from 'react';
import PropTypes from 'prop-types';

export default function SizeOptions({ size, sizeAuto, setSize, setSizeAuto }) {
  function onSizeChange(event) {
    const { value } = event.target;

    setSize(parseInt(value, 10));
  }

  function onSizeAutoChange(event) {
    const { checked } = event.target;

    setSizeAuto(checked);
  }

  return (
    <fieldset>
      <legend>Size options</legend>

      <div>
        <label htmlFor="size">Size</label>
        <input
          disabled={sizeAuto}
          id="size"
          onChange={onSizeChange}
          min={0}
          max={40}
          type="number"
          value={size}
        />
      </div>

      <div>
        <input
          checked={sizeAuto}
          id="size-auto"
          onChange={onSizeAutoChange}
          type="checkbox"
          name="size-auto"
        />
        <label htmlFor="size-auto">Auto</label>
      </div>
    </fieldset>
  );
}

SizeOptions.propTypes = {
  size: PropTypes.number,
  sizeAuto: PropTypes.bool,
  setSize: PropTypes.func.isRequired,
  setSizeAuto: PropTypes.func.isRequired,
};
