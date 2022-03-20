import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import QRCodeImpl from 'qr.js/lib/QRCode';
import ErrorCorrectLevel from 'qr.js/lib/ErrorCorrectLevel';

export default function QRCode({
  bgColor = '#ffffff',
  cellClassPrefix = '',
  fgColor = '#000000',
  level = ErrorCorrectLevel.L,
  value = '',
  ...otherProps
} = {}) {
  const qrcode = useMemo(() => {
    const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
    qrcode.addData(value);
    qrcode.make();
    return qrcode;
  }, [value, level]);

  const rows = qrcode.modules;

  const cellClassName = cellClassPrefix && `${cellClassPrefix}-cell`;
  const emptyCellClassName = cellClassPrefix && `${cellClassName} ${cellClassPrefix}-cell-empty`;
  const filledCellClassName = cellClassPrefix && `${cellClassName} ${cellClassPrefix}-cell-filled`;

  let cellIndex = 0;

  return (
    <svg
      shapeRendering="crispEdges"
      viewBox={[0, 0, rows.length, rows.length].join(' ')}
      {...otherProps}
    >
      {rows.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const className = cell ? filledCellClassName : emptyCellClassName;
          const fill = cell ? fgColor : bgColor;

          return (
            <rect
              key={cellIndex++}
              className={className}
              fill={fill}
              height={1}
              width={1}
              x={colIndex}
              y={rowIndex}
            />
          );
        }),
      )}
    </svg>
  );
}

QRCode.propTypes = {
  bgColor: PropTypes.string,
  cellClassPrefix: PropTypes.string,
  fgColor: PropTypes.string,
  level: PropTypes.oneOf(['L', 'M', 'Q', 'H']),
  size: PropTypes.number,
  value: PropTypes.string.isRequired,
};
