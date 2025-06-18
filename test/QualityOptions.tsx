import { useId } from 'react';

import type { ErrorCorrectionLevel } from '@wojtekmaj/react-qr-svg';

type QualityOptionsProps = {
  quality: ErrorCorrectionLevel;
  setQuality: (quality: ErrorCorrectionLevel) => void;
};

export default function QualityOptions({ quality, setQuality }: QualityOptionsProps) {
  const qualityLId = useId();
  const qualityMId = useId();
  const qualityQId = useId();
  const qualityHId = useId();

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value: nextValue } = event.target;

    setQuality(nextValue as ErrorCorrectionLevel);
  }

  return (
    <fieldset>
      <legend>Set error correction level</legend>

      <div>
        <input
          checked={quality === 'L'}
          id={qualityLId}
          name="quality"
          onChange={onChange}
          type="radio"
          value="L"
        />
        <label htmlFor={qualityLId}>L (Low)</label>
      </div>
      <div>
        <input
          checked={quality === 'M'}
          id={qualityMId}
          name="quality"
          onChange={onChange}
          type="radio"
          value="M"
        />
        <label htmlFor={qualityMId}>M (Medium)</label>
      </div>
      <div>
        <input
          checked={quality === 'Q'}
          id={qualityQId}
          name="quality"
          onChange={onChange}
          type="radio"
          value="Q"
        />
        <label htmlFor={qualityQId}>Q (Quartile)</label>
      </div>
      <div>
        <input
          checked={quality === 'H'}
          id={qualityHId}
          name="quality"
          onChange={onChange}
          type="radio"
          value="H"
        />
        <label htmlFor={qualityHId}>H (High)</label>
      </div>
    </fieldset>
  );
}
