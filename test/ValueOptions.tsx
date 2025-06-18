import { useId } from 'react';

type ValueOptionsProps = {
  setValue: (value: string) => void;
  value?: string;
};

export default function ValueOptions({ setValue, value }: ValueOptionsProps) {
  const valueId = useId();

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value: nextValue } = event.target;

    setValue(nextValue);
  }

  return (
    <fieldset>
      <legend>Set value</legend>

      <div>
        <label htmlFor={valueId}>Value</label>
        <input id={valueId} onChange={onChange} type="text" value={value} />
        &nbsp;
        <button onClick={() => setValue('')} type="button">
          Clear
        </button>
      </div>
    </fieldset>
  );
}
