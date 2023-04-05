import React, { useState } from 'react';
import QrSvg from '@wojtekmaj/react-qr-svg';

import './Sample.css';

export default function Sample() {
  const [value, setValue] = useState('Hello world');

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div className="Sample">
      <header>
        <h1>react-qr-svg sample page</h1>
      </header>
      <div className="Sample__container">
        <main className="Sample__container__content">
          <QrSvg value={value} width={256} />
          <div>
            <label>
              <input type="text" onChange={onChange} value={value} />
            </label>
          </div>
        </main>
      </div>
    </div>
  );
}
