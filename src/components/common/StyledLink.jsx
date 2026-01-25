import { Link } from 'react-router-dom';
import { CopyToClipboardButton } from '../common/CopyToClipboardButton';

const StyledLink = ({
  withCopyBtn = false,
  to,
  children,
  className = '',
  external = false,
}) => {
  const baseStyles = `
    text-blue-600
    hover:text-blue-800
    dark:text-blue-400
    dark:hover:text-blue-300
    transition-colors duration-200 ease-in-out
    font-medium
    underline
    decoration-blue-300/30
    hover:decoration-blue-500/70
    decoration-2
    underline-offset-4
    text-ellipsis
    max-w-60
    sm:max-w-80
    md:max-w-96
    lg:max-w-full
    overflow-hidden
  `;

  if (external) {
    return (
      <div className='flex justify-center items-center sm:justify-start gap-2'>
        <a
          href={to}
          target='_blank'
          rel='noopener noreferrer'
          className={`${baseStyles} ${className}`}
        >
          {children}
        </a>
        {withCopyBtn ? (
          <CopyToClipboardButton text={children}></CopyToClipboardButton>
        ) : null}
      </div>
    );
  }

  return (
    <div className='flex justify-center items-center sm:justify-start gap-2'>
      <Link to={to} className={`${baseStyles} ${className}`}>
        {children}
      </Link>
      {withCopyBtn ? (
        <CopyToClipboardButton text={children}></CopyToClipboardButton>
      ) : null}
    </div>
  );
};

export default StyledLink;
