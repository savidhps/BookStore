import React, { useState } from 'react'
import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faTrash } from '@fortawesome/free-solid-svg-icons'
faLocationDot


function AdminCareers() {
    const [jobPostStatus, setJobPostStatus] = useState(true)
    const [viewApplicantStatus, setViewApplicantStatus] = useState(false)
    return (
        <>
            <AdminHeader />

            <div className='md:grid grid-cols-[1fr_4fr]'>
                <div className='bg-blue-200  mt-0 flex justify-center flex-col items-center p-5'>
                    <AdminSidebar />
                </div>
                <div>
                    <h1 className='text-2xl font-medium text-center mt-5'>Careers</h1>
                    <div className='flex justify-center items-center my-5'>
                        <p onClick={() => { setJobPostStatus(true); setViewApplicantStatus(false) }} className={jobPostStatus ? 'p-2 text-blue-600 border-l border-t border-r border-gray-300 rounded cursor-pointer'
                            : 'p-2 text-black border-b border-gray-300 rounded cursor-pointer'
                        }>Job Post</p>
                        <p onClick={() => { setViewApplicantStatus(true); setJobPostStatus(false) }} className={viewApplicantStatus ? 'p-2 text-blue-600 border-l border-t border-r border-gray-300 rounded cursor-pointer'
                            : 'p-2 text-black border-b border-gray-300 rounded cursor-pointer'
                        }>View Applicant</p>
                    </div>

                    <div className='md:flex justify-between'>
                        <div>
                            <input type="text" className='placeholder-gray-300 border px-8 border-gray-400 py-2
                            ms-5' placeholder='Job Title' />
                            <button className='bg-green-500 px-3 py-2 border border-white'>Search</button>
                        </div>
                        {jobPostStatus && <div>
                            <button className='bg-white text-blue-700 border border-blue-700 md:me-5 px-3 py-2'> Add Job</button>
                        </div>}
                    </div>

                    {jobPostStatus && <div className='md:px-20 py-5 mt-5'>

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

                                <div className='flex md:justify-center items-start justify-end '>
                                    <button onClick={() => setModalStatus(true)} className='bg-red-800 p-2 py-2 rounded mt-5 md:mt-0 text-white ms-3 border hover:text-red-800 hover:bg-white hover:border'>Delete
                                        <FontAwesomeIcon className='' icon={faTrash} />
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>}

                    {viewApplicantStatus && (
                        <div className='md:flex justify-center items-center mt-5'>
                            <table className='border-2 border-gray-200 shadow-md rounded-md overflow-hidden w-full md:w-auto'>
                                <thead className='bg-blue-500 text-white'>
                                    <tr>
                                        <th className='border-b border-gray-300 text-left py-3 px-4 uppercase font-semibold text-sm'>SL:NO</th>
                                        <th className='border-b border-gray-300 text-left py-3 px-4 uppercase font-semibold text-sm'>JobTitle</th>
                                        <th className='border-b border-gray-300 text-left py-3 px-4 uppercase font-semibold text-sm'>Name</th>
                                        <th className='border-b border-gray-300 text-left py-3 px-4 uppercase font-semibold text-sm'>Qualification</th>
                                        <th className='border-b border-gray-300 text-left py-3 px-4 uppercase font-semibold text-sm'>Email</th>
                                        <th className='border-b border-gray-300 text-left py-3 px-4 uppercase font-semibold text-sm'>Phone</th>
                                        <th className='border-b border-gray-300 text-left py-3 px-4 uppercase font-semibold text-sm'>CoverLetter</th>
                                        <th className='border-b border-gray-300 text-left py-3 px-4 uppercase font-semibold text-sm'>Resume</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='bg-white hover:bg-gray-50'>
                                        <td className='py-3 px-4 border-b border-gray-200'>w</td>
                                        <td className='py-3 px-4 border-b border-gray-200'>w</td>
                                        <td className='py-3 px-4 border-b border-gray-200'>w</td>
                                        <td className='py-3 px-4 border-b border-gray-200'>w</td>
                                        <td className='py-3 px-4 border-b border-gray-200'>w</td>
                                        <td className='py-3 px-4 border-b border-gray-200'>w</td>
                                        <td className='py-3 px-4 border-b border-gray-200'>w</td>
                                        <td className='py-3 px-4 border-b border-gray-200'>w</td>
                                    </tr>
                                    {/* Add more rows here */}
                                </tbody>
                            </table>
                        </div>
                    )}

                </div>
            </div>

            <Footer />
        </>
    )
}

export default AdminCareers