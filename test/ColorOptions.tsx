import React from 'react';
import PropTypes from 'prop-types';

type ColorOptionsProps = {
  bgColor?: string;
  fgColor?: string;
  setBgColor: (bgColor: string) => void;
  setFgColor: (fgColor: string) => void;
};

export default function ColorOptions({
  bgColor,
  fgColor,
  setBgColor,
  setFgColor,
}: ColorOptionsProps) {
  function onBgColorChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setBgColor(value);
  }

  function onFgColorChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setFgColor(value);
  }

  return (
    <fieldset>
      <legend>Color options</legend>

      <div>
        <label htmlFor="bgColor">Background color</label>
        <input id="bgColor" onChange={onBgColorChange} type="color" value={bgColor} />
      </div>

      <div>
        <label htmlFor="fgColor">Foreground color</label>
        <input id="fgColor" onChange={onFgColorChange} type="color" value={fgColor} />
      </div>
    </fieldset>
  );
}

ColorOptions.propTypes = {
  bgColor: PropTypes.string,
  fgColor: PropTypes.string,
  setBgColor: PropTypes.func.isRequired,
  setFgColor: PropTypes.func.isRequired,
};
