import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import Button from '../common/button';
import { GENERATE_DATA } from '../../constants';

const QrCodeGenerator = () => {
  const [inputChar, setInputChar] = useState('');
  const [resultShowQrCode, setResultShowQrCode] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    if (inputChar === '') return;

    const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

    if (!prevData.includes(inputChar)) {
      localStorage.setItem(
        GENERATE_DATA,
        JSON.stringify([...prevData, inputChar])
      );
    }

    setResultShowQrCode(inputChar);
    setInputChar('');
  };

  const handleChange = (e) => {
    setInputChar(e.target.value);
    setResultShowQrCode('');
  };

  return (
    <>
      <h2 className='text-2xl font-bold underline'>Генератор QR-кодов</h2>
      <div className='flex flex-col justify-center items-center gap-5'>
        <form
          action=''
          className='flex flex-col justify-center items-center gap-5 w-full'
        >
          <input
            placeholder='Type text...'
            value={inputChar}
            onChange={handleChange}
            className='border rounded-sm p-2 w-full'
            type='text'
          />
          <Button type='submit' onClick={handleClick}>
            Сгенерировать!
          </Button>

          <div className='min-h-70'>
            {resultShowQrCode !== '' && (
              <div className='flex flex-col justify-center items-center'>
                <QRCodeSVG size='256' value={resultShowQrCode} />
                <p className='text-center mt-4'>{resultShowQrCode}</p>
              </div>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default QrCodeGenerator;
