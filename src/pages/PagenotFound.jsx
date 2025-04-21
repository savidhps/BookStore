import React from 'react'
import { Link } from 'react-router-dom'


function PagenotFound() {
  return (
    <div className=' w-full min-h-screen flex justify-center items-center'>
      <div className='md:grid grid-cols-3 '>
        <div></div>
        <div className='flex justify-center items-center flex-col p-5 md:p-0'>
          <img src="https://webytag.com/wp-content/uploads/2024/07/c19fc414b5c17a9e286bd53c5ab19e7c.gif"  alt="" />
          <h6>Oh No!</h6>
          <h1 className='md:text-5xl text-2xl'>Look like You're Lost</h1>
          <p>page you are looking for is not available</p>
          <Link to='/'>
            <button className='mt-4 px-4 py-2 bg-blue-800 text-white border rounded hover:border hover:border-blue-800
            hover:bg-white hover:text-blue-800'>Back Home</button>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default PagenotFound