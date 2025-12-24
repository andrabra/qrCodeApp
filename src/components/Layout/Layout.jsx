import QrCodeGenerator from '../Generator/QrCodeGenerator';
import QrCodeScanner from '../Scanner/QrCodeScanner';
import Navigation from '../Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GenerateHistory } from '../GenerateHistory/GenerateHistory';
import { ScanHistory } from '../ScanHistory/ScanHistory';

const Layout = () => {
  return (
    <div
      className='
        flex flex-col gap-5
        mt-5 px-4
        max-w-5xl mx-auto
      '
    >
      <h1 className='text-3xl font-bold underline'>
        <Link to='/'>QrCodeGenerator</Link>
      </h1>
      <Navigation />
      <Routes>
        <Route path='/generator' element={<QrCodeGenerator />} />
        <Route path='/scanner' element={<QrCodeScanner />} />
        <Route path='/generate-history' element={<GenerateHistory />} />
        <Route path='/scan-history' element={<ScanHistory />} />
      </Routes>
    </div>
  );
};

export default Layout;
