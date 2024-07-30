import React from 'react';
import { useGetEmployeebyIdQuery } from './employeeApiSlice';
import { useParams } from 'react-router-dom';
import Location from '../../components/Location';
import { FaUserAlt, FaBriefcase, FaDollarSign, FaStar, FaCalendarAlt, FaProjectDiagram, FaCalendarCheck } from 'react-icons/fa';
import Cardbox from '../../components/Cardbox'; 
import { useNavigate } from 'react-router-dom';
import UniqueSpinner from '../../components/UniqueSpinner';

const EmployeeDetailed = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: employee, error, isLoading } = useGetEmployeebyIdQuery(id);
    const handleClick = () => {
        navigate('/dash/employees/');
    };

    if (isLoading) {
        return <UniqueSpinner/>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error: {error.message}</div>;
    }

    if (!employee) {
        return <div className="text-center text-gray-400">No employee found.</div>;
    }

    return (
        <div className="bg-black min-h-screen p-8 text-white">
            <div className="container mx-auto border border-gray-700 p-6 rounded-lg shadow-lg">
                <header className="mb-6">
                    <h1 className="text-4xl font-bold mb-4">{employee.name}</h1>
                </header>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Cardbox title="Age" icon={<FaUserAlt />} stat={employee.age} />
                    <Cardbox title="Gender" icon={<FaUserAlt />} stat={employee.gender} />
                    <Cardbox title="Job Role" icon={<FaBriefcase />} stat={employee.jobRole} />
                    <Cardbox title="Salary" icon={<FaDollarSign />} stat={`$${employee.salary}`} />
                    <Cardbox title="Performance Rating" icon={<FaStar />} stat={employee.performanceRating} />
                    <Cardbox title="Tenure" icon={<FaCalendarAlt />} stat={`${employee.tenure} years`} />
                    <Cardbox title="Year Hired" icon={<FaCalendarCheck />} stat={employee.yearHired} />
                    <Cardbox title="Project Count" icon={<FaProjectDiagram />} stat={employee.projectCount} />
                    <Cardbox title="Attendance Percentage" icon={<FaCalendarAlt />} stat={`${employee.attendancePercentage}%`} />
                    
                    <div className="md:col-span-2 lg:col-span-3 p-2 border border-gray-700 rounded-md">
                        <Location
                            loc={employee.location}
                            address={`${employee.location.city}, ${employee.location.state}`}
                        />
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
            <button
                onClick={handleClick}
                className="px-4 my-4 py-2 text-white bg-orange-600 mx-4 rounded-lg shadow-lg transition transform hover:bg-orange-700 disabled:bg-gray-500"
            >
            Go Back
          </button>
            </div>
        </div>
    );
};

export default EmployeeDetailed;
