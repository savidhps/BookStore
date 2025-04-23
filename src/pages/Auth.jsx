import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Auth({register}) {
  return (
    <>
    <div id='loginpage' className='flex justify-center items-center px-3'>
    
    <div className="md:grid grid-cols-3 w-full ">
    <div></div>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='text-3xl mb-5 font-bold text-white'>BookStore</h1>

        <form className='w-full bg-gray-900 p-6 flex justify-center items-center flex-col' action="">

          <div style={{width:'70px',height:'70px',borderRadius:'50%'}}
          className='border border-white flex justify-center items-center'>
            <FontAwesomeIcon icon={faUser} className='text-white fa-2x' />
          </div>
          {!register ?<h1 className='text-white mt-5 text-3xl mb-8'>Login</h1>:
          <h1 className='text-white mt-5 text-3xl mb-8'>Register</h1>}
          {/* username  */}
          {register&&<div className='mb-5 w-full '>
           <input type="text" placeholder='User Name' className='p-2 rounded placeholder-gray-600 bg-white w-full' />
          </div>}
          <div className='mb-5 w-full '>
          <input type="text" placeholder='Email Id' className='p-2 rounded placeholder-gray-600 bg-white w-full' />
          </div>
          <div className='mb-2 w-full '>
          <input type="text" placeholder='Password' className='p-2 rounded placeholder-gray-600 bg-white w-full' />
          </div>
          <div className='mb-5 w-full flex justify-between'>
            <p className='text-amber-300' style={{fontSize:'10px'}}>*Never share your password with other</p>
            {!register&&<p className='text-white underline' style={{fontSize:'10px'}}>Forgot Password</p>}
          </div>
          {register?<div className='mb-2 w-full'>
          <button className='bg-green-800 text-white w-full p-3 rounded'>Register</button>
          </div>:
          <div className='mb-2 w-full'>
          <button className='bg-green-800 text-white w-full p-3 rounded'>Login</button>
          </div>}
          {!register&&<p className='text-white'>-----------------or-----------------</p>}
          {!register&&<div className='mb-5 mt-3 w-full'>
            <button className='bg-white text-black w-full p-3 rounded'>Sign in with Google</button>
          </div>}
          {register?<p className='text-white'>Are you a New User ? <Link to='/login'className='text-blue-400
          underline ms-2'>Login</Link></p>:
          <p className='text-white'>Are you a New User ? <Link to='/register' className='text-blue-400
          underline ms-2'>Register</Link></p>}

        </form>
      </div>
      
      <div></div>

    </div>
    </div>
    </>
  )
}

export default Auth