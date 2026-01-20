import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Github } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, description, img, technologies, liveLink, repoLink }) => {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-2xl bg-[#0a0a1a] rounded-2xl shadow-2xl border border-white/10 overflow-hidden transform transition-all animate-fadeIn scale-100">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Section */}
        <div className="relative h-48 sm:h-64 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] to-transparent z-10" />
          <img 
            src={img} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 -mt-12 relative z-20">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            {title}
          </h3>
          
          <p className="text-gray-400 leading-relaxed mb-6">
            {description}
          </p>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-2 mb-8">
            {technologies?.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            
            {repoLink && (
              <a
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white/5 text-white rounded-xl font-semibold border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <Github className="w-4 h-4" />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;