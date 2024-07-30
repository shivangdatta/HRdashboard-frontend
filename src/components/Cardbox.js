import React from 'react';

const Cardbox = ({ title, stat }) => {
  return (
    <div className=" p-4 rounded-lg shadow-md">
      <h3 className="text-sm text-gray-400">{title}</h3>
      <p className="text-3xl font-bold text-white">{stat}</p>
    </div>
  );
};

export default Cardbox;
