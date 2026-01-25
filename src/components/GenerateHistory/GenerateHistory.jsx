import { GENERATE_DATA } from '../../constants';
import { QRCodeSVG } from 'qrcode.react';
import StyledLink from '../common/StyledLink';

export const GenerateHistory = () => {
  const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');
  prevData.reverse();

  return (
    <>
      <h2 className='text-2xl font-bold'>История генерирования</h2>
      <ul className='flex flex-col justify-start items-start gap-3'>
        {prevData.map((item) => (
          <li
            className='flex w-full justify-center sm:w-fit sm:justify-start flex-col gap-1.5'
            key={item}
          >
            <a
              className='cursor-pointer flex justify-center sm:justify-start items-center'
              href={item}
              target='_blank'
            >
              <QRCodeSVG size='200' value={item} />
            </a>
            <div className='flex justify-center items-center sm:justify-start gap-2'>
              <StyledLink
                external
                withCopyBtn
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
