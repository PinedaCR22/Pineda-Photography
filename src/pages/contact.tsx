import React, { useState } from 'react';
import { motion } from 'framer-motion';

import ContactForm from '../components/contact/ContactForm';
import ContactMethods from '../components/contact/ContactMethods';
import { Calendar } from '../components/contact/Calendar';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 }
  })
};

const Contact: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="relative w-full min-h-screen bg-gray-100 pt-36 pb-28">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
        {/* Card 1: Calendario */}
        <motion.div
          custom={0}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            ¡Seleccione el día
            <span className="block">para agendar su servicio!</span>
          </h2>
          <Calendar
            selectedDate={selectedDate}
            onDateConfirm={setSelectedDate}
          />
        </motion.div>

        {/* Card 2: Formulario */}
        <motion.div
          custom={1}
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            ¡Complete el formulario
            <span className="block">para agendar su servicio!</span>
          </h2>
          <ContactForm selectedDate={selectedDate} />
        </motion.div>
      </div>

      {/* Card 3: Métodos de contacto */}
      +  <motion.div
    custom={2}
    variants={cardVariants}
    initial="hidden"
    animate="visible"
    className="mt-12 flex justify-center px-4 md:px-8"
  >
    <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg w-full max-w-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-center">
            ¡También nos pueden contactar directamente
            <span className="block">por los siguientes medios!</span>
          </h2>
          <ContactMethods />
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
