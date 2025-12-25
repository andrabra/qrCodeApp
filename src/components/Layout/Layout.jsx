import QrCodeGenerator from '../Generator/QrCodeGenerator';
import QrCodeScanner from '../Scanner/QrCodeScanner';
import Navigation from '../Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { GenerateHistory } from '../GenerateHistory/GenerateHistory';
import { ScanHistory } from '../ScanHistory/ScanHistory';
import { Navigate } from 'react-router-dom';

const Layout = () => {
  return (
    <div
      className='
        flex flex-col gap-5
        mt-5 px-4
        max-w-5xl mx-auto
      '
    >
      <div className='flex justify-between mb-4'>
        <h1 className='text-3xl font-bold underline'>
          <Link to='/generator'>QrCodeGenerator</Link>
        </h1>
        <Navigation />
      </div>

      <Routes>
        <Route path='/' element={<Navigate to='/generator' replace />} />
        <Route path='/generator' element={<QrCodeGenerator />} />
        <Route path='/scanner' element={<QrCodeScanner />} />
        <Route path='/generate-history' element={<GenerateHistory />} />
        <Route path='/scan-history' element={<ScanHistory />} />
      </Routes>
    </div>
  );
};

export default Layout;
