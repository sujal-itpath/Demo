import React, { useState } from 'react';
import {
  ArrowLeft,
  Download,
  Share2,
  Copy,
  Check,
  Smartphone,
  Monitor,
  Film,
  Settings,
  Cloud,
  Zap,
} from 'lucide-react';
import ProgressSteps from './ProgressStep';

const ExportPage = ({ onBack, onHome }) => {
  const [selectedQuality, setSelectedQuality] = useState('1080p');
  const [selectedFormat, setSelectedFormat] = useState('MP4');
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isShared, setIsShared] = useState(false);

  const qualityOptions = [
    { value: '720p', label: '720p HD', size: '~5.2 MB', description: 'Good for social media' },
    { value: '1080p', label: '1080p Full HD', size: '~8.5 MB', description: 'Best quality' },
    { value: '4K', label: '4K Ultra HD', size: '~25 MB', description: 'Premium quality' },
  ];

  const formatOptions = [
    { value: 'MP4', label: 'MP4', description: 'Universal compatibility' },
    { value: 'MOV', label: 'MOV', description: 'Apple devices' },
    { value: 'GIF', label: 'GIF', description: 'Animated image' },
  ];

  const handleDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsDownloading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleShare = () => {
    setIsShared(true);
    setTimeout(() => setIsShared(false), 2000);
  };

  const handleBackToPreview = () => {
    if (onBack) {
      onBack();
    }
  };

  const handleCreateAnother = () => {
    if (onHome) {
      onHome();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ProgressSteps currentStep={4} />

      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Export Your Cartoon Video</h1>
          <p className="text-gray-600">Choose your preferred quality and format, then download or share your creation.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Export Options */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quality Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Monitor className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">Video Quality</h3>
              </div>

              <div className="grid gap-4">
                {qualityOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                      selectedQuality === option.value
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <input
                        type="radio"
                        name="quality"
                        value={option.value}
                        checked={selectedQuality === option.value}
                        onChange={(e) => setSelectedQuality(e.target.value)}
                        className="w-4 h-4 text-blue-600"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.description}</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-700">{option.size}</div>
                  </label>
                ))}
              </div>
            </div>

            {/* Format Selection */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Film className="w-5 h-5 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">File Format</h3>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {formatOptions.map((option) => (
                  <label
                    key={option.value}
                    className={`flex flex-col items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                      selectedFormat === option.value
                        ? 'border-purple-600 bg-purple-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="format"
                      value={option.value}
                      checked={selectedFormat === option.value}
                      onChange={(e) => setSelectedFormat(e.target.value)}
                      className="w-4 h-4 text-purple-600 mb-2"
                    />
                    <div className="font-semibold text-gray-900 mb-1">{option.label}</div>
                    <div className="text-xs text-gray-600 text-center">{option.description}</div>
                  </label>
                ))}
              </div>
            </div>

            {/* Download Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Download className="w-5 h-5 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">Download Options</h3>
              </div>

              <div className="space-y-4">
                {/* Primary Download Button */}
                <button
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isDownloading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Downloading... {downloadProgress}%</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <Download className="w-5 h-5" />
                      <span>Download Video ({selectedQuality} {selectedFormat})</span>
                    </div>
                  )}
                </button>

                {/* Download Progress */}
                {isDownloading && (
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${downloadProgress}%` }}
                    ></div>
                  </div>
                )}

                {/* Alternative Download Options */}
                <div className="grid md:grid-cols-2 gap-4">
                  <button className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200">
                    <Smartphone className="w-4 h-4" />
                    <span>Send to Phone</span>
                  </button>
                  <button className="flex items-center justify-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200">
                    <Cloud className="w-4 h-4" />
                    <span>Save to Cloud</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Video Preview */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Final Preview</h3>
              <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden mb-4">
                <div className="flex items-center justify-center h-full text-white">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-3">
                      <Download className="w-6 h-6" />
                    </div>
                    <div className="font-semibold">Ready to Export</div>
                    <div className="text-sm text-gray-300">{selectedQuality} • {selectedFormat}</div>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm text-gray-600">Estimated file size: {
                  qualityOptions.find(q => q.value === selectedQuality)?.size || '~8.5 MB'
                }</div>
              </div>
            </div>

            {/* Share Options */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Share2 className="w-5 h-5 text-pink-600" />
                <h3 className="font-bold text-gray-900">Share Your Creation</h3>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handleShare}
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  {isShared ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Link Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copy Share Link</span>
                    </>
                  )}
                </button>

                <div className="grid grid-cols-2 gap-2">
                  <button className="flex items-center justify-center space-x-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                    <span>📱</span>
                    <span>Instagram</span>
                  </button>
                  <button className="flex items-center justify-center space-x-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                    <span>🎵</span>
                    <span>TikTok</span>
                  </button>
                  <button className="flex items-center justify-center space-x-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                    <span>📘</span>
                    <span>Facebook</span>
                  </button>
                  <button className="flex items-center justify-center space-x-1 bg-gray-100 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200">
                    <span>🐦</span>
                    <span>Twitter</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Pro Features */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-5 h-5 text-yellow-600" />
                <h3 className="font-bold text-gray-900">Pro Features</h3>
              </div>
              <div className="space-y-2 text-sm text-gray-700 mb-4">
                <div>• 4K Ultra HD exports</div>
                <div>• Batch processing</div>
                <div>• Watermark removal</div>
                <div>• Priority processing</div>
              </div>
              <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg font-medium hover:from-yellow-600 hover:to-orange-600 transition-all duration-200">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-between items-center mt-8">
          <button
            onClick={handleBackToPreview}
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Preview</span>
          </button>

          <button
            onClick={handleCreateAnother}
            className="inline-flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-200"
          >
            <span>Create Another Video</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExportPage;
