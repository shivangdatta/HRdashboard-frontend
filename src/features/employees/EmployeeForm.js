import React from 'react';

const EmployeeForm = () => {
  return (
    <div className="relative bg-black min-h-screen p-8 text-white">
      <header className="mb-4">
        <h1 className="text-3xl font-bold text-center">Add New Employee</h1>
      </header>

      <div className="max-w-4xl mx-auto p-6 bg-black border border-gray-700 rounded-md">
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium">Employee ID</label>
              <input
                type="text"
                placeholder="E.g., E003"
                className="mt-1 block w-full p-2 border border-gray-600 bg-black text-white rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                placeholder="E.g., Rajesh Sharma"
                className="mt-1 block w-full p-2 border border-gray-600 bg-black text-white rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Age</label>
              <input
                type="number"
                placeholder="E.g., 41"
                className="mt-1 block w-full p-2 border border-gray-600 bg-black text-white rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Gender</label>
              <select
                className="mt-1 block w-full p-2 border border-gray-600 bg-black text-white rounded-md"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium">Job Role</label>
              <input
                type="text"
                placeholder="E.g., Project Manager"
                className="mt-1 block w-full p-2 border border-gray-600 bg-black text-white rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Salary</label>
              <input
                type="number"
                placeholder="E.g., 120000"
                className="mt-1 block w-full p-2 border border-gray-600 bg-black text-white rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Performance Rating</label>
              <input
                type="number"
                placeholder="E.g., 5"
                className="mt-1 block w-full p-2 border border-gray-600 bg-black text-white rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Tenure</label>
              <input
                type="number"
                placeholder="E.g., 10"
                className="mt-1 block w-full p-2 border border-gray-600 bg-black text-white rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Year Hired</label>
              <input
                type="number"
                placeholder="E.g., 2021"
                className="mt-1 block w-full p-2 border border-gray-600 bg-black text-white rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                placeholder="E.g., Mumbai"
                className="mt-1 block w-full p-2 border border-gray-600 bg-black text-white rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Latitude</label>
              <input
                type="number"
                step="0.0001"
                placeholder="E.g., 19.076"
                className="mt-1 block w-full p-2 border border-gray-600 bg-black text-white rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Longitude</label>
              <input
                type="number"
                step="0.0001"
                placeholder="E.g., 72.8777"
                className="mt-1 block w-full p-2 border border-gray-600 bg-black text-white rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Project Count</label>
              <input
                type="number"
                placeholder="E.g., 25"
                className="mt-1 block w-full p-2 border border-gray-600 bg-black text-white rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium">Attendance Percentage</label>
              <input
                type="number"
                placeholder="E.g., 98"
                className="mt-1 block w-full p-2 border border-gray-600 bg-black text-white rounded-md"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-gradient-to-r from-rose-500 to-rose-700 rounded-lg shadow-lg text-white transition-transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <footer className="mt-8 text-center text-sm">
        <p>&copy; 2024 HR Company. No rights reserved.</p>
      </footer>

      <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
        <h2 className="text-4xl font-bold text-white">Coming Soon</h2>
      </div>
    </div>
  );
};

export default EmployeeForm;
