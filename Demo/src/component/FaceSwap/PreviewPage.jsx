import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  Maximize,
  Settings,
  RotateCcw,
  Scissors,
  Music,
  Clock,
} from 'lucide-react';
import ProgressSteps from './ProgressStep';

const PreviewPage = ({ onBack, onContinue }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(15);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleBackToCartoonify = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleContinueToExport = () => {
    if (onContinue) {
      onContinue();
    }
  };

  const videoDetails = {
    resolution: '1920×1080',
    duration: '15 seconds',
    format: 'MP4',
    fileSize: '~8.5 MB',
    frameRate: '30 FPS',
  };

  const appliedEffects = [
    { name: 'Face Swap', status: 'Applied' },
    { name: 'Cartoon Style', status: 'Classic' },
    { name: 'Enhancement', status: 'AI Optimized' },
  ];

   return (
    <div className="min-h-screen bg-gray-50">
      <ProgressSteps currentStep={3} />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Your Cartoon Video is Ready!</h1>
          <p className="text-gray-600">Watch your cartoonified face in action. Preview the final result before saving.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Preview Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Play className="w-5 h-5 text-gray-600" />
                  <h3 className="font-bold text-gray-900">Video Preview</h3>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>Duration: 15s</span>
                </div>
              </div>

              {/* Video Player */}
              <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden mb-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                    <div className="text-xl font-semibold mb-2">Cartoon Face Swap Video</div>
                    <div className="text-gray-300">Click to play preview</div>
                  </div>
                </div>
                
                {/* Video Quality Badge */}
                <div className="absolute top-4 right-4 bg-black/80 text-white text-sm px-2 py-1 rounded">
                  1080p
                </div>

                {/* Progress Bar */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white text-sm mb-2">00:00 / 00:15</div>
                  <div className="w-full bg-white/30 rounded-full h-1">
                    <div className="bg-white h-1 rounded-full" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
                  </div>
                </div>
              </div>

              {/* Video Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handlePlayPause}
                    className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                  </button>
                  <button className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
                    <Maximize className="w-4 h-4" />
                  </button>
                  <button className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-200">
                    <Settings className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mt-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900">Quick Actions</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Generated 2 minutes ago</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="flex flex-col items-center space-y-2 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200">
                  <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                    <RotateCcw className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Regenerate</span>
                </button>

                <button className="flex flex-col items-center space-y-2 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200">
                  <div className="w-10 h-10 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                    <Settings className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Adjust Settings</span>
                </button>

                <button className="flex flex-col items-center space-y-2 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                    <Scissors className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Trim Video</span>
                </button>

                <button className="flex flex-col items-center space-y-2 p-4 border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200">
                  <div className="w-10 h-10 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center">
                    <Music className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Add Audio</span>
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Video Details */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">ℹ</span>
                </div>
                <h3 className="font-bold text-gray-900">Video Details</h3>
              </div>
              
              <div className="space-y-3">
                {Object.entries(videoDetails).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                    <span className="font-medium text-gray-900">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applied Effects */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-5 h-5 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✨</span>
                </div>
                <h3 className="font-bold text-gray-900">Applied Effects</h3>
              </div>
              
              <div className="space-y-3">
                {appliedEffects.map((effect, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900">{effect.name}</div>
                      <div className="text-sm text-gray-600">{effect.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handleBackToCartoonify}
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Cartoonify</span>
          </button>

          <button
            onClick={handleContinueToExport}
            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            <span>Continue to Export</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;
