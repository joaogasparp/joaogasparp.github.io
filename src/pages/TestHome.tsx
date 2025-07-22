import React from 'react';

const TestHome: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black mb-4">
          Portfolio Test Page
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          This is a test to see if the pages are loading correctly
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="text-black">
            If you can see this, the routing and layout are working! ✅
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestHome;
