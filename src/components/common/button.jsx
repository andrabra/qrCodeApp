const Button = ({ 
  children, 
  onClick, 
  type = 'button',
  variant = 'primary', // primary, secondary, danger, success
  size = 'medium', // small, medium, large
  disabled = false,
  fullWidth = false,
  className = ''
}) => {
  
  // Базовые стили
  const baseStyles = `
    cursor-pointer
    font-medium
    transition-all duration-200 ease-in-out
    rounded-lg
    focus:outline-none
    focus:ring-2 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    ${fullWidth ? 'w-full' : ''}
  `;
  
  // Размеры
  const sizes = {
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2.5 text-sm',
    large: 'px-6 py-3 text-base'
  };
  
  // Варианты цветов
  const variants = {
    primary: `
      bg-blue-500
      text-white
      border border-blue-500
      hover:bg-blue-600
      hover:border-blue-600
      hover:shadow-md
      hover:-translate-y-0.5
      active:bg-blue-700
      active:scale-95
      focus:ring-blue-500
    `,
    secondary: `
      bg-gray-100
      text-gray-700
      border border-gray-300
      hover:bg-gray-200
      hover:border-gray-400
      hover:text-gray-900
      hover:shadow-md
      hover:-translate-y-0.5
      active:bg-gray-300
      active:scale-95
      focus:ring-gray-500
    `,
    danger: `
      bg-red-500
      text-white
      border border-red-500
      hover:bg-red-600
      hover:border-red-600
      hover:shadow-md
      hover:-translate-y-0.5
      active:bg-red-700
      active:scale-95
      focus:ring-red-500
    `,
    success: `
      bg-green-500
      text-white
      border border-green-500
      hover:bg-green-600
      hover:border-green-600
      hover:shadow-md
      hover:-translate-y-0.5
      active:bg-green-700
      active:scale-95
      focus:ring-green-500
    `,
    outline: `
      bg-transparent
      text-blue-500
      border-2 border-blue-500
      hover:bg-blue-50
      hover:text-blue-700
      hover:border-blue-600
      hover:shadow-md
      hover:-translate-y-0.5
      active:bg-blue-100
      active:scale-95
      focus:ring-blue-500
    `
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${sizes[size]}
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;