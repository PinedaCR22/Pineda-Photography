// components/contact/ContactForm.tsx
import React, { FormEvent, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { FaCamera } from 'react-icons/fa';

interface ContactFormProps {
  selectedDate: Date | null;
}

interface FormState {
  name: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  message?: string;
  date?: string;
}

const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

// Variants for modal stagger animation
const container: Variants = {
  hidden: { opacity: 0, y: -20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, type: 'spring', stiffness: 200, damping: 20 }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 }
};

const ContactForm: React.FC<ContactFormProps> = ({ selectedDate }) => {
  const [form, setForm] = useState<FormState>({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
    validateField(name as keyof FormState, value);
  };

  const validateField = (field: keyof FormState | 'date', value: any) => {
    setErrors(prev => {
      const errs = { ...prev };
      if (field === 'name') {
        if (!value.trim()) errs.name = 'El nombre es obligatorio.';
        else if (!nameRegex.test(value)) errs.name = 'El nombre no puede contener números.';
        else delete errs.name;
      }
      if (field === 'phone') {
        if (!value.trim()) errs.phone = 'El teléfono es obligatorio.';
        else if (!/^[0-9]+$/.test(value)) errs.phone = 'El teléfono solo puede contener números.';
        else delete errs.phone;
      }
      if (field === 'message') {
        if (!value.trim()) errs.message = 'El mensaje es obligatorio.';
        else delete errs.message;
      }
      if (field === 'date') {
        if (!value) errs.date = 'La fecha es obligatoria.';
        else delete errs.date;
      }
      return errs;
    });
  };

  useEffect(() => {
    validateField('date', selectedDate);
  }, [selectedDate]);

  const validateAll = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'El nombre es obligatorio.';
    else if (!nameRegex.test(form.name)) newErrors.name = 'El nombre no puede contener números.';

    if (!form.phone.trim()) newErrors.phone = 'El teléfono es obligatorio.';
    else if (!/^[0-9]+$/.test(form.phone)) newErrors.phone = 'El teléfono solo puede contener números.';

    if (!form.message.trim()) newErrors.message = 'El mensaje es obligatorio.';

    if (!selectedDate) newErrors.date = 'La fecha es obligatoria.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;

    setIsLoading(true);
    const templateParams = {
      to_email: 'emmapr2233@gmail.com',
      from_name: form.name,
      phone: form.phone,
      date: selectedDate!.toLocaleDateString(),
      message: form.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        templateParams
      )
      .then(() => {
        setIsLoading(false);
        setShowSuccess(true);
        setForm({ name: '', phone: '', message: '' });
        setErrors({});
      })
      .catch(err => {
        console.error('EmailJS Error:', err);
        setIsLoading(false);
        setErrors({ message: 'Error al enviar. Intenta más tarde.' });
      });
  };

  return (
    <>
      <form
        noValidate
        onSubmit={handleSubmit}
        className="w-full border border-gray-300 rounded-lg p-6 shadow-lg bg-white space-y-4"
      >
        {/* Nombre */}
        <div>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="Nombre completo"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Teléfono */}
        <div>
          <input
            name="phone"
            type="text"
            value={form.phone}
            onChange={handleChange}
            placeholder="Número de teléfono"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${
              errors.phone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* Fecha */}
        <div>
          <input
            name="date"
            type="text"
            value={selectedDate ? selectedDate.toLocaleDateString() : ''}
            readOnly
            placeholder="Fecha seleccionada"
            className={`w-full px-3 py-2 border rounded bg-gray-100 text-center ${
              errors.date ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
        </div>

        {/* Mensaje */}
        <div>
          <textarea
            name="message"
            rows={3}
            value={form.message}
            onChange={handleChange}
            placeholder="¿En qué podemos ayudarte?"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${
              errors.message ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition flex justify-center items-center"
          disabled={isLoading}
        >
          {isLoading ? (
            <motion.div
              className="h-5 w-5 border-2 border-t-2 border-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, ease: 'linear', duration: 1 }}
            />
          ) : (
            'Enviar'
          )}
        </button>
      </form>

      {/* Modal con fondo difuminado y semitransparente */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl"
            >
              <motion.div variants={item} className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCamera size={32} className="text-white" />
              </motion.div>

              <motion.h3 variants={item} className="text-3xl font-extrabold mb-2">
                ¡Enviado con éxito!
              </motion.h3>

              <motion.p variants={item} className="text-gray-600 mb-6">
                Gracias por agendar tu cita. Te contactaré pronto.
              </motion.p>

              <motion.button
                variants={item}
                onClick={() => setShowSuccess(false)}
                className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg shadow-md transition"
              >
                ¡Genial!
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;
