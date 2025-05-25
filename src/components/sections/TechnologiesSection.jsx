import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaGitAlt, FaDocker 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiVite, SiNestjs, 
  SiPrisma, SiMysql, SiJest 
} from 'react-icons/si';

const technologies = {
  frontend: [
    { name: 'React', Icon: FaReact, color: '#61DAFB' },
    { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
    { name: 'Vite', Icon: SiVite, color: '#646CFF' },
  ],
  backend: [
    { name: 'NestJS', Icon: SiNestjs, color: '#E0234E' },
    { name: 'Prisma', Icon: SiPrisma, color: '#2D3748' },
    { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  ],
  tools: [
    { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
    { name: 'Docker', Icon: FaDocker, color: '#2496ED' },
    { name: 'Jest', Icon: SiJest, color: '#C21325' },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="py-20 bg-white dark:bg-dark-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6"
            variants={itemVariants}
          >
            Tecnologías <span className="text-gradient">Que Usamos</span>
          </motion.h2>
          <motion.p
            className="text-xl text-dark-600 dark:text-dark-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Nuestro stack tecnológico para ofrecer soluciones de alta calidad.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(technologies).map(([category, techs]) => (
            <motion.div
              key={category}
              className="text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={containerVariants}
            >
              <motion.h3
                className="text-2xl font-semibold text-dark-900 dark:text-white mb-6"
                variants={itemVariants}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.h3>
              <div className="flex flex-wrap justify-center gap-6">
                {techs.map(({ name, Icon, color }) => (
                  <motion.div
                    key={name}
                    className="w-24 h-24 flex flex-col items-center justify-center"
                    variants={itemVariants}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon style={{ color }} className="w-16 h-16 mb-2" />
                    <span className="text-dark-700 dark:text-dark-300">{name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
