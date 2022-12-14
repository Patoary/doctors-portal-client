import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar/Navbar';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointments from './Pages/Dashboard/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctors from './Pages/Dashboard/AddDoctors';
import ManageDoctors from './Pages/Dashboard/ManageDoctors';
import Payment from './Pages/Dashboard/Payment';
import Review from './Pages/Home/Review';
function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<About />}></Route>
        <Route path='appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>
        <Route path='dashboard' element={<RequireAuth> <Dashboard /></RequireAuth>}>
          <Route index element={<MyAppointments />}></Route>
          <Route path='review' element={<MyReview />}></Route>
          <Route path='history' element={<MyHistory />}></Route>
          <Route path='payment/:id' element={<Payment />}></Route>

          <Route path='users' element={<RequireAdmin><Users /> </RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctors /> </RequireAdmin>}></Route>
          <Route path='manageDoctor' element={<RequireAdmin><ManageDoctors /> </RequireAdmin>}></Route>

        </Route>
        <Route path='review' element={<Review />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<SignUp />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
