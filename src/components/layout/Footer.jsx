import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Heart } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import { useTheme } from '../../context/ThemeContext';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { isDark } = useTheme();

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:info@codeorbit.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Nosotros', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Equipo', href: '#team' },
  ];

  const services = [
    'Desarrollo Web',
    'Aplicaciones Móviles',
    'E-commerce',
    'Landing Pages',
    'APIs & Backend',
    'Consultoría Tech',
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`${isDark ? 'bg-dark-900 text-white' : 'bg-white text-gray-700'} relative overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Gradient Overlay */}
      <div className={`${isDark ? 'bg-gradient-to-br from-primary-900/20 via-transparent to-secondary-900/20' : 'bg-gradient-to-br from-primary-200/20 via-transparent to-secondary-200/20'} absolute inset-0`} />

      <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-16 max-w-full">
        {/* Main Footer Content */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Logo size="md" orbOnly className="mb-6" />
            <p className={`${isDark ? 'text-dark-400' : 'text-gray-500'} mb-6 leading-relaxed`}>
              Transformamos ideas en experiencias digitales excepcionales. 
              Especialistas en desarrollo web moderno y soluciones tecnológicas innovadoras.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className={`${isDark ? 'text-dark-400' : 'text-gray-500'} flex items-center gap-3`}>
                <Mail className={`${isDark ? 'text-primary-400' : 'text-primary-600'} w-4 h-4`} />
                <span>codeorbit@hotmail.com</span>
              </div>
              <div className={`${isDark ? 'text-dark-400' : 'text-gray-500'} flex items-center gap-3`}>
                <Phone className={`${isDark ? 'text-primary-400' : 'text-primary-600'} w-4 h-4`} />
                <span>+54 9 3853056357</span>
              </div>
              <div className={`${isDark ? 'text-dark-400' : 'text-gray-500'} flex items-center gap-3`}>
                <MapPin className={`${isDark ? 'text-primary-400' : 'text-primary-600'} w-4 h-4`} />
                <span>Argentina</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className={`${isDark ? 'text-gradient' : 'text-primary-600'} text-lg font-semibold mb-6`}>
              Enlaces Rápidos
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    className={`${isDark ? 'text-dark-400 hover:text-primary-400' : 'text-gray-600 hover:text-primary-700'} transition-colors duration-300 text-left`}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className={`${isDark ? 'text-gradient' : 'text-primary-600'} text-lg font-semibold mb-6`}>
              Servicios
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <motion.span
                    className={`${isDark ? 'text-dark-400 hover:text-primary-400' : 'text-gray-600 hover:text-primary-700'} transition-colors duration-300 cursor-pointer`}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service}
                  </motion.span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className={`${isDark ? 'text-gradient' : 'text-primary-600'} text-lg font-semibold mb-6`}>
              Mantente Conectado
            </h3>
            <p className={`${isDark ? 'text-dark-400' : 'text-gray-500'} mb-4`}>
              Suscríbete para recibir las últimas noticias y actualizaciones.
            </p>

            {/* Newsletter Form */}
            <div className="flex flex-col sm:flex-row gap-2 mb-6">
              <input
                type="email"
                placeholder="Tu email"
                className={`${isDark ? 'bg-dark-800 border-dark-700 text-white placeholder-dark-400 focus:ring-primary-500' : 'bg-white border-gray-300 text-gray-700 placeholder-gray-400 focus:ring-primary-600'} flex-1 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent`}
              />
              <Button variant="primary" size="sm">
                Suscribir
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${isDark ? 'bg-dark-800 hover:bg-primary-600' : 'bg-gray-100 hover:bg-primary-600'} w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                >
                  <social.icon className={`${isDark ? 'text-white' : 'text-primary-600'} w-5 h-5`} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className={`${isDark ? 'border-dark-700' : 'border-gray-300'} border-t pt-8`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className={`${isDark ? 'text-dark-400' : 'text-gray-600'} flex items-center gap-2`}>
              © 2024 CodeOrbit Projects. Hecho con 
              <Heart className="w-4 h-4 text-red-500 animate-pulse" /> 
              y mucho código.
            </p>

          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <motion.div
        className={`${isDark ? 'border-primary-500/20' : 'border-primary-200/20'} absolute top-10 right-10 w-32 h-32 border rounded-full`}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className={`${isDark ? 'border-secondary-500/20' : 'border-secondary-200/20'} absolute bottom-10 left-10 w-24 h-24 border rounded-full`}
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </footer>
  );
};

export default Footer;
