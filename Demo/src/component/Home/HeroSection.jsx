import React, { useState } from 'react';
import { Play, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import demoVideo from '../../assets/demo.mp4';
import Modal from '../Common/Modal';

const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-2000"></div>
      </div>

      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16" style={{ maxWidth: '1500px' }}>
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-100 shadow-sm">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">AI-Powered Cartoon Magic</span>
            </div>

            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
              Transform Your Face into{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Cartoon Magic
              </span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Upload your photo, choose from hundreds of cartoon videos, and watch yourself come to life in animated adventures. 
              Create viral-worthy content in minutes with our cutting-edge AI technology.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/face-swap')}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span>Start Creating</span>
              </button>

              <button
                onClick={openModal}
                className="group bg-white/90 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white border border-gray-200 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">500K+</div>
                <div className="text-sm text-gray-600">Videos Created</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Cartoon Styles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">4.9★</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>
          </div>

          {/* Right Content - Video Preview */}
          <div className="relative z-10">
            <div className="relative cursor-pointer" onClick={openModal}>
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                <video
                  className="w-full h-full object-cover"
                  src={demoVideo}
                  autoPlay
                  muted
                  playsInline
                  loop
                />
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-8 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal opens only on interaction */}
      <Modal isOpen={isModalOpen} onClose={closeModal} autoPlay={true} />
    </section>
  );
};

export default HeroSection;
