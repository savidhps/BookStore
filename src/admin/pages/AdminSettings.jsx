import React from 'react'
import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'

function AdminSettings() {
    return (
        <>
            <AdminHeader />

            <div className='md:grid grid-cols-[1fr_4fr]'>
                <div className='bg-blue-200  mt-0 flex justify-center flex-col items-center p-5'>
                    <AdminSidebar />
                </div>
                <div className='text-center'><h1 className='text-2xl text-bold mt-5'>Settings</h1>

                    <div className='md:grid grid-cols-2'>
                        <div className='p-6 text-justify'>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus explicabo neque alias tempore? Quia delectus, sed veritatis nihil autem officia corrupti deleniti molestiae consequuntur cupiditate labore, doloribus non, facere perferendis!</p>
                            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ullam sed enim deleniti tempora sequi officia ipsa consectetur, nulla dolorem explicabo eius cumque ut libero natus, hic dolorum et nihil?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, voluptas nostrum illum architecto impedit neque suscipit veniam blanditiis dolorum doloribus eum magni ipsum ullam cum similique cupiditate optio laborum dicta.</p>

                        </div>
                        <div className='bg-blue-200 rounded p-6 m-5 mx-10'>
                            <div className='flex justify-center items-center flex-col'>
                                <img className='z-52 ' id='profileFile' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt=""
                                    style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                                <div className='mb-3 mt-5 w-full px-5 '>
                                    <input type="text" placeholder='Username' className='w-full border border-gray-300 bg-white placeholder-gray-400 rounded p-2' />
                                </div>
                                <div className='mb-3  w-full px-5 '>
                                    <input type="text" placeholder='Passwoed' className='w-full border border-gray-300 bg-white placeholder-gray-400 rounded p-2' />
                                </div>
                                <div className='mb-3  w-full px-5 '>
                                    <input type="text" placeholder='Confirm Passwoed' className='w-full border border-gray-300 bg-white placeholder-gray-400 rounded p-2' />
                                </div>
                                <div className='flex justify-between  w-full px-5 mt-5'>
                                    <button className='w-full bg-amber-600 text-black rounded py-3 px-4 hover:text-amber-600 hover:border hover:border-amber-600 hover:bg-white '>Reset
                                    </button>

                                    <button className='w-full bg-green-600 text-black rounded py-3 px-4 hover:text-green-600 hover:border hover:border-green-600 hover:bg-white ms-4 '>
                                        Update
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


            <Footer />
        </>
    )
}

export default AdminSettings