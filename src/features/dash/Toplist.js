import React from 'react';
import 'tailwindcss/tailwind.css'; 
import { useNavigate } from 'react-router-dom';


const Toplist = ({ datlist }) => {
  // Convert datlist object to an array of values
  const employeesArray = Object.values(datlist);
  const navigate = useNavigate();

  const onClickhandler = () => {
    navigate('/dash/employees')
  }

  return (
    <div className="overflow-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      <div className=" p-4 my-5 rounded-lg flex justify-between">
        <p className="text-xl text-white">
          Here you will find a list of top employees based on various metrics.
        </p>
        <button 
          onClick={onClickhandler}
          className='px-4 py-2 text-white bg-gradient-to-r from-rose-500 to-rose-700 rounded-lg shadow-lg transition transform hover:scale-105 hover:from-rose-600 hover:to-rose-800'
          >
          View All
        </button>
      </div>
      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
        <table className="min-w-full bg-gray-800 border border-gray-700 text-gray-300">
          <thead className="bg-black">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Employee ID</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Age</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Gender</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Job Role</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Salary</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Performance Rating</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Tenure</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Year Hired</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Location</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Project Count</th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-300 uppercase tracking-wider">Attendance Percentage</th>
            </tr>
          </thead>
          <tbody className="bg-black divide-y divide-gray-700">
            {employeesArray.map(employee => (
              <tr key={employee._id}>
                <td className="px-6 py-4">{employee.employeeId}</td>
                <td className="px-6 py-4">{employee.name}</td>
                <td className="px-6 py-4">{employee.age}</td>
                <td className="px-6 py-4">{employee.gender}</td>
                <td className="px-6 py-4">{employee.jobRole}</td>
                <td className="px-6 py-4">{employee.salary}</td>
                <td className="px-6 py-4">{employee.performanceRating}</td>
                <td className="px-6 py-4">{employee.tenure}</td>
                <td className="px-6 py-4">{employee.yearHired}</td>
                <td className="px-6 py-4">{employee.location.city}</td>
                <td className="px-6 py-4">{employee.projectCount}</td>
                <td className="px-6 py-4">{employee.attendancePercentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Toplist;
