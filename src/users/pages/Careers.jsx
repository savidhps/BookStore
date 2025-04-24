import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faArrowUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons';



function Careers() {

    const [modalStatus,setModalStatus]=useState(false)


    return (
        <>
            <Header />

            <div className='flex justify-center items-center flex-col md:px-40 px-10'>
                <h1 className='my-5 text-3xl font-medium'>Careers</h1>
                <p className='text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus fugiat odio soluta? Ipsam aut quo optio vitae corporis ullam natus ducimus obcaecati. Animi, quis a eveniet itaque aspernatur voluptas laboriosam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias iure voluptatibus fugiat aspernatur culpa qui perferendis! Animi labore expedita modi accusamus itaque vitae nam pariatur reprehenderit fugit saepe. Modi, alias!</p>
            </div>

            <div className='p-20'>
                <h1 className='text-2xl'>Current Openings</h1>
                <div className='flex justify-center items-center my-8 w-full'>
                    <input type="text" placeholder='Job title ' className='rounded border border-gray-400 px-5 py-2 mt-4 mb-5 md:w-1/4 1/2 shadow' />
                    <button className='bg-green-900 shadow text-white px-3 py-2  border hover:text-green-900 hover:bg-white hover:border'>Search</button>

                </div>
            </div>

            <div className='md:px-20 py-5 '>

                <div className='shadow border border-gray-500'>
                    <div className="md:grid grid-cols-[8fr_1fr] p-5">
                        <div>
                            <h1 className='mb-3'>Job Title</h1>
                            <hr />
                            <p className='mt-3'><FontAwesomeIcon icon={faLocationDot} className='text-blue-600 me-3' />Kochi</p>
                            <p className='mt-3'>Job Type:</p>
                            <p className='mt-3'>Salary:</p>
                            <p className='mt-3'>Qulification:</p>
                            <p className='mt-3'>Experience:</p>
                            <p className='text-justify'>Description:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum distinctio, quibusdam perspiciatis doloribus hic, incidunt delectus eius sit voluptates, adipisci harum rerum ratione? In voluptatum neque sapiente totam tenetur molestiae!
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempore cumque dolores ipsa blanditiis facere. Omnis, quasi repellat! Atque ullam perferendis, commodi cumque assumenda animi error porro beatae eveniet dolor
                            </p>
                        </div>

                        <div className='flex md:justify-center items-start justify-end'>
                            <button onClick={()=>setModalStatus(true)} className='bg-blue-800 p-3 mt-5 md:mt-0 text-white ms-3 border hover:text-blue-800 hover:bg-white hover:border'>Apply
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                            </button>
                        </div>
                    </div>

                </div>
            </div>



            {modalStatus&&<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            {/* title  */}
                            <div class=" bg-gray-900 p-4 flex  sm:px-6 justify-between">
                                <h1 className='text-white text-2xl'>Application form</h1>
                                <FontAwesomeIcon icon={faXmark} onClick={()=>setModalStatus(false)} className='text-white fa-2x' />
                            </div>

                            {/* body  */}
                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className='grid grid-cols-2'>
                                    <div className='p-3 '>
                                        <div className='mb-3'>
                                            <input type="text" placeholder='Full Name' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                                        </div>
                                        <div className='mb-3'>
                                            <input type="text" placeholder='Email Id' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                                        </div>
                                    </div>

                                    <div className='p-3 '>
                                        <div className='mb-3'>
                                            <input type="text" placeholder='Qulification' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                                        </div>
                                        <div className='mb-3'>
                                            <input type="text" placeholder='Phone' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                                        </div>
                                    </div>

                                </div>

                                <div className='mb-3 px-3 w-full'>
                                    <textarea name="" id="" placeholder='Cover Letter' className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full'></textarea>
                                </div>

                                <div className='mb-3 px-3 w-full '>
                                    <p className='text-gray-400 '>Resume</p>
                                    <input type="file" className=' border border-gray-400 rounded placeholder-gray-500 w-full file:bg-gray-400 file:p-2 file:text-white' />
                                </div>

                            </div>
                            {/* footer of modal  */}
                            <div class="bg-gray-200 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold border text-white shadow-xs hover:text-black hover:bg-white hover:border sm:ml-3 sm:w-auto">Submit</button>
                                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold border text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto hover:text-black hover:border">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}



            <Footer />

        </>
    )
}

export default Careers