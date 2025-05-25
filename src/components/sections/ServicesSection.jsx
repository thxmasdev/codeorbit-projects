import { motion } from 'framer-motion';

const services = [
  {
    title: 'Desarrollo Web',
    description: 'Creación de sitios web modernos, responsivos y optimizados para SEO.',
    icon: '🌐',
  },
  {
    title: 'Aplicaciones Móviles',
    description: 'Desarrollo de apps nativas y multiplataforma para iOS y Android.',
    icon: '📱',
  },
  {
    title: 'Diseño UI/UX',
    description: 'Diseño de interfaces atractivas y experiencias de usuario intuitivas.',
    icon: '🎨',
  },
  {
    title: 'E-commerce',
    description: 'Soluciones completas para tiendas en línea con pasarelas de pago seguras.',
    icon: '🛒',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-dark-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
            Servicios <span className="text-gradient">Ofrecidos</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-400 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo podemos ayudarte a llevar tu negocio al siguiente nivel con nuestras soluciones digitales.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="glass dark:glass-dark p-6 rounded-xl text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-dark-600 dark:text-dark-400">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
