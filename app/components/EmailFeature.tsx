'use client';
import { useRef, useState, FormEvent } from 'react';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

export default function EmailFeature() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [isSent, setIsSent] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    // Type-safe environment variables
    const serviceId = '';
    const templateId = '';
    const publicKey = '';

    // Check if environment variables are defined
    if (!serviceId || !templateId || !publicKey) {
      console.error('Missing EmailJS environment variables');
      alert('Configuration error. Please check environment variables.');
      setIsSending(false);
      return;
    }

    // Check if form ref exists
    if (!formRef.current) {
      console.error('Form reference is null');
      setIsSending(false);
      return;
    }

    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        setIsSent(true);
        formRef.current?.reset();
        setTimeout(() => setIsSent(false), 5000);
      })
      .catch((error: Error) => {
        console.error('FAILED...', error);
        alert('Failed to send. Check console for details.');
      })
      .finally(() => setIsSending(false));
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      {/* Your form fields - with NAME attributes matching template */}
      <input type="text" name="from_name" placeholder="Your Name" required />
      <input type="email" name="from_email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit" disabled={isSending}>
        {isSending ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}
