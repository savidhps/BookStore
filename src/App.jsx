import './App.css'
import Home from "./users/pages/Home";
import { Route, Routes } from 'react-router-dom';
import Auth from './pages/Auth';
import PagenotFound from "./pages/PagenotFound";
import Preloader from './components/Preloader';
import { useEffect, useState } from 'react';


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
        <Route path='/register' element={<Auth />} />
        <Route path='*' element={<PagenotFound />} />
      </Routes>
    </>
  )
}

export default App
