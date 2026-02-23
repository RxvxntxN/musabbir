import { motion } from 'framer-motion';
import { X, Send, Loader2 } from 'lucide-react';
import React from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: { name: string; email: string; message: string };
  isSubmitting: boolean;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function ContactModal({
  isOpen,
  onClose,
  formData,
  isSubmitting,
  handleChange,
  handleSubmit,
}: ContactModalProps) {
  // Don't render the modal if it's not open
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        className="bg-white dark:bg-stone-900 rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-linear-to-r from-teal-500 to-blue-500 p-6 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Get In Touch</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close modal"
            >
              <X size={24} />
            </button>
          </div>
          <p className="text-white/90 mt-2">Let&apos;s start a conversation</p>
        </div>

        {/* Modal Body with Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-stone-800 dark:text-white"
              placeholder="John Doe"
              autoFocus
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-stone-800 dark:text-white"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-stone-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent dark:bg-stone-800 dark:text-white resize-none"
              placeholder="Let's talk about..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-teal-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </>
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
