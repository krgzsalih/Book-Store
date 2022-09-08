
import './App.scss'
import { useData } from './context/use-data';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';


import AuthLayout from './layouts/authLayout';
import Layout from './layouts/layout';
import Crud from './pages/admin/crud';
import LogAdmin from './pages/admin/log-admin';


function App() {
  const { mode } = useData()

  return (
    <>
      <div className={"App " + mode}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route element={<Layout />}>
            <Route path='/admin' element={<Crud />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path='/admin-login' element={<LogAdmin />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
