import React, { useState } from 'react';
import { useGetEmployeesQuery } from './employeeApiSlice';
import { AiOutlineEye } from 'react-icons/ai'; 
import { AiOutlineArrowLeft } from 'react-icons/ai';  // Import back arrow icon
import { useNavigate } from 'react-router-dom'; 
import UniqueSpinner from '../../components/UniqueSpinner';

const EmployeeList = () => {
  const [page, setPage] = useState(1);
  const [searchVal , setSearchVal] = useState('');
  const limit = 10;
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setSearchVal(e.target.value); 
  }

  const {
    data: employees,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetEmployeesQuery({ page, limit });

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setPage(prevPage => Math.max(prevPage - 1, 1));
  };

  let content;
  if (isLoading) {
    content = <UniqueSpinner/>;
  } else if (isError) {
    content = <p className="text-red-500">Error: {error.message}</p>;
  } else if (isSuccess) {
    content = (
      <div className="border border-gray-700 p-6 rounded-lg shadow-lg">
        <ul>
          {employees.ids.map(id => (
            <li key={id} className="flex justify-between items-center p-2 border-b border-gray-700">
              <div>
                <span className="text-white mx-6">{employees.entities[id].employeeId}</span>
                <span className="text-white">{employees.entities[id].name}</span>
              </div>
              <button 
                onClick={() => navigate(`/dash/employees/${id}`)} // Navigate to detailed view
                className="flex items-center px-3 py-1 text-white bg-gradient-to-r from-rose-500 to-rose-700 rounded-lg shadow-lg transition transform hover:scale-105 hover:from-rose-600 hover:to-rose-800"
              >
                <AiOutlineEye className="mr-1" /> View
              </button>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={page === 1}
            className="px-4 py-2 text-white bg-orange-600 mx-4 rounded-lg shadow-lg transition transform hover:bg-orange-700 disabled:bg-gray-500"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="px-4 py-2 text-white w-24 bg-orange-600 rounded-lg shadow-lg transition transform hover:bg-orange-700"
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black h-screen flex items-center justify-center p-6 relative">
      {/* Back Arrow Button */}
      <button
        onClick={() => navigate('/dash')} // Go back to previous page
        className="absolute top-4 left-4 p-2 bg-gray-800 rounded-full text-white shadow-lg transition transform hover:bg-gray-700"
      >
        <AiOutlineArrowLeft size={24} />
      </button>

      <div className="w-full max-w-4xl">
        <div className='max-w-4xl flex justify-between mb-4'> 
          <h1 className="text-2xl text-white">Employee List</h1>
          <form className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 text-white bg-black rounded-l-lg border border-gray-700 focus:outline-none focus:border-orange-600"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="px-4 text-white bg-orange-600 rounded-r-lg shadow-lg transition transform hover:bg-orange-700"
            >
              Search
            </button>
          </form>
        </div>
        {content}
      </div>
    </div>
  );
};

export default EmployeeList;
