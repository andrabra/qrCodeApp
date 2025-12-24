import { GENERATE_DATA } from '../../constants';
import { QRCodeSVG } from 'qrcode.react';

export const GenerateHistory = () => {
  const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
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
