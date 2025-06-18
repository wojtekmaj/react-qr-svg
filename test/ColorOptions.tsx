import { useId } from 'react';

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
  const bgColorId = useId();
  const fgColorId = useId();

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
        <label htmlFor={bgColorId}>Background color</label>
        <input id={bgColorId} onChange={onBgColorChange} type="color" value={bgColor} />
      </div>

      <div>
        <label htmlFor={fgColorId}>Foreground color</label>
        <input id={fgColorId} onChange={onFgColorChange} type="color" value={fgColor} />
      </div>
    </fieldset>
  );
}
