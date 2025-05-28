import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

function Paymentsucess() {
  return (
    <>
    <Header/>
        <div className='container my-10'>
            <div className='md:grid grid-cols-2 px-10 justify-center items-center flex-col '>
                <div className=''>
                    <h1 className='text-3xl text-blue-700'>Congrulations</h1>
                    <p className='my-4 text-2xl'>ThankYou for shopping with Book Store ,Hope you have good time with us</p>
                    <Link to={'allbook'}><button className='bg-blue-900 py-3 px-4 text-white mb-5'> back</button></Link>
                    
                </div>
                <div className='flex justify-center items-center'>
                    <img src="data:image/png;base64,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"
                     alt="" className='w-full'/>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Paymentsucess