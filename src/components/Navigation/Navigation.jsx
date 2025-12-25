import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const baseStyles = `
    p-3
    text-center
    transition-all duration-200 ease-in-out
    rounded-lg
    font-medium
    border-2
  `;

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

  const activeStyles = `
    border-blue-500
    bg-blue-500
    text-white
    shadow-lg
    ring-2 ring-blue-200
  `;

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { to: '/generator', label: 'Генерировать QR-код' },
    { to: '/scanner', label: 'Сканировать QR-код' },
    { to: '/generate-history', label: 'История генерирования' },
    { to: '/scan-history', label: 'История сканирования' },
  ];

  return (
    <>
      <button
        type='button'
        className='cursor-pointer p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors'
        onClick={() => setMobileMenuOpen(true)}
      >
        <Bars3Icon className='h-6 w-6 text-gray-700' />
        <span className='sr-only'>Открыть меню</span>
      </button>

      <Dialog
        as='div'
        className='relative z-10'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        {/* Затемнение фона */}
        <div className='fixed inset-0 bg-black/30' />

        {/* Панель меню */}
        <div className='fixed inset-y-0 right-0 w-full max-w-sm pl-10'>
          <Dialog.Panel className='h-full bg-white p-6 shadow-xl'>
            <div className='flex items-center justify-between mb-8'>
              <Dialog.Title className='text-lg font-semibold'>
                Навигация
              </Dialog.Title>
              <button
                type='button'
                className='cursor-pointer p-2 rounded-lg hover:bg-gray-100'
                onClick={() => setMobileMenuOpen(false)}
              >
                <XMarkIcon className='h-6 w-6 text-gray-700' />
                <span className='sr-only'>Закрыть меню</span>
              </button>
            </div>

            <div className='flex flex-col gap-3'>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`${baseStyles} ${
                    isActive(link.to) ? activeStyles : inactiveStyles
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default Navigation;
