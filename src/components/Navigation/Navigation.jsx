import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  
  // Базовая стилизация для всех кнопок
  const baseStyles = `
    p-3
    text-center
    transition-all duration-200 ease-in-out
    rounded-lg
    font-medium
    border-2
  `;
  
  // Стили для неактивных кнопок
  const inactiveStyles = `
    border-gray-300
    bg-white
    text-gray-700
    hover:bg-blue-50
    hover:border-blue-400
    hover:text-blue-700
    hover:shadow-md
    hover:-translate-y-0.5
    active:scale-95
  `;
  
  // Стили для активной кнопки
  const activeStyles = `
    border-blue-500
    bg-blue-500
    text-white
    shadow-lg
    ring-2 ring-blue-200
  `;
  
  // Функция для проверки активного пути
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav
      className='
        flex flex-col gap-3 w-full
        sm:flex-row sm:flex-wrap sm:justify-center
        mt-4
      '
    >
      <Link 
        to='/generator'
        className={`${baseStyles} ${isActive('/generator') ? activeStyles : inactiveStyles}`}
      >
        Генерировать QR-код
      </Link>
      <Link 
        to='/scanner'
        className={`${baseStyles} ${isActive('/scanner') ? activeStyles : inactiveStyles}`}
      >
        Сканировать QR-код
      </Link>
      <Link 
        to='/generate-history'
        className={`${baseStyles} ${isActive('/generate-history') ? activeStyles : inactiveStyles}`}
      >
        История генерирования
      </Link>
      <Link 
        to='/scan-history'
        className={`${baseStyles} ${isActive('/scan-history') ? activeStyles : inactiveStyles}`}
      >
        История сканирования
      </Link>
    </nav>
  );
};

export default Navigation;