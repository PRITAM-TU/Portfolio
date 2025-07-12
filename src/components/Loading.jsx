// components/Loading.jsx
import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <p className="mt-4 text-lg font-medium text-gray-800 dark:text-gray-200">
          Loading...
        </p>
      </div>
    </div>
  );
};

export default Loading;