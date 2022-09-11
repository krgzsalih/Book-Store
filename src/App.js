
import './App.scss'
import { useData } from './context/use-data';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import Crud from './pages/admin';
import Login from './pages/login';
import { useAuth } from './context/use-auth';


function App() {
  const { mode } = useData()
  const { isAdmin } = useAuth()
  return (
    <>
      <div className={"App " + mode}>
        <Routes>
          {
            isAdmin === true ?
              <>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<Crud />} />
              </>
              :
              <>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
              </>
          }
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
