import QrCodeGenerator from '../QrCodeGenerator/QrCodeGenerator';
import QrCodeScanner from '../QrCodeScanner/QrCodeScanner';
import Navigation from '../Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div
      className='
        flex flex-col items-center gap-5
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
        <Route path='/scanner' element={<QrCodeScanner />} />
        <Route path='/scanner' element={<QrCodeScanner />} />
      </Routes>
    </div>
  );
};

export default Layout;
