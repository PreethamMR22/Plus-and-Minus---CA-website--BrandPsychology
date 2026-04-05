import { Link } from 'react-router-dom';
import './Card.css';

const Card = ({ 
  icon, 
  title, 
  description, 
  features = [], 
  linkText, 
  linkTo, 
  onClick,
  className = '',
  children 
}) => {
  const cardContent = (
    <div className={`card ${className}`}>
      {icon && <div className="card-icon">{icon}</div>}
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {features.length > 0 && (
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      )}
      {linkText && (linkTo || onClick) && (
        <div className="card-link" onClick={onClick}>
          {linkText} →
        </div>
      )}
      {children}
    </div>
  );

  if (linkTo) {
    return <Link to={linkTo}>{cardContent}</Link>;
  }

  return cardContent;
};

export default Card;
