import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DashLayout from './components/DashLayout';
import EmployeeList from './features/employees/EmployeeList';
import Dashboard from './features/dash/Dashboard';
import EmployeeDetailed from './features/employees/EmployeeDetailed';
import EmployeeForm from './features/employees/EmployeeForm';
import Landing from './components/Landing';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing/>}/>
        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="employees" element={<EmployeeList />} />
          <Route path="employees/:id" element={<EmployeeDetailed />} />
          <Route path="employee/upload" element={<EmployeeForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
