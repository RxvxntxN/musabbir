'use client';
import { MdEmail } from 'react-icons/md';
import { BsPhone } from 'react-icons/bs';
import { FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import { Toaster } from '../../components/ui/sonner';
import { toast } from 'sonner';
import { Copy } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';

const ContactPage = () => {
  const contactInfo = {
    email: 'musabbir666@gmail.com',
    linkedin: 'https://www.linkedin.com/in/muhammad-musabbir/',
    phone: '+8801918166104',
  };

  // Helper function to show the toast notification
  const showToast = (type: string, text: string) => {
    toast.success(
      <div>
        <div className="text-teal-400 font-bold">{type} copied to clipboard!</div>
        <div className="text-gray-300 text-sm mt-1">{text}</div>
      </div>,
      {
        position: 'bottom-right',
      }
    );
  };

  // The updated copyToClipboard function with fallback
  const copyToClipboard = (text: string, type: string) => {
    // 1. Check if the modern Clipboard API is available
    if (navigator.clipboard && window.isSecureContext) {
      // Use the modern API
      navigator.clipboard
        .writeText(text)
        .then(() => {
          showToast(type, text);
        })
        .catch((err) => {
          console.error('Failed to copy text: ', err);
        });
    } else {
      // 2. Fallback for older browsers or non-secure contexts
      const textArea = document.createElement('textarea');
      textArea.value = text;
      // Make the textarea out of viewport
      textArea.style.position = 'fixed';
      textArea.style.left = '-999999px';
      textArea.style.top = '-999999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        // Execute the copy command
        const successful = document.execCommand('copy');
        if (successful) {
          showToast(type, text);
        } else {
          console.error('Fallback: Unable to copy text');
        }
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }
      // Remove the textarea from the DOM
      document.body.removeChild(textArea);
    }
  };

  return (
    <>
      <Toaster />

      <div
        id="contact"
        className="bg-white flex items-center justify-center py-12 dark:bg-stone-900"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <div>
            <h1 className="text-5xl font-extrabold mb-4 text-center">
              <span className="text-gray-700 dark:text-gray-300">Contact</span>{' '}
              <span className="text-teal-400">Me</span>
            </h1>
          </div>
          <p className="text-lg leading-relaxed text-center mb-6 text-gray-700 dark:text-gray-300 max-w-xl">
            Feel free to reach out. I&apos;m always excited to connect and discuss new
            opportunities.
          </p>

          <div className="flex flex-col space-y-6 w-full max-w-md">
            <div className="flex items-center space-x-4 dark:bg-stone-800 shadow-lg p-3 rounded-lg">
              <MdEmail className="text-red-400 text-3xl" />
              <div className="grow">
                <p className="text-sm text-gray-700 dark:text-gray-300">Email</p>
                <p className="font-semibold text-gray-700 dark:text-gray-200">
                  {contactInfo.email}
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(contactInfo.email, 'Email')}
                className="text-cyan-600 font-bold hover:text-cyan-400 transition-colors px-3 py-1 rounded-md"
              >
                <Copy className="w-5 h-5" strokeWidth={2} />
              </button>
            </div>

            <div className="flex items-center space-x-4 dark:bg-stone-800 shadow-lg p-3 rounded-lg">
              <BsPhone className="text-green-400 text-3xl" />
              <div className="grow">
                <p className="text-sm text-gray-700 dark:text-gray-300">Phone</p>
                <p className="font-semibold text-gray-700 dark:text-gray-200">
                  {contactInfo.phone}
                </p>
              </div>
              <button
                onClick={() => copyToClipboard(contactInfo.phone, 'Phone')}
                className="text-cyan-600 font-bold hover:text-cyan-400 transition-colors px-3 py-1 rounded-md"
              >
                <Copy className="w-5 h-5" strokeWidth={2} />
              </button>
            </div>

            <div className="flex items-center space-x-4 dark:bg-stone-800 shadow-lg p-3 rounded-lg">
              <FaLinkedin className="text-blue-400 text-3xl" />
              <div className="grow">
                <p className="text-sm text-gray-700 dark:text-gray-300">LinkedIn</p>
                <p className="font-semibold text-gray-700 dark:text-gray-200">Muhammad Musabbir</p>
              </div>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 font-bold hover:text-cyan-400 transition-colors px-3 py-1 rounded-md"
              >
                <CircleUserRound className="w-5 h-5" strokeWidth={2} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
