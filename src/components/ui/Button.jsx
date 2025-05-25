import { motion } from 'framer-motion';
import { forwardRef } from 'react';

const Button = forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  loading = false,
  icon = null,
  onClick,
  ...props 
}, ref) => {
  const variants = {
    primary: 'bg-gradient-primary text-white shadow-glow-purple hover:shadow-glow-purple/50',
    secondary: 'bg-secondary-500 hover:bg-secondary-600 text-white shadow-glow-cyan hover:shadow-glow-cyan/50',
    accent: 'bg-accent-500 hover:bg-accent-600 text-white shadow-glow-green hover:shadow-glow-green/50',
    outline: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white dark:border-primary-400 dark:text-primary-400',
    ghost: 'text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950 dark:text-primary-400',
    glass: 'glass text-white hover:bg-white/20',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  };

  const baseClasses = `
    inline-flex items-center justify-center gap-2 font-medium rounded-lg
    transition-all duration-300 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
    dark:focus:ring-offset-dark-800
    disabled:opacity-50 disabled:cursor-not-allowed
    relative overflow-hidden
  `;

  return (
    <motion.button
      ref={ref}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {loading && (
        <div className="loading-spinner w-4 h-4" />
      )}
      {icon && !loading && (
        <span className="w-5 h-5">
          {icon}
        </span>
      )}
      {children}
      
      {/* Hover effect overlay */}
      <motion.div
        className="absolute inset-0 bg-white/10 opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;