import React from 'react';
import PropTypes from 'prop-types';

const LandingCard = ({ heading, text, icon: Icon }) => {
  return (
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex items-center space-x-6 transform transition-transform duration-500 ease-in-out h-96 w-full">
      <div className="text-orange-500">
        <Icon size={40} />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-rose-500">{heading}</h3>
        <p className="text-gray-400 mt-2">{text}</p>
      </div>
    </div>
  );
};

LandingCard.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
};

export default LandingCard;
