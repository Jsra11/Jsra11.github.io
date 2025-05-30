import React from 'react';

const TarjetaRazones = ({ title, description, icon: IconComponent }) => {
  return (
    <div className="flex items-start">
      <div className="mr-3 mt-1">
        {IconComponent ? (
          <IconComponent className="h-6 w-6 text-purple-600" />
        ) : (
          <svg
            className="h-6 w-6 text-purple-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        )}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 text-[16px]"><b>{title}</b></h3>
        <p className="text-gray-600 text-[15px]">{description}</p>
      </div>
    </div>
  );
};

export default TarjetaRazones;