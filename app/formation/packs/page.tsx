import React from 'react';

const UnderConstruction = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-950 via-gray-950 to-slate-900">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-md text-center">
        <h1 className="text-2xl font-bold text-orange-500 mb-4">🚧 Under Construction 🚧</h1>
        <p className="text-gray-700 mb-6">We're working hard to get this page ready for you. Sorry for the inconvenience, we'll be with you shortly!</p>
        
        <div className="relative h-24 my-6">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute left-1/2 transform -translate-x-1/2 top-14 w-20 h-4 bg-gray-400"></div>
        </div>
        
        <p className="text-gray-600">You can return to the <a href="/" className="text-blue-500 hover:underline">homepage</a></p>
      </div>
    </div>
  );
};

export default UnderConstruction;