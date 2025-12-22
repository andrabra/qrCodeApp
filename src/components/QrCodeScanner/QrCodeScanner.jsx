import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';

const QrCodeScanner = () => {
  const [scannedQrCode, setScannedQrCode] = useState(null);

  const scannerSettings = {
    audio: false,
    finder: false,
  };

  const scanHandler = (result) => {
    setScannedQrCode(result[0].rawValue);
  };

  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <Scanner
        onScan={scanHandler}
        allowMultiple
        components={scannerSettings}
        onError={(error) => console.log(error?.message)}
      />
      {scannedQrCode && <p>{scannedQrCode}</p>}
    </div>
  );
};

export default QrCodeScanner;
