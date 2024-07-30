import React from 'react';

const UniqueSpinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            <div className="absolute w-12 h-12 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin" style={{ borderTopColor: '#F97316' }}></div>
            <div className="absolute w-12 h-12 border-4 border-t-4 border-gray-200 border-solid rounded-full animate-spin animate-delay-150" style={{ borderTopColor: '#FECACA' }}></div>
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-gray-200 border-solid rounded-full border-t-transparent animate-spin"></div>
        </div>
      </div>
    </div>
  );
};

export default UniqueSpinner;
