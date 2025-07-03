import React from 'react';
import { Upload, Video, Share2, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Upload Your Photo',
      description: 'Upload a clear photo of your face or take one with your camera',
      icon: <Upload className="w-8 h-8" />,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      number: 2,
      title: 'Choose Cartoon Video',
      description: 'Select from our library of animated cartoon videos & styles',
      icon: <Video className="w-8 h-8" />,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      number: 3,
      title: 'Generate & Share',
      description: 'Watch the magic happen and share your cartoon video',
      icon: <Share2 className="w-8 h-8" />,
      color: 'text-pink-600',
      bgColor: 'bg-pink-100',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8"style={{ maxWidth: '1500px' }}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transform your face into cartoon characters with our AI-powered face swap 
            technology in just three simple steps.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={step.number} className="group">
                <div className="relative">
                  {/* Step Card */}
                  <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group-hover:border-gray-200">
                    {/* Step Number Badge */}
                    {/* <div className="absolute -top-4 left-8">
                      <div className={`w-8 h-8 ${step.bgColor} ${step.color} rounded-full flex items-center justify-center font-bold text-sm shadow-lg`}>
                        {step.number}
                      </div>
                    </div> */}

                    {/* Icon */}
                    <div className={`${step.bgColor} ${step.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow (Desktop) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2 z-20">
                      <div className="bg-white border border-gray-200 rounded-full p-2 shadow-lg">
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;