
import { Route, Routes } from 'react-router-dom';
import './App.scss'
import { useData } from './context/use-data';
import Admin from './pages/admin';
import Home from './pages/home';

import LogAdmin from './components/log-admin'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthLayout from './layouts/authLayout';
import Layout from './layouts/layout';
import Crud from './components/crud';


function App() {
  const { mode } = useData()

  return (
    <>
      <div className={"App " + mode}>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Crud />} />
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
