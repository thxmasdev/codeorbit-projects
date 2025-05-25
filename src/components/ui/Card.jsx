import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Card = forwardRef(({ 
  children, 
  variant = 'default',
  hover = true,
  className = '',
  ...props 
}, ref) => {
  const variants = {
    default: 'bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700',
    glass: 'glass dark:glass-dark',
    gradient: 'bg-gradient-primary text-white',
    elevated: 'bg-white dark:bg-dark-800 shadow-xl border border-dark-200 dark:border-dark-700',
  };

  const baseClasses = `
    rounded-xl transition-all duration-300 ease-in-out
    ${hover ? 'hover:shadow-lg hover:-translate-y-1' : ''}
  `;

  const hoverAnimation = hover ? {
    whileHover: { 
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    },
    transition: { duration: 0.3 }
  } : {};

  return (
    <motion.div
      ref={ref}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...hoverAnimation}
      {...props}
    >
      {children}
    </motion.div>
  );
});

Card.displayName = 'Card';

// Sub-componentes para estructura de card
export const CardHeader = ({ children, className = '' }) => (
  <div className={`p-6 pb-3 ${className}`}>
    {children}
  </div>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`p-6 pt-3 ${className}`}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '' }) => (
  <div className={`p-6 pt-3 border-t border-dark-200 dark:border-dark-700 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-xl font-semibold text-dark-900 dark:text-white ${className}`}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '' }) => (
  <p className={`text-dark-600 dark:text-dark-400 mt-2 ${className}`}>
    {children}
  </p>
);

export default Card;