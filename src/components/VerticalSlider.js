import React, { useState, useEffect, useRef } from 'react';
import { FaChartLine, FaMapMarkerAlt, FaChartBar, FaDatabase, FaFilter } from 'react-icons/fa';

import LandingCard from './LandingCard';

const VerticalSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const cards = [
    {
      heading: "Employee Statistics",
      text: "View detailed statistics about employee performance, including aggregation and trend analysis.",
      icon: FaChartLine // Consider using an icon that represents data or analytics
    },
    {
      heading: "Performance Metrics",
      text: "Analyze employee performance with bar graphs and pie charts, showcasing key metrics and insights.",
      icon: FaChartBar // Use an icon that reflects charts or metrics
    },
    {
      heading: "Location Tracking",
      text: "Track and visualize employee locations on an interactive map using location data.",
      icon: FaMapMarkerAlt // Choose an icon that represents location or mapping
    },
    {
      heading: "Data Aggregation",
      text: "Leverage MongoDB aggregation pipelines to aggregate and filter employee data efficiently.",
      icon: FaDatabase // Select an icon that represents databases or data aggregation
    },
    {
      heading: "Paging and Filtering",
      text: "Efficiently navigate through large datasets with paging and filtering options for a smooth user experience.",
      icon: FaFilter // Opt for an icon related to filtering or navigation
    }
  ];
  const rotate = (direction) => {
    setActiveIndex((prev) => (prev + direction + cards.length) % cards.length);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        rotate(1);
      } else {
        rotate(-1);
      }
    };

    container.addEventListener('wheel', handleScroll, { passive: false });
    return () => container.removeEventListener('wheel', handleScroll);
  }, []);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      rotate(-1);
    } else if (e.key === 'ArrowDown') {
      rotate(1);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center bg-gray-300"
    >
      <div className="relative w-80 h-[400px] overflow-hidden">
        {cards.map((card, index) => {
          const offset = (index - activeIndex + cards.length) % cards.length;
          const translateY = (offset - 1) * 120; // Adjust spacing between cards
          const isVisible = offset === 1;
          return (
            <div
              key={index}
              className={`absolute w-full transition-transform duration-500 ease-in-out ${isVisible ? 'opacity-100 scale-110' : 'opacity-50 scale-90'}`}
              style={{
                transform: `translateY(${translateY}px)`,
                zIndex: isVisible ? 10 : 0,
              }}
            >
              <LandingCard heading={card.heading} text={card.text} icon={card.icon} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-between w-1/5 mt-4 z-10 md:hidden">
        <button
          onClick={() => rotate(-1)}
          className="bg-white p-4 mb-2 rounded-sm shadow-md hover:bg-gray-300"
        >
          &#8593;
        </button>
        <button
          onClick={() => rotate(1)}
          className="bg-white p-4 mb-2 rounded-sm shadow-md hover:bg-gray-300"
        >
          &#8595;
        </button>
      </div>
    </div>
  );
};

export default VerticalSlider;
