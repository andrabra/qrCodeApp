import { SCAN_DATA } from '../../constants';
import { QRCodeSVG } from 'qrcode.react';
import StyledLink from '../common/StyledLink';

export const ScanHistory = () => {
  const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
  prevData.reverse();

  return (
    <>
      <h2 className='text-2xl font-bold underline'>История сканирования</h2>
      <ul className='w-full flex flex-col justify-start items-start gap-3'>
        {prevData.map((item) => (
          <li
            className='w-full sm:w-fitflex flex-col justify-center items-center sm:justify-start gap-1.5'
            key={item}
          >
            <a
              className='cursor-pointer flex justify-center sm:justify-start items-center'
              href={item}
              target='_blank'
            >
              <QRCodeSVG size='128' value={item} />
            </a>
            <div className='flex justify-center items-center sm:justify-start gap-2'>
              <StyledLink
                withCopyBtn
                external
                to={item}
                className='text-center'
              >
                {item}
              </StyledLink>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
