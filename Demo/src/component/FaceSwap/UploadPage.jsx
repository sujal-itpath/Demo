import React, { useState } from 'react';
import {
  Upload,
  Camera,
  ArrowLeft,
  ArrowRight,
  Play,
  Check,
  X,
  User,
} from 'lucide-react';
import ProgressSteps from './ProgressStep';

const UploadPage = ({ onContinue, onBack }) => {
  const [selectedVideo] = useState({
    id: 1,
    title: 'Dancing Robot',
    description: 'Fun dance moves',
    duration: '0:15',
    thumbnail:
      'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=400',
  });

  const [faceAlignment] = useState({
    centered: true,
    lighting: true,
    eyesVisible: false,
  });

  const handleBackToGallery = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleContinue = () => {
    if (onContinue) {
      onContinue();
    }
  };

 return (
    <div className="min-h-screen bg-gray-50">
      <ProgressSteps currentStep={1} />

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Upload Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Upload Your Photo</h1>
                <p className="text-gray-600">Upload a clear photo of your face or take one with your camera for the best results.</p>
              </div>

              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center mb-6 hover:border-blue-400 transition-colors duration-200">
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                    <Upload className="w-8 h-8 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-lg font-medium text-gray-700 mb-1">Drag & drop your photo here</p>
                    <p className="text-gray-500">or click to browse files</p>
                  </div>
                  <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                    Choose File
                  </button>
                </div>
              </div>

              {/* OR Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 border-t border-gray-200"></div>
                <span className="px-4 text-gray-500 font-medium">OR</span>
                <div className="flex-1 border-t border-gray-200"></div>
              </div>

              {/* Camera Button */}
              <div className="text-center mb-8">
                <button className="inline-flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                  <Camera className="w-5 h-5" />
                  <span>Take Photo with Camera</span>
                </button>
              </div>

              {/* Tips Section */}
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Tips for best results:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Use good lighting and face the camera directly</li>
                      <li>• Make sure your face is clearly visible</li>
                      <li>• Avoid sunglasses or face coverings</li>
                      <li>• Keep a neutral expression</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Selected Video */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Selected Video</h3>
              <div className="space-y-4">
                <div className="relative aspect-video bg-gray-200 rounded-xl overflow-hidden">
                  <img
                    src={selectedVideo.thumbnail}
                    alt={selectedVideo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                      <Play className="w-5 h-5 text-gray-800 ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                    {selectedVideo.duration}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{selectedVideo.title}</h4>
                  <p className="text-gray-600 text-sm">{selectedVideo.description}</p>
                </div>
                <button className="w-full text-blue-600 font-medium py-2 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors duration-200">
                  Change Video
                </button>
              </div>
            </div>

            {/* Face Alignment Guide */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Face Alignment Guide</h3>
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-gray-400" />
                  </div>
                </div>
                <p className="text-center text-sm text-gray-600">Position your face within the circle</p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    {faceAlignment.centered ? (
                      <Check className="w-5 h-5 text-green-600" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                    <span className={`text-sm ${faceAlignment.centered ? 'text-green-700' : 'text-red-600'}`}>
                      Face centered
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {faceAlignment.lighting ? (
                      <Check className="w-5 h-5 text-green-600" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                    <span className={`text-sm ${faceAlignment.lighting ? 'text-green-700' : 'text-red-600'}`}>
                      Good lighting
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    {faceAlignment.eyesVisible ? (
                      <Check className="w-5 h-5 text-green-600" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                    <span className={`text-sm ${faceAlignment.eyesVisible ? 'text-green-700' : 'text-red-600'}`}>
                      Eyes not visible
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handleBackToGallery}
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Gallery</span>
          </button>

          <button
            onClick={handleContinue}
            className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200"
          >
            <span>Continue to Cartoonify</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
