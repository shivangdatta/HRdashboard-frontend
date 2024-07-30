import React from 'react';
import VerticalSlider from './VerticalSlider';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate()

  const onClickHandler = () =>{
    navigate('/dash')
  }
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/2 flex justify-center items-center order-2 md:order-1">
        <VerticalSlider />
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2 bg-gray-900">
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          onClick={onClickHandler}
        >
          Go to HR Dashboard
        </button>
      </div>
    </div>
  );
};

export default Landing;
