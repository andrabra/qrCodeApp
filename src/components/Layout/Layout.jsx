import { useState } from 'react';
import QrCodeGenerator from '../QrCodeGenerator/QrCodeGenerator';
import QrCodeScanner from '../QrCodeScanner/QrCodeScanner';
import Button from '../common/button';
import Navigation from '../Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';

const Layout = () => {
  const [showGenerate, setShowGenerate] = useState(true);
  const [showScan, setShowScan] = useState(false);

  const handleClickGenerate = () => {
    setShowGenerate(true);
    setShowScan(false);
  };
  const handleClickScan = () => {
    setShowGenerate(false);
    setShowScan(true);
  };

  return (
    <div className='flex flex-col justify-center items-center gap-5 min-h-screen'>
      <h1 className='text-3xl font-bold underline'>QrCodeGenerator</h1>
      <Navigation />

      <Routes>
        <Route path='/generator' element={<QrCodeGenerator />} />
        <Route path='/scanner' element={<QrCodeScanner />} />
      </Routes>
      {/* {showGenerate && <QrCodeGenerator />}
      {showScan && <QrCodeScanner />}
      <div className='flex gap-5'>
        <Button onClick={handleClickGenerate}>Generate</Button>
        <Button onClick={handleClickScan}>Scan</Button>
      </div> */}
    </div>
  );
};

export default Layout;
