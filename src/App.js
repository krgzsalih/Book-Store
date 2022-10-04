//Style, Hooks
import './App.scss'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
//Pages
import Home from './pages/Home';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Register from './pages/Register';
import AboutUs from './pages/AboutUs';
//Auth
import { useAuth } from './context/use-auth';

function App() {
  const { isAdmin, mode } = useAuth()
  return (
    <>
      <div className={"App " + mode}>
        <Routes>
          {
            isAdmin === true ?
              <>
                <Route path='/' element={<Home />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/aboutus' element={<AboutUs />} />
              </>
              :
              <>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/aboutus' element={<AboutUs />} />
              </>
          }
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
