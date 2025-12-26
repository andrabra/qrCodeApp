import { SCAN_DATA } from '../../constants';
import { QRCodeSVG } from 'qrcode.react';
import StyledLink from '../common/StyledLink';
import { CopyToClipboardButton } from '../common/CopyToClipboardButton';

export const ScanHistory = () => {
  const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
  prevData.reverse();

  return (
    <>
      <h2 className='text-2xl font-bold underline'>История сканирования</h2>
      <ul className='flex flex-col justify-start items-start gap-3'>
        {prevData.map((item) => (
          <li className='flex flex-col gap-1.5' key={item}>
            <a className='cursor-pointer' href={item} target='_blank'>
              <QRCodeSVG size='128' value={item} />
            </a>
            <div className='flex justify-center items-center gap-2'>
              <StyledLink external to={item} className='text-center'>
                {item}
              </StyledLink>
              <CopyToClipboardButton text={item}></CopyToClipboardButton>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
