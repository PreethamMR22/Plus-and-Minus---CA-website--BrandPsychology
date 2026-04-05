import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  to, 
  onClick, 
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClass = `btn ${variant} ${size} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={baseClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button 
      type={type} 
      className={baseClass} 
      onClick={onClick} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
