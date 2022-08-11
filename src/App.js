import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login/Login';
import Review from './Pages/Home/Review';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/appointment' element={<Appointment/>}></Route>
        <Route path='/review' element={<Review/>}></Route>
        <Route path='/contact' element={<ContactUs/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
