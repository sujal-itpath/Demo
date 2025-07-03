import React, { useState } from 'react';
import UploadPage from './UploadPage';
import CartoonifyPage from './CartoonifyPage';
import PreviewPage from './PreviewPage';
import ExportPage from './ExportPage';

const steps = [
  { label: 'Upload', component: UploadPage },
  { label: 'Cartoonify', component: CartoonifyPage },
  { label: 'Preview', component: PreviewPage },
  { label: 'Export', component: ExportPage },
];

const FaceSwapFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleContinue = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleHome = () => {
    setCurrentStep(0);
  };

  const StepComponent = steps[currentStep].component;

  // Pass navigation handlers and currentStep (1-based) to each step
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-[1500px] mx-auto mt-8">
        <StepComponent
          onContinue={handleContinue}
          onBack={handleBack}
          onHome={handleHome}
          currentStep={currentStep + 1}
        />
      </div>
    </div>
  );
};

export default FaceSwapFlow; 