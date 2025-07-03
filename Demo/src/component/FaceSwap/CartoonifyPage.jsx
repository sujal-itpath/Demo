import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Settings,
  User,
  Palette,
  Eye,
  Grid3X3,
  Check,
  Clock,
  Sparkles,
} from 'lucide-react';
import ProgressSteps from './ProgressStep';

import originalImg from '../../assets/original.png';
import cartoonImg from '../../assets/cartoon.jpg';

const CartoonifyPage = ({ onBack, onContinue }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingTime, setProcessingTime] = useState(3.2);

  const handleBackToUpload = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleContinueToPreview = () => {
    if (onContinue) {
      onContinue();
    }
  };

  const handleRetryCartoonify = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 3000);
  };

  const handleAdjustSettings = () => {
    console.log('Adjust Settings');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ProgressSteps currentStep={2} />

      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Face Cartoonification Complete!</h1>
          <p className="text-gray-600">Your face has been transformed into cartoon style. Review the result below.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Original Photo */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center space-x-2 mb-4">
              <User className="w-5 h-2 text-gray-600" />
              <h3 className="font-bold text-gray-900">Original Photo</h3>
            </div>
            <div className="aspect-square bg-gray-200 rounded-xl flex items-center justify-center mb-4 overflow-hidden">
              <img
                src={originalImg}
                alt="Original"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
              <span>📷 original.png • 1.2MB</span>
            </div>
          </div>

          {/* Cartoonified Face */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <h3 className="font-bold text-gray-900">Cartoonified Face</h3>
              </div>
              <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-medium">
                ✨ Ready
              </div>
            </div>
            <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
              {isProcessing ? (
                <div className="text-center">
                  <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                  <span className="text-gray-600">Processing...</span>
                </div>
              ) : (
                <img
                  src={cartoonImg}
                  alt="Cartoonified"
                  className="w-full h-full object-cover rounded-xl"
                />
              )}
            </div>
            <div className="flex items-center justify-center space-x-4 text-sm">
              {isProcessing ? (
                <div className="flex items-center space-x-2 text-blue-600">
                  <Clock className="w-4 h-4" />
                  <span>{processingTime}s processing</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 text-green-600">
                  <Check className="w-4 h-4" />
                  <span>AI Enhanced</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Cartoonification Settings */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-gray-900">Cartoonification Settings</h3>
            <button
              onClick={handleAdjustSettings}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <Settings className="w-4 h-4" />
              <span>Adjust Settings</span>
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Style */}
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">Style</div>
              <div className="text-sm text-blue-600 font-medium">Classic Cartoon</div>
            </div>

            {/* Intensity */}
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <div className="w-6 h-6 bg-purple-600 rounded-full opacity-85"></div>
              </div>
              <div className="font-medium text-gray-900 mb-1">Intensity</div>
              <div className="text-sm text-purple-600 font-medium">High (85%)</div>
            </div>

            {/* Colors */}
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Palette className="w-6 h-6 text-pink-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">Colors</div>
              <div className="text-sm text-pink-600 font-medium">Vibrant</div>
            </div>

            {/* Edges */}
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Grid3X3 className="w-6 h-6 text-green-600" />
              </div>
              <div className="font-medium text-gray-900 mb-1">Edges</div>
              <div className="text-sm text-green-600 font-medium">Sharp</div>
            </div>
          </div>
        </div>

        {/* Quality Check Results */}
        <div className="bg-blue-50 rounded-2xl p-6 mb-8">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs">ℹ</span>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-3">Quality Check Results</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Face detection: Excellent</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Image quality: High</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Lighting: Good</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700">Cartoon conversion: Perfect</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={handleBackToUpload}
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Upload</span>
          </button>

          <div className="flex items-center space-x-4">
            <button
              onClick={handleRetryCartoonify}
              className="inline-flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Retry Cartoonify</span>
            </button>

            <button
              onClick={handleContinueToPreview}
              className="inline-flex items-center space-x-2 bg-gray-900 text-white px-8 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200"
            >
              <span>Continue to Video Preview</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartoonifyPage;
