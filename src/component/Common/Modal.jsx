import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import demoVideo from '../../assets/demo.mp4';

const Modal = ({ isOpen, onClose, autoPlay }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl relative overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 z-10"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="aspect-video w-full">
          <video
            src={demoVideo}
            className="w-full h-full object-cover"
            controls
            autoPlay={autoPlay}
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
