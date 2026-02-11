// components/FloatingContactButton.tsx
'use client';
import { Mail, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Define the props for our button
interface FloatingContactButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function FloatingContactButton({ isOpen, onToggle }: FloatingContactButtonProps) {
  return (
    // The button itself
    <motion.button
      onClick={onToggle}
      className="fixed bottom-8 right-8 z-40 bg-teal-500 text-white p-4 rounded-full shadow-2xl hover:bg-teal-600 transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isOpen ? 'Close contact form' : 'Open contact form'}
    >
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="close-icon"
            initial={{ rotate: -180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 180, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X size={24} />
          </motion.div>
        ) : (
          <motion.div
            key="mail-icon"
            initial={{ rotate: 180, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -180, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Mail size={24} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
