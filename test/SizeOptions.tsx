import { useId } from 'react';

import type { TypeNumber } from '@wojtekmaj/react-qr-svg';

type SizeOptionsProps = {
  margin: number;
  setMargin: (margin: number) => void;
  setSize: (size: TypeNumber) => void;
  setSizeAuto: (sizeAuto: boolean) => void;
  size?: TypeNumber;
  sizeAuto?: boolean;
};

export default function SizeOptions({
  margin,
  setMargin,
  setSize,
  setSizeAuto,
  size,
  sizeAuto,
}: SizeOptionsProps) {
  const marginId = useId();
  const sizeId = useId();
  const sizeAutoId = useId();

  function onMarginChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    setMargin(Number(value));
  }

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

      <div>
        <label htmlFor={marginId}>Margin (modules)</label>
        <input
          id={marginId}
          min={0}
          onChange={onMarginChange}
          step={1}
          type="number"
          value={margin}
        />
      </div>
    </fieldset>
  );
}
