import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import { SCAN_DATA } from '../../constants';

const QrCodeScanner = () => {
  const [scannedQrCode, setScannedQrCode] = useState(null);

  const scannerSettings = {
    audio: false,
    finder: false,
  };

  const scannerStyles = {
    container: {
      width: '400px',
      height: '400px',
    },
  };

  const scanHandler = (result) => {
    const resultValue = result[0].rawValue;
    const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

    setScannedQrCode(resultValue);

    if (prevData.includes(resultValue)) {
      return;
    }

    localStorage.setItem(SCAN_DATA, JSON.stringify([...prevData, resultValue]));
  };

  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <Scanner
        onScan={scanHandler}
        components={scannerSettings}
        styles={scannerStyles}
        onError={(error) => console.log(error?.message)}
      />
      {scannedQrCode && <p>{scannedQrCode}</p>}
    </div>
  );
};

export default QrCodeScanner;
