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
        <Route path='*' element={<PagenotFound />} />
        <Route path='/allbooks' element={<AllBooks/>} />
        <Route path='/careers' element={<Careers/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='*' element={<PagenotFound />} />
      </Routes>
    </>
  )
}

export default App
