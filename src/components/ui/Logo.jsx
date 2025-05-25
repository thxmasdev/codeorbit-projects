import { motion } from 'framer-motion';

const Logo = ({ size = 'md', showText = true, className = '' }) => {
  const sizes = {
    sm: { icon: 40, text: 'text-lg' },
    md: { icon: 60, text: 'text-2xl' },
    lg: { icon: 80, text: 'text-3xl' },
    xl: { icon: 100, text: 'text-4xl' },
  };

  const { icon: iconSize, text: textSize } = sizes[size];

  return (
    <motion.div 
      className={`flex items-center gap-3 ${className}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo Icon */}
      <div className="relative" style={{ width: iconSize, height: iconSize }}>
        {/* Orbitas */}
        <motion.div
          className="absolute inset-0 border-2 border-primary-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute border-2 border-secondary-500 rounded-full"
          style={{
            width: iconSize * 0.75,
            height: iconSize * 0.75,
            top: iconSize * 0.125,
            left: iconSize * 0.125,
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute border-2 border-accent-500 rounded-full"
          style={{
            width: iconSize * 0.5,
            height: iconSize * 0.5,
            top: iconSize * 0.25,
            left: iconSize * 0.25,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />

        {/* Centro pulsante */}
        <motion.div
          className="absolute bg-gradient-primary rounded-full"
          style={{
            width: iconSize * 0.2,
            height: iconSize * 0.2,
            top: iconSize * 0.4,
            left: iconSize * 0.4,
          }}
          animate={{ 
            scale: [1, 1.3, 1],
            boxShadow: [
              "0 0 10px rgba(124, 58, 237, 0.5)",
              "0 0 20px rgba(124, 58, 237, 0.8)",
              "0 0 10px rgba(124, 58, 237, 0.5)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Puntos orbitales */}
        <motion.div
          className="absolute w-2 h-2 bg-primary-500 rounded-full shadow-glow-purple"
          style={{
            top: -4,
            left: iconSize * 0.46,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          transformOrigin={`4px ${iconSize/2 + 4}px`}
        />
        <motion.div
          className="absolute w-2 h-2 bg-secondary-500 rounded-full shadow-glow-cyan"
          style={{
            top: iconSize * 0.125 - 4,
            left: iconSize * 0.46,
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          transformOrigin={`4px ${iconSize*0.375 + 4}px`}
        />
        <motion.div
          className="absolute w-2 h-2 bg-accent-500 rounded-full shadow-glow-green"
          style={{
            top: iconSize * 0.25 - 4,
            left: iconSize * 0.46,
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          transformOrigin={`4px ${iconSize*0.25 + 4}px`}
        />
      </div>

      {/* Texto del logo */}
      {showText && (
        <div className="flex flex-col">
          <motion.h1 
            className={`${textSize} font-bold text-gradient leading-tight`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            CodeOrbit
          </motion.h1>
          <motion.span 
            className={`${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : 'text-lg'} text-dark-600 dark:text-dark-400 font-medium -mt-1`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Projects
          </motion.span>
        </div>
      )}
    </motion.div>
  );
};

export default Logo;