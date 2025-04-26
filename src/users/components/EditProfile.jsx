import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';


function EditProfile() {
  const [offcanvasStatus, setOffCanvasStatus] = useState(false)

  return (
    <div>
      <div>

        <button onClick={() => setOffCanvasStatus(true)} className='text-blue-600 border border-blue-600 rounded p-3 hover:bg-blue-600 hover:text-white'> <FontAwesomeIcon icon={faPenToSquare} />Edit </button>

      </div>

      {offcanvasStatus && <div><div class="fixed inset-0 bg-gray-500/75 transition-opacity w-full h-full" onClick={() => setOffCanvasStatus(false)}></div>

        <div className='bg-white h-full w-90 z-50 fixed top-0 left-0'>
          <div className='bg-gray-900 px-3 py-4 text-white text-2xl flex justify-between'>
            <h1 className=''>Edit User Profile</h1>
            <FontAwesomeIcon icon={faXmark} onClick={() => setOffCanvasStatus(false)} />

          </div>
          {/* canvas boady  */}
          <div className='flex justify-center items-center flex-col my-5'>
            <label htmlFor="profileFile">
              <input id='profileFile' type="file" style={{ display: 'none' }} />
              {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7_Rd3yDTcIPmE0Pe4sLXNpD6ElsqvvVofQ&s" alt="no image"
                    style={{ height: '200px', widows: '200px', borderRadius: '200px' }} /> */}
              <img className='z-52' id='profileFile' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
              <div className='z-53 fixed bg-yellow-400 text-white p-4 rounded' style={{ marginLeft: '135px', marginTop: '-50px' }}><FontAwesomeIcon icon={faPen} /></div>
            </label>

            <div className='mb-3 mt-5 w-full px-5 '>
              <input type="text" placeholder='Username' className='w-full border border-gray-300 placeholder-gray-400 rounded p-2' />
            </div>
            <div className='mb-3  w-full px-5 '>
              <input type="text" placeholder='Passwoed' className='w-full border border-gray-300 placeholder-gray-400 rounded p-2' />
            </div>
            <div className='mb-3  w-full px-5 '>
              <input type="text" placeholder='Bio' className='w-full border border-gray-300 placeholder-gray-400 rounded p-2' />
            </div>

            <div className="mb-3 w-full px-5">
              <textarea name="" id="" placeholder='Bio' className='w-full border border-gray-300 placeholder-gray-400 rounded p-2' >

              </textarea>
            </div>

            <div className='flex justify-end w-full px-5 mt-5'>
              <button className='bg-amber-600 text-black rounded py-3 px-4 hover:text-amber-600 hover:border hover:border-amber-600 hover:bg-white '>Reset
              </button>

              <button className='bg-green-600 text-black rounded py-3 px-4 hover:text-green-600 hover:border hover:border-green-600 hover:bg-white ms-4 '>
                Update
              </button>
            </div>


          </div>

        </div>


      </div>}

    </div>
  )
}

export default EditProfile