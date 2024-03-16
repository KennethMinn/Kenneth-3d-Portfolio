import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import Swal from 'sweetalert2';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // template_1u7zbkk
  // service_0r9g8ug
  // AAH-BHDCEH61tD2t0

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_22oq2p9',
        'template_1u7zbkk',
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          to_email: 'minthukha2472005@gmail.com',
          message: form.message,
        },
        'AAH-BHDCEH61tD2t0'
      )
      .then(
        () => {
          setLoading(false);
          const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: toast => {
              toast.addEventListener('mouseenter', Swal.stopTimer);
              toast.addEventListener('mouseleave', Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: 'success',
            title: 'Email has been sent',
          });

          setForm({
            name: '',
            email: '',
            subject: '',
            message: '',
          });
        },
        error => {
          setLoading(false);
          console.error(error);

          alert('Ahh, something went wrong. Please try again.');
        }
      );
  };

  return (
    <div
      className={`${styles.paddingX} xl:mt-12 flex xl:flex-row  flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 mt-12"
        >
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Subject</span>
            <input
              type="text"
              name="subject"
              required
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject?"
              className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-white">Your Message</span>
            <textarea
              rows={7}
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="px-6 py-4 font-medium text-white border-none rounded-lg outline-none bg-tertiary placeholder:text-secondary"
            />
          </label>

          <button
            type="submit"
            className="px-8 py-3 font-bold text-white shadow-md outline-none bg-tertiary rounded-xl w-fit shadow-primary"
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px] cursor-pointer"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
