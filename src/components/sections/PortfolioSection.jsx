import { useState } from 'react';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FaRegFileImage } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiVite, SiReactos, SiExpo, SiFirebase, SiNextdotjs, SiNodedotjs, SiMongodb, SiShopify, SiGraphql } from 'react-icons/si';
import Card from '../ui/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    id: 1,
    title: 'Sitio Web para un club de Deportes',
    description: 'Desarrollo de un sitio web para un club de rugby/hockey.',
    image: 'https://i.imgur.com/zDxSg99.png',
    technologies: ['React', 'Tailwind CSS', 'Vite'],
    url: 'https://clubdeportes.example.com',
  },
  {
    id: 2,
    title: 'App Móvil de Comercio',
    description: 'Aplicación móvil para comercio electrónico con integración de pagos y notificaciones.',
    image: '/projects/mobile-commerce.jpg',
    technologies: ['React Native', 'Expo', 'Firebase'],
    url: 'https://mobilecommerce.example.com',
  },
  {
    id: 3,
    title: 'Plataforma de Educación',
    description: 'Plataforma web para cursos en línea con sistema de gestión de usuarios y contenido.',
    image: '/projects/education-platform.jpg',
    technologies: ['Next.js', 'Node.js', 'MongoDB'],
    url: 'https://educationplatform.example.com',
  },
  {
    id: 4,
    title: 'Tienda en Línea',
    description: 'E-commerce completo con carrito de compras, pasarela de pago y panel administrativo.',
    image: '/projects/online-store.jpg',
    technologies: ['Shopify', 'Liquid', 'GraphQL'],
    url: 'https://onlinestore.example.com',
  },
];

const techIconMap = {
  'React': <SiReact className="w-5 h-5" title="React" />,
  'Tailwind CSS': <SiTailwindcss className="w-5 h-5" title="Tailwind CSS" />,
  'Vite': <SiVite className="w-5 h-5" title="Vite" />,
  'React Native': <SiReactos className="w-5 h-5" title="React Native" />,
  'Expo': <SiExpo className="w-5 h-5" title="Expo" />,
  'Firebase': <SiFirebase className="w-5 h-5" title="Firebase" />,
  'Next.js': <SiNextdotjs className="w-5 h-5" title="Next.js" />,
  'Node.js': <SiNodedotjs className="w-5 h-5" title="Node.js" />,
  'MongoDB': <SiMongodb className="w-5 h-5" title="MongoDB" />,
  'Shopify': <SiShopify className="w-5 h-5" title="Shopify" />,
  'GraphQL': <SiGraphql className="w-5 h-5" title="GraphQL" />,
  'Liquid': <FaRegFileImage className="w-5 h-5" title="Liquid" />,
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }
  ]
};

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

const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-900 overflow-hidden">
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
            Proyectos <span className="text-gradient">Destacados</span>
          </motion.h2>
          <motion.p
            className="text-xl text-dark-600 dark:text-dark-400 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Algunos de nuestros proyectos más recientes y exitosos.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={containerVariants}
        >
          <Slider {...settings}>
            {projects.map(({ id, title, description, image, technologies, url }) => (
              <motion.div key={id} variants={itemVariants} className="px-4">
                <Card className="cursor-pointer p-0 overflow-hidden" onClick={() => setSelectedProject(id)}>
                  {image ? (
                    <img src={image} alt={title} className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
                  ) : (
                    <div className="w-full h-48 flex items-center justify-center bg-gray-200 dark:bg-gray-700">
                      <FaRegFileImage className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">{title}</h3>
                    <p className="text-dark-600 dark:text-dark-400 mb-2">{description}</p>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <span key={tech} className="flex items-center gap-1 text-sm text-primary-500 bg-primary-100 dark:bg-primary-900 rounded-full px-2 py-1">
                          {techIconMap[tech] || <FaRegFileImage className="w-5 h-5" />}
                          {tech}
                        </span>
                      ))}
                    </div>
                    {url && (
                      <div className="mt-4">
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 bg-primary-500 text-white rounded hover:bg-primary-600 transition"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Ver sitio
                        </a>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </Slider>
        </motion.div>

        {/* Modal for project details */}
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-dark-800 rounded-lg max-w-3xl w-full p-6 relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-dark-600 dark:text-dark-300 hover:text-primary-500"
                onClick={() => setSelectedProject(null)}
              >
                ✕
              </button>
              <h3 className="text-2xl font-bold mb-4 text-dark-900 dark:text-white">
                {projects.find((p) => p.id === selectedProject)?.title}
              </h3>
              {projects.find((p) => p.id === selectedProject)?.image ? (
                <img
                  src={projects.find((p) => p.id === selectedProject)?.image}
                  alt={projects.find((p) => p.id === selectedProject)?.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
              ) : (
                <div className="w-full h-64 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded mb-4">
                  <FaRegFileImage className="w-16 h-16 text-gray-400" />
                </div>
              )}
              <p className="text-dark-600 dark:text-dark-400 mb-4">
                {projects.find((p) => p.id === selectedProject)?.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {projects.find((p) => p.id === selectedProject)?.technologies.map((tech) => (
                  <span key={tech} className="flex items-center gap-1 text-sm text-primary-500 bg-primary-100 dark:bg-primary-900 rounded-full px-2 py-1">
                    {techIconMap[tech] || <FaRegFileImage className="w-5 h-5" />}
                    {tech}
                  </span>
                ))}
              </div>
              {projects.find((p) => p.id === selectedProject)?.url && (
                <div className="mt-6">
                  <a
                    href={projects.find((p) => p.id === selectedProject)?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-primary-500 text-white rounded hover:bg-primary-600 transition"
                  >
                    Visitar sitio
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
