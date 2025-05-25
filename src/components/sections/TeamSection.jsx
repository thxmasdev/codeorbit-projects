import { motion } from 'framer-motion';
import Slider from 'react-slick';
import { FaUserTie, FaReact, FaDocker, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiVite, SiNestjs, SiPrisma, SiMysql } from 'react-icons/si';
import Card, { CardTitle } from '../ui/Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TeamSection = () => {
  const team = [
    {
      name: 'Juan Pérez',
      languages: [
        { name: 'React', Icon: FaReact, color: '#61DAFB' },
        { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Vite', Icon: SiVite, color: '#646CFF' }
      ],
    },
    {
      name: 'Ana García',
      languages: [
        { name: 'NestJS', Icon: SiNestjs, color: '#E0234E' },
        { name: 'Prisma', Icon: SiPrisma, color: '#2D3748' },
        { name: 'MySQL', Icon: SiMysql, color: '#4479A1' }
      ],
    },
    {
      name: 'Carlos Rodríguez',
      languages: [
        { name: 'React', Icon: FaReact, color: '#61DAFB' },
        { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
        { name: 'Docker', Icon: FaDocker, color: '#2496ED' }
      ],
    }
  ];

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

  return (
    <section id="team" className="py-20 bg-white dark:bg-dark-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
            Equipo de <span className="text-gradient">Desarrollo</span>
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-400 max-w-3xl mx-auto">
            Conoce a los expertos detrás de nuestras soluciones digitales
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="max-w-7xl mx-auto"
        >
          <Slider {...settings}>
            {team.map((member, index) => (
              <div key={index} className="px-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card variant="glass" className="text-center p-8 rounded-xl">
                    <div className="mb-6 flex justify-center">
                      <FaUserTie className="w-24 h-24 text-primary-500" />
                    </div>
                    <CardTitle className="mb-2">{member.name}</CardTitle>
                    <div className="flex justify-center gap-4 mt-4">
                      {member.languages.map((lang, i) => (
                        <lang.Icon 
                          key={i} 
                          className="w-8 h-8" 
                          style={{ color: lang.color }}
                          title={lang.name}
                        />
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
