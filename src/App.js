import React, { useState } from 'react'
import HeaderBanner from './components/banner/HeaderBanner';
import MainBanner from './components/banner/MainBanner';

function App() {

  const [isPersian, setIsPersian] = useState(false)

  return (
    <div className="bg-gray-600 text-white p-4 shadow-lg">
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
