import React from 'react'

function Preloader() {
  return (
    <div className=' w-full min-h-screen flex justify-center items-center'>
      <div className='md:grid grid-cols-3 '>
        <div></div>
        <div className='flex justify-center items-center flex-col p-5 md:p-0'>
          <img src="https://i.pinimg.com/originals/e1/59/25/e15925c931a81678a3c2e0c0a40db781.gif"  alt="" />

        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Preloader