import React, { useState } from 'react'
import HeaderBanner from './components/banner/HeaderBanner';
import MainBanner from './components/banner/MainBanner';

import './components/banner/banner.css'

function App() {

  const [isPersian, setIsPersian] = useState(false)

  return (
    <div className="container-banner text-white p-4 shadow-lg">
      <HeaderBanner
        setIsPersian={setIsPersian}
        isPersian={isPersian}
      />
      <MainBanner
        setIsPersian={setIsPersian}
        isPersian={isPersian} />
    </div>
  );
}

export default App;
