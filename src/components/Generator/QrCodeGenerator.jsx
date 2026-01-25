import { QRCodeSVG } from 'qrcode.react';
import { useState } from 'react';
import Button from '../common/button';
import StyledLink from '../common/StyledLink';
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
      <h2 className='text-2xl font-bold'>Генератор QR-кодов</h2>
      <div className='flex flex-col justify-center items-center gap-5'>
        <form className='flex justify-center items-start gap-5 w-full'>
          <div className='flex flex-col sm:flex-row w-full bg-blue-500 p-1 rounded-sm'>
            <input
              placeholder='Введите текст...'
              value={inputChar}
              onChange={handleChange}
              className='bg-white rounded-sm p-2 w-full outline-none'
              type='text'
            />
            <Button type='submit' onClick={handleClick}>
              Сгенерировать!
            </Button>
          </div>
        </form>

        <div className='min-h-70'>
          {resultShowQrCode !== '' && (
            <div className='flex flex-col justify-center items-center'>
              <a
                className='cursor-pointer'
                href={resultShowQrCode}
                target='_blank'
              >
                <QRCodeSVG size='256' value={resultShowQrCode} />
              </a>
              <div className='flex justify-center items-center gap-2 mt-4'>
                <StyledLink
                  withCopyBtn
                  external
                  to={resultShowQrCode}
                  className='text-center'
                >
                  {resultShowQrCode}
                </StyledLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default QrCodeGenerator;
