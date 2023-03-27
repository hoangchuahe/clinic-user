import logo from './logo.svg';
import './App.css';
import AppLayout from './Layout';
import Doctors from '../src/Pages/Doctor'
import Home from './Pages/Home'
import Services from './Pages/Services';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Features from './Pages/Features';
import Appointment from './Pages/Appointment';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import DoctorDetail from './Pages/DoctorProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Navigate to="/home" />} />
        <Route path='' element={<AppLayout />}>
          <Route path='home' element={<Home />} />
          <Route path='doctors' element={<Doctors />} />
          <Route path='services' element={<Services />} />
          <Route path='appointment' element={<Appointment />} />
          <Route path='blog' element={<Blog />}/>
          <Route path='contact' element={<Contact />} />
          <Route path='features' element={<Features />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
