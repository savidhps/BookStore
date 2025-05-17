import './App.css'
import Home from "./users/pages/Home";
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import PagenotFound from "./pages/PagenotFound";
import Preloader from './components/Preloader';
import { useEffect, useState } from 'react';
import AllBooks from './users/pages/AllBooks';
import Careers from './users/pages/Careers';
import Contact from './pages/Contact';
import Profile from './users/pages/Profile';
import AdminHome from './admin/pages/AdminHome';
import AdminBooks from './admin/pages/AdminBooks';
import AdminCareers from './admin/pages/AdminCareers';
import AdminSettings from './admin/pages/AdminSettings';
import ViewBook from "./users/pages/ViewBook";

function App() {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(true)
    },7)
  },[])
  return (
    <>
     
      <Routes>
        <Route path='/' element={isLoading ? <Home /> : <Preloader />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth register/>} />
        <Route path='*' element={<PagenotFound />} />
        <Route path='/allbooks' element={<AllBooks/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/admin-home'element={isLoading ? <AdminHome/> : <Preloader />} />
        <Route path='/admin-books' element={<AdminBooks/>} />
        <Route path='/admin-careers' element={<AdminCareers/>} />
        <Route path='/admin-setings' element={<AdminSettings/>} />
        <Route path='/view-books/:id' element={<ViewBook/>} />
        
        <Route path='*' element={<PagenotFound />} />
      </Routes>
    </>
  )
}

export default App
