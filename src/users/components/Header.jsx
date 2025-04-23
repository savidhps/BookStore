import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [status, setStatus] = useState(false)
  return (
    <>
    {/* header part A  */}
        <div className='grid grid-cols-3 p-3'>
          <div className='flex items-center'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqKZ_XghbsCkjKJFYhJ-tu1uSbYJPeqsJ3w&s" alt="Logo"
              style={{ width: "50px", height: '50px' }} />
            <h1 className='text-2xl md:hidden ms-2'>BookStore</h1>
          </div>
          <div className='md:flex justify-center items-center hidden '>
            <h1 className='text-3xl'>BookStore</h1>
          </div>
          <div className='md:flex justify-end items-center hidden'>
            <FontAwesomeIcon icon={faFacebook} className='me-2' />

            <FontAwesomeIcon icon={faInstagram} className='me-2' />

            <FontAwesomeIcon icon={faSquareTwitter} className='me-2' />

            <Link to={'/login'}>
              <button className='border border-black rounded  px-3 py-2'><FontAwesomeIcon icon={faUser}
              className='me-2' /> Login</button>
            </Link>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3VduXS3fdHmNyjX61GkwydcoWoBniZC7Rw&s" alt=""
            style={{height:'40px',width:'40px'}} /> */}
          </div>
        </div>

    {/* navigation -header part B  */}
        <nav className='p-3 w-full bg-gray-900 text-white md:flex justify-center items-center'>
          <div className='flex justify-between p-3 md:hidden'>
            <span onClick={() => setStatus(!status)} className='text-2xl'><FontAwesomeIcon icon={faBars} /></span>
            <Link to={'/login'}>
            <button className='border border-white rounded  px-3 py-2 md:hidden'><FontAwesomeIcon icon={faUser} /> Login</button>
            </Link>
            {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3VduXS3fdHmNyjX61GkwydcoWoBniZC7Rw&s" alt=""
            style={{height:'40px',width:'40px'}} /> */}
          </div>

          <ul className={status?'md:flex':'md:flex justify-center hidden'}>
            <Link to='/'><li className='mx-4 mt-3 md:mt-0'>Home</li></Link>
            <Link to='/allbooks'><li className='mx-4 mt-3 md:mt-0'>Book</li></Link>
            <Link to='/careers'><li className='mx-4 mt-3 md:mt-0'>Careers</li></Link>
            <li className='mx-4 mt-3 md:mt-0'>Contact</li>
          </ul>
        </nav> 
      </>
      )
}

      export default Header