import React from 'react'
import Header from "../components/Header";
import  Footer  from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import EditProfile from '../components/EditProfile';

function Profile() {
  return (
    <>
      <Header/>

      <div className=' w-full bg-gray-900' style={{ height: '200px' }}></div>
            <div style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }} className='bg-white p-3 flex justify-center items-center'>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
            </div>
        <div>

        <div className='flex justify-between px-25 mt-5'>
            <p className='flex justify-center items-center'>
                <span className='text-3xl '>Savidh Ps</span>
                <FontAwesomeIcon icon={faCircleCheck} className='text-blue-400 ms-3'/>
            </p>
            <EditProfile/>
        </div>

        </div>

      <Footer/>
    </>
   
  )
}

export default Profile