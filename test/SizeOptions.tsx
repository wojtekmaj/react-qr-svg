import React from 'react';

import type { TypeNumber } from '@wojtekmaj/react-qr-svg';

type SizeOptionsProps = {
  setSize: (size: TypeNumber) => void;
  setSizeAuto: (sizeAuto: boolean) => void;
  size?: TypeNumber;
  sizeAuto?: boolean;
};

export default function SizeOptions({ setSize, setSizeAuto, size, sizeAuto }: SizeOptionsProps) {
  function onSizeChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setSize(Number(value) as TypeNumber);
  }

  function onSizeAutoChange(event: React.ChangeEvent<HTMLInputElement>) {
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
