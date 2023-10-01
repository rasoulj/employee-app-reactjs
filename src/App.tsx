import { Route, Routes } from 'react-router-dom'
import './App.css'

import { initDB } from "react-indexed-db-hook";
import { DBConfig } from './configs/db_config';
import EmployeesPage from './pages/EmployeesPage/EmployeesPage';
import EmployeePage from './pages/EmployeePage/EmployeePage';

initDB(DBConfig);

function App() {
  return <div className=' md:w-1/2 w-full md:border md:border-1'>
    <Routes>
      <Route path='/' element={<EmployeesPage />} />
      <Route path='/employee/:id' element={<EmployeePage />} />
    </Routes>
  </div>
}

export default App
