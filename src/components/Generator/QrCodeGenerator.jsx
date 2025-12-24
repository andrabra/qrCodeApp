import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import Button from '../common/button';
import { GENERATE_DATA } from '../../constants';

const QrCodeGenerator = () => {
  const [inputChar, setInputChar] = useState('');
  const [resultShowQrCode, setResultShowQrCode] = useState('');

  const handleClick = (e) => {
    e.preventDefault();

    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    if (prevData.includes(inputChar)) {
      return;
    }

    localStorage.setItem(
      GENERATE_DATA,
      JSON.stringify([...prevData, inputChar])
    );

    setResultShowQrCode(inputChar);
    setInputChar('');
  };

  const handleChange = (e) => {
    setInputChar(e.target.value);
    setResultShowQrCode('');
  };

  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <form
        action=''
        className='flex flex-col justify-center items-center gap-5'
      >
        <input
          placeholder='Type text...'
          value={inputChar}
          onChange={handleChange}
          className='border rounded-sm p-2'
          type='text'
        />
        <Button type='submit' onClick={handleClick}>
          Generate!
        </Button>

        <div className='min-h-70'>
          {resultShowQrCode !== '' && (
            <div>
              <QRCodeSVG size='256' value={resultShowQrCode} />
              <p className='text-center mt-4'>{resultShowQrCode}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default QrCodeGenerator;
