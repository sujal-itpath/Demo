import React from 'react';
import { ArrowRight, Check } from 'lucide-react';

const ProgressSteps = ({ currentStep }) => {
  const steps = [
    { number: 1, title: 'Upload Your Face' },
    { number: 2, title: 'Cartoonify' },
    { number: 3, title: 'Preview' },
    { number: 4, title: 'Export' },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-8">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm ${
                      step.number < currentStep
                        ? 'bg-green-600 text-white'
                        : step.number === currentStep
                        ? 'bg-gray-900 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step.number < currentStep ? (
                      <Check className="w-4 h-4" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span
                    className={`${
                      step.number === currentStep
                        ? 'font-semibold text-gray-900'
                        : step.number < currentStep
                        ? 'text-gray-600'
                        : 'text-gray-500'
                    }`}
                  >
                    {step.title}
                  </span>
                </div>

                {index < steps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSteps;
