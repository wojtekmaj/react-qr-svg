import { useId } from 'react';

import type { TypeNumber } from '@wojtekmaj/react-qr-svg';

type SizeOptionsProps = {
  setSize: (size: TypeNumber) => void;
  setSizeAuto: (sizeAuto: boolean) => void;
  size?: TypeNumber;
  sizeAuto?: boolean;
};

export default function SizeOptions({ setSize, setSizeAuto, size, sizeAuto }: SizeOptionsProps) {
  const sizeId = useId();
  const sizeAutoId = useId();

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
        <label htmlFor={sizeId}>Size</label>
        <input
          disabled={sizeAuto}
          id={sizeId}
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
          id={sizeAutoId}
          onChange={onSizeAutoChange}
          type="checkbox"
          name="size-auto"
        />
        <label htmlFor={sizeAutoId}>Auto</label>
      </div>
    </fieldset>
  );
}
