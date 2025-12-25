import { GENERATE_DATA } from '../../constants';
import { QRCodeSVG } from 'qrcode.react';
import StyledLink from '../common/StyledLink';

export const GenerateHistory = () => {
  const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
  prevData.reverse();

  return (
    <>
      <h2 className='text-2xl font-bold underline'>История генерирования</h2>
      <ul className='flex flex-col justify-start items-start gap-3'>
        {prevData.map((item) => (
          <li className='flex flex-col gap-1.5' key={item}>
            <a className='cursor-pointer' href={item} target='_blank'>
              <QRCodeSVG size='128' value={item} />
            </a>
            <StyledLink external to={item}>
              {item}
            </StyledLink>
          </li>
        ))}
      </ul>
    </>
  );
};
