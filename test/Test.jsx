import React, { useState } from 'react';
import QrSvg from '@wojtekmaj/react-qr-svg/src';

import ColorOptions from './ColorOptions';
import QualityOptions from './QualityOptions';
import SizeOptions from './SizeOptions';
import ValueOptions from './ValueOptions';

import './Test.css';

export default function Test() {
  const [bgColor, setBgColor] = useState();
  const [fgColor, setFgColor] = useState();
  const [quality, setQuality] = useState('L');
  const [size, setSize] = useState(0);
  const [sizeAuto, setSizeAuto] = useState(true);
  const [value, setValue] = useState('Hello world');

  return (
    <div className="Test">
      <header>
        <h1>react-qr-svg test page</h1>
      </header>
      <div className="Test__container">
        <aside className="Test__container__options">
          <ColorOptions
            bgColor={bgColor}
            fgColor={fgColor}
            setBgColor={setBgColor}
            setFgColor={setFgColor}
          />
          <QualityOptions quality={quality} setQuality={setQuality} />
          <SizeOptions
            size={size}
            sizeAuto={sizeAuto}
            setSize={setSize}
            setSizeAuto={setSizeAuto}
          />
          <ValueOptions setValue={setValue} value={value} />
        </aside>
        <main className="Test__container__content">
          <QrSvg
            bgColor={bgColor}
            fgColor={fgColor}
            level={quality}
            type={sizeAuto ? 0 : size}
            value={value}
            width={256}
          />
        </main>
      </div>
    </div>
  );
}
