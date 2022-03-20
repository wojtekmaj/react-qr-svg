import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import QRCodeFactory from 'qrcode-generator';

export default function QRCode({
  bgColor = '#ffffff',
  cellClassPrefix = '',
  fgColor = '#000000',
  level = 'L',
  value = '',
  ...otherProps
} = {}) {
  const qrcode = useMemo(() => {
    const qrcode = new QRCodeFactory(0, level);
    qrcode.addData(value);
    qrcode.make();
    return qrcode;
  }, [level, value]);

  const moduleCount = qrcode.getModuleCount();

  const cellClassName = cellClassPrefix && `${cellClassPrefix}-cell`;
  const emptyCellClassName = cellClassPrefix && `${cellClassName} ${cellClassPrefix}-cell-empty`;
  const filledCellClassName = cellClassPrefix && `${cellClassName} ${cellClassPrefix}-cell-filled`;

  let cellIndex = 0;

  return (
    <svg
      shapeRendering="crispEdges"
      viewBox={[0, 0, moduleCount, moduleCount].join(' ')}
      {...otherProps}
    >
      {Array.from(new Array(moduleCount)).map((row, rowIndex) =>
        Array.from(new Array(moduleCount)).map((col, colIndex) => {
          const isDark = qrcode.isDark(rowIndex, colIndex);
          const className = isDark ? filledCellClassName : emptyCellClassName;
          const fill = isDark ? fgColor : bgColor;

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
  value: PropTypes.string.isRequired,
};
