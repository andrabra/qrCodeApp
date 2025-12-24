import { Link } from 'react-router-dom';

const StyledLink = ({ to, children, className = '', external = false }) => {
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
  `;

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={`${baseStyles} ${className}`}>
      {children}
    </Link>
  );
};

export default StyledLink;