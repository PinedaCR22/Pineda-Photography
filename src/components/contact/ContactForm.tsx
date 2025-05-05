// components/contact/ContactForm.tsx
import React, { FormEvent, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCamera } from 'react-icons/fa';

interface ContactFormProps {
  selectedDate: Date | null;
}

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  date?: string;
}

const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

const ContactForm: React.FC<ContactFormProps> = ({ selectedDate }) => {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Validación inmediata al escribir
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));

    // Validar solo ese campo
    validateField(name as keyof FormState, value);
  };

  // Validación de campo individual
  const validateField = (field: keyof FormState | 'date', value: any) => {
    setErrors(prev => {
      const errs = { ...prev };
      if (field === 'name') {
        if (!value.trim()) errs.name = 'El nombre es obligatorio.';
        else if (!nameRegex.test(value)) errs.name = 'El nombre no puede contener números.';
        else delete errs.name;
      }
      if (field === 'email') {
        if (!value.trim()) errs.email = 'El correo es obligatorio.';
        else if (!value.includes('@')) errs.email = 'El correo debe incluir “@”.';
        else delete errs.email;
      }
      if (field === 'message') {
        if (!value.trim()) errs.message = 'El mensaje es obligatorio.';
        else delete errs.message;
      }
      if (field === 'date') {
        if (!value) errs.date = 'La fecha es obligatoria, seleccione la fecha en el calendario.';
        else delete errs.date;
      }
      return errs;
    });
  };

  // Cada vez que cambie la fecha, validamos ese campo
  useEffect(() => {
    validateField('date', selectedDate);
  }, [selectedDate]);

  // Validar todo antes de enviar
  const validateAll = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = 'El nombre es obligatorio.';
    else if (!nameRegex.test(form.name)) newErrors.name = 'El nombre no puede contener números.';

    if (!form.email.trim()) newErrors.email = 'El correo es obligatorio.';
    else if (!form.email.includes('@')) newErrors.email = 'El correo debe incluir “@”.';

    if (!form.message.trim()) newErrors.message = 'El mensaje es obligatorio.';

    if (!selectedDate) newErrors.date = 'La fecha es obligatoria.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateAll()) return;

    const templateParams = {
      to_email: 'emmapr2233@gmail.com',
      from_name: form.name,
      reply_to: form.email,
      date: selectedDate!.toLocaleDateString(),
      message: form.message
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        import.meta.env.VITE_EMAILJS_USER_ID as string
      )
      .then(() => {
        setShowSuccess(true);
        setForm({ name: '', email: '', message: '' });
        setErrors({});
      })
      .catch(err => {
        console.error(err);
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

        {/* Email */}
        <div>
          <input
            name="email"
            type="text"
            value={form.email}
            onChange={handleChange}
            placeholder="Correo electrónico"
            className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
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
          className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          Enviar
        </button>
      </form>

      {/* Modal con fondo borroso */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 max-w-sm w-full text-center shadow-lg"
              initial={{ scale: 0.8, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <FaCamera size={48} className="mx-auto text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold mb-2">¡Enviado con éxito!</h3>
              <p className="text-gray-700 mb-6">
                Gracias por agendar tu cita. Te contactaré pronto.
              </p>
              <button
                onClick={() => setShowSuccess(false)}
                className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
              >
                ¡Genial!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;
