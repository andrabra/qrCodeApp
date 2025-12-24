import { SCAN_DATA } from '../../constants';
import { QRCodeSVG } from 'qrcode.react';

export const ScanHistory = () => {
  const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');
  prevData.reverse();

  return (
    <ul className='flex flex-col justify-start items-start gap-3'>
      {prevData.map((item) => (
        <li className='flex flex-col gap-1.5' key={item}>
          <QRCodeSVG size='128' value={item} />
          <p>{item}</p>
        </li>
      ))}
    </ul>
  );
};