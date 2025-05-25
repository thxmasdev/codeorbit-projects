import { motion } from 'framer-motion';
import { Target, Eye, Heart } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Misión',
      description: 'Transformar ideas innovadoras en soluciones digitales excepcionales que impulsen el crecimiento de nuestros clientes.',
      color: 'text-primary-500'
    },
    {
      icon: Eye,
      title: 'Visión',
      description: 'Ser la empresa líder en desarrollo web, reconocida por nuestra excelencia técnica y compromiso con la innovación.',
      color: 'text-secondary-500'
    },
    {
      icon: Heart,
      title: 'Valores',
      description: 'Pasión por el código, compromiso con la calidad, transparencia en la comunicación y dedicación al éxito del cliente.',
      color: 'text-accent-500'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
          >
            Sobre{' '}
            <span className="text-gradient">CodeOrbit</span>
          </motion.h2>
          <motion.p
            className="text-xl text-dark-600 dark:text-dark-400 max-w-3xl mx-auto leading-relaxed text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
          >
            Somos un equipo apasionado de desarrolladores y diseñadores que cree en el poder 
            de la tecnología para transformar negocios y crear experiencias digitales extraordinarias.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Values */}
          <motion.div
            className="space-y-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            {values.map(({ icon: Icon, title, description, color }) => (
              <motion.div
                key={title}
                className="flex items-start gap-6"
                variants={itemVariants}
              >
                <Icon className={`w-12 h-12 ${color} flex-shrink-0`} />
                <div className="text-left">
                  <h3 className="text-2xl font-semibold text-dark-900 dark:text-white mb-2">{title}</h3>
                  <p className="text-dark-700 dark:text-dark-300 leading-relaxed">{description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Interactive Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            <div className="relative w-full h-96 glass dark:glass-dark rounded-2xl p-8 overflow-hidden">
              {/* Animated Orbits */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-64 h-64 border-2 border-primary-500/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute w-48 h-48 border-2 border-secondary-500/30 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                  className="absolute w-32 h-32 border-2 border-accent-500/30 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Center Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <div className="text-4xl mb-2">🚀</div>
                    <div className="text-lg font-semibold text-gradient">
                      Innovación
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
