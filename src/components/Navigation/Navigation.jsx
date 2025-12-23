import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav
      className='
        flex flex-col gap-3 w-full
        sm:flex-row sm:flex-wrap sm:justify-center
        mt-4
      '
    >
      <Link className='border p-2' to='/generator'>
        Генерировать QR-код
      </Link>
      <Link className='border p-2' to='/scanner'>
        Сканировать QR-код
      </Link>
      <Link className='border p-2' to='/'>
        История генерирования
      </Link>
      <Link className='border p-2' to='/'>
        История сканирования
      </Link>
    </nav>
  );
};

export default Navigation;
