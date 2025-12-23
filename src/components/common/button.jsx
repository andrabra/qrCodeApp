const Button = ({children, onClick, type = 'button'}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className='border rounded-sm p-2 cursor-pointer hover:gray-600 focus:ring-1 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none'
    >
      {children}
    </button>
  );
};

export default Button;
