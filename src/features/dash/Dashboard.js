import React from 'react';
import Cardbox from '../../components/Cardbox';
import PieStat from '../../components/PieStat';
import BarGraph from '../../components/BarGraph';
import { useGetDashboardDataQuery } from './dashApiSice'; // Ensure the import path is correct
import Toplist from './Toplist';
import { useNavigate } from 'react-router-dom';
import UniqueSpinner from '../../components/UniqueSpinner';


const Dashboard = () => {
  const {
    data: dat,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetDashboardDataQuery();
  const navigate = useNavigate()
  let content;

  if (isLoading) {
    content = <UniqueSpinner/>;
  } else if (isError) {
    content = <p>Error: {error.message}</p>;
  } else if (isSuccess) {
    console.log(dat);
    content = (
      <div className="bg-black min-h-screen p-4 text-white">
        <header className="mb-4">
          <h1 className="text-3xl font-bold">Dashboard</h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="md:row-span-2 lg:col-span-2 p-2 border border-gray-700 rounded-md ">
            <BarGraph graph1 = {dat.graph1} graph2 = {dat.graph2}/>
          </div>
          <div className="p-2 border border-gray-700 rounded-md ">
            <Cardbox title="avg performance rating" stat={dat.rating.averagePerformance}/>
          </div>
          <div className="p-2 border border-gray-700 rounded-md flex justify-between items-center">
            <Cardbox title="Total Employees" stat={dat.total.totalEmployees} />
            <button 
              onClick={()=> navigate('/dash/employee/upload')}
              className='px-4 py-2 text-white bg-gradient-to-r from-rose-500 to-rose-700 rounded-lg shadow-lg transition transform hover:scale-105 hover:from-rose-600 hover:to-rose-800'>
              Add Data
            </button>
          </div>

          <div className="md:row-span-2 lg:col-span-2 p-2 border border-gray-700 rounded-md ">
            <Toplist datlist={dat.entities} />
          </div>
          <div className="p-2 border border-gray-700 rounded-md">
            <PieStat data={dat.pie1} dataKey="count" title="male-female-count"/>
          </div>
          <div className="p-2 border border-gray-700 rounded-md">
            <PieStat data={dat.pie2} dataKey="totalIncome" title="male-female-income" />
          </div>
        </div>

        <footer className="mt-8">
          <p className="text-center text-sm">&copy; 2024 HR Company. No rights reserved.</p>
        </footer>
      </div>
    );
  }

  return <div>{content}</div>;
};

export default Dashboard;
