import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactSection = () => {
  const [state, handleSubmit] = useForm('mnndkpan');
  const formRef = React.useRef(null);

  React.useEffect(() => {
    if (state.succeeded) {
      toast.success('Mensaje enviado con éxito!');
      if (formRef.current) {
        formRef.current.reset();
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (state.errors && state.errors.length > 0) {
      toast.error(state.errors[0].message || 'Error al enviar el mensaje.');
    }
  }, [state]);

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-900 overflow-hidden">
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
            Contacto
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-400 max-w-3xl mx-auto leading-relaxed">
            Ponte en contacto con nosotros para comenzar tu proyecto digital.
          </p>
        </motion.div>

        {state.succeeded ? (
          <p className="text-center text-green-600 dark:text-green-400 font-semibold">
            Gracias por tu mensaje. Te responderemos pronto.
          </p>
        ) : (
          <form ref={formRef} onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6" noValidate>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-dark-900 dark:text-white mb-1">
                Asunto
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-800 dark:text-white"
              />
              <ValidationError prefix="Asunto" field="subject" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark-900 dark:text-white mb-1">
                Nombre
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-800 dark:text-white"
              />
              <ValidationError prefix="Nombre" field="name" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark-900 dark:text-white mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-800 dark:text-white"
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark-900 dark:text-white mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full rounded-md border border-gray-300 dark:border-gray-700 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-dark-800 dark:text-white"
              />
              <ValidationError prefix="Mensaje" field="message" errors={state.errors} />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-md w-full disabled:opacity-50"
            >
              {state.submitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
