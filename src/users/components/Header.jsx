import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUser, faBars, faAngleDown, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Header() {

  const [status, setStatus] = useState(false)
  const [dropDownStatue,setDropDownStatus]=useState(false)
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

          {/* <Link to={'/login'}>
              <button className='border border-black rounded  px-3 py-2'><FontAwesomeIcon icon={faUser}
              className='me-2' /> Login</button>
            </Link> */}


          {/* dropdown  */}


          <div className="relative inline-block text-left">
            <div>
              <button onClick={()=>setDropDownStatus(!dropDownStatue)} type="button" className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs {ring-1 ring-gray-300 ring-inset} hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">

                <img className='mx-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3VduXS3fdHmNyjX61GkwydcoWoBniZC7Rw&s" alt=""
                  style={{ height: '40px', width: '40px' }} />

                {/* <FontAwesomeIcon icon={faAngleDown} /> */}
              </button>
            </div>

            {dropDownStatue&&<div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1" role="none">

                <Link to='/profile'>
                  <p className='block px-4 py-2 text-gray-700 ' role="menuitem" tabIndex="-1" id='menu-item-0' >
                  <FontAwesomeIcon className='me-2'  icon={faUser} />
                    Profile
                  </p>
                </Link>
                <button className='px-4 py-2 text-sm block ' role="menuitem" tabIndex="-1" id='menu-item-1'>
                <FontAwesomeIcon className='me-2' icon={faPowerOff} />
                Logout
                </button>
              </div>
            </div>}
          </div>



        </div>
      </div>







      {/* navigation -header part B  */}
      <nav className='p-3 w-full bg-gray-900 text-white md:flex justify-center items-center'>
        <div className='flex justify-between items-center p-3 md:hidden'>
          <span onClick={() => setStatus(!status)} className='text-2xl'><FontAwesomeIcon icon={faBars} /></span>
          {/* <Link to={'/login'}>
            <button className='border border-white rounded  px-3 py-2 md:hidden'><FontAwesomeIcon icon={faUser} /> Login</button>
            </Link> */}
          {/* Drop Down  */}
          <div className="relative inline-block text-left">
            <div>
              <button onClick={()=>setDropDownStatus(!dropDownStatue)} type="button" className="inline-flex items-center w-full justify-center gap-x-1.5 rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs {ring-1 ring-gray-300 ring-inset} hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">

                <img className='mx-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3VduXS3fdHmNyjX61GkwydcoWoBniZC7Rw&s" alt=""
                  style={{ height: '40px', width: '40px',borderRadius:'20px' }} />

                {/* <FontAwesomeIcon icon={faAngleDown} /> */}
              </button>
            </div>

            {dropDownStatue&&<div className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div className="py-1" role="none">

                <Link to='/profile'>
                  <p className='block px-4 py-2 text-gray-700 ' role="menuitem" tabIndex="-1" id='menu-item-0' >
                  <FontAwesomeIcon className='me-2'  icon={faUser} />
                    Profile
                  </p>
                </Link>
                <button className='px-4 py-2 text-sm block text-black ' role="menuitem" tabIndex="-1" id='menu-item-1'>
                <FontAwesomeIcon className='me-2' icon={faPowerOff} />
                Logout
                </button>
              </div>
            </div>}
          </div>


        </div>

        <ul className={status ? 'md:flex' : 'md:flex justify-center hidden'}>
          <Link to='/'><li className='mx-4 mt-3 md:mt-0'>Home</li></Link>
          <Link to='/allbooks'><li className='mx-4 mt-3 md:mt-0'>Book</li></Link>
          <Link to='/careers'><li className='mx-4 mt-3 md:mt-0'>Careers</li></Link>
          <Link to='/contact'><li className='mx-4 mt-3 md:mt-0'>Contact</li></Link>
        </ul>
      </nav>
    </>
  )
}

export default Header