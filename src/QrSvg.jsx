import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import qrcodeGenerator from 'qrcode-generator';

const rect = 'v1h1v-1z';

function makePath(qrcode, margin, reverse) {
  const moduleCount = qrcode.getModuleCount();

  let d = '';

  for (let row = 0; row < moduleCount; row++) {
    for (let col = 0; col < moduleCount; col++) {
      if (qrcode.isDark(row, col) === (reverse ? false : true)) {
        d += `M${col + margin},${row + margin}${rect}`;
      }
    }
  }

  return d;
}

export default function QRCode({
  bgColor = '#fff',
  cellClassPrefix,
  fgColor = '#000',
  level = 'L',
  margin = 0,
  type = 0,
  value = '',
  ...otherProps
} = {}) {
  const qrcode = useMemo(() => {
    const qrcode = qrcodeGenerator(type, level);
    qrcode.addData(value);
    qrcode.make();
    return qrcode;
  }, [level, type, value]);

  const size = qrcode.getModuleCount() + margin * 2;

  const bgPath = makePath(qrcode, margin, true);
  const fgPath = makePath(qrcode, margin);

  const bgClassName = cellClassPrefix && `${cellClassPrefix} ${cellClassPrefix}-empty`;
  const fgClassName = cellClassPrefix && `${cellClassPrefix} ${cellClassPrefix}-filled`;

  return (
    <svg shapeRendering="crispEdges" viewBox={`0 0 ${size} ${size}`} {...otherProps}>
      <path d={bgPath} fill={bgColor} className={bgClassName} />
      <path d={fgPath} fill={fgColor} className={fgClassName} />
    </svg>
  );
}

QRCode.propTypes = {
  bgColor: PropTypes.string,
  cellClassPrefix: PropTypes.string,
  fgColor: PropTypes.string,
  level: PropTypes.oneOf(['L', 'M', 'Q', 'H']),
  margin: PropTypes.number,
  type: PropTypes.number,
  value: PropTypes.string.isRequired,
};
