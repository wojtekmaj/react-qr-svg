import React from 'react';

type QualityOptionsProps = {
  quality: ErrorCorrectionLevel;
  setQuality: (quality: ErrorCorrectionLevel) => void;
};

export default function QualityOptions({ quality, setQuality }: QualityOptionsProps) {
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
          id="qualityL"
          name="quality"
          onChange={onChange}
          type="radio"
          value="L"
        />
        <label htmlFor="qualityL">L (Low)</label>
      </div>
      <div>
        <input
          checked={quality === 'M'}
          id="qualityM"
          name="quality"
          onChange={onChange}
          type="radio"
          value="M"
        />
        <label htmlFor="qualityM">M (Medium)</label>
      </div>
      <div>
        <input
          checked={quality === 'Q'}
          id="qualityQ"
          name="quality"
          onChange={onChange}
          type="radio"
          value="Q"
        />
        <label htmlFor="qualityQ">Q (Quartile)</label>
      </div>
      <div>
        <input
          checked={quality === 'H'}
          id="qualityH"
          name="quality"
          onChange={onChange}
          type="radio"
          value="H"
        />
        <label htmlFor="qualityH">H (High)</label>
      </div>
    </fieldset>
  );
}
