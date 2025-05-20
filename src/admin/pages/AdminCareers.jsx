import React, { useState } from 'react'
import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import { addJobApi } from '../../services/allApi'



function AdminCareers() {
    const [jobPostStatus, setJobPostStatus] = useState(true)
    const [viewApplicantStatus, setViewApplicantStatus] = useState(false)
    const [modalStatus, setModalStatus] = useState(false)
    const [jobDetails, setJobDetails] = useState({
        title: "", location: "", jType: "", salary: "", qualification: "", experience: "", description: ""
    })
    console.log(jobDetails);

    const handleReset = () => {
        setJobDetails({
            title: "", location: "", jType: "", salary: "", qualification: "", experience: "", description: ""
        })
    }
    const handleSubmit = async () => {
        const { title, location, jType, salary, qualification, experience, description } = jobDetails
        if (!title || !location || !jType || !salary || !qualification || !experience || !description) {
            toast.info("please fill the form compleatly")

        } else {
            const result = await addJobApi(jobDetails)
            // console.log(result);
            if (result.status == 200) {
                toast.success("Submited Sucessfully")
            } else if (result.status == 404) {
                toast.warning(result.response.data)
                handleReset()
            } else {
                toast.error("something went wrong")
                handleReset()
            }

        }
    }

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
                            <button onClick={() => setModalStatus(true)} className='bg-white text-blue-700 border border-blue-700 md:me-5 px-3 py-2'> Add Job</button>
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

                    {modalStatus && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

                        <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                            <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                                <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    {/* title  */}
                                    <div className=" bg-gray-900 p-4 flex  sm:px-6 justify-between">
                                        <h1 className='text-white text-2xl'>Application form</h1>
                                        <FontAwesomeIcon icon={faXmark} onClick={() => setModalStatus(false)} className='text-white fa-2x' />
                                    </div>

                                    {/* body  */}
                                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <h1 className='ps-3'>Enter the Job Details:</h1>
                                        <div className='p-3 '>
                                            <div className='mb-3'>
                                                <input type="text" placeholder='Title' onChange={(e) => setJobDetails({ ...jobDetails, title: e.target.value })} value={jobDetails.title} className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                                            </div>
                                            <div className='mb-3'>
                                                <input type="text" placeholder='Location' onChange={(e) => setJobDetails({ ...jobDetails, location: e.target.value })} value={jobDetails.location} className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                                            </div>
                                            <div className='mb-3'>
                                                <input type="text" placeholder='Job Type' onChange={(e) => setJobDetails({ ...jobDetails, jType: e.target.value })} value={jobDetails.jType} className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                                            </div>
                                            <div className='mb-3'>
                                                <input type="text" placeholder='Salary' onChange={(e) => setJobDetails({ ...jobDetails, salary: e.target.value })} value={jobDetails.salary} className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                                            </div>
                                            <div className='mb-3'>
                                                <input type="text" placeholder='Qualification' onChange={(e) => setJobDetails({ ...jobDetails, qualification: e.target.value })} value={jobDetails.qualification} className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                                            </div>
                                            <div className='mb-3'>
                                                <input type="text" placeholder='experience' onChange={(e) => setJobDetails({ ...jobDetails, experience: e.target.value })} value={jobDetails.experience} className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                                            </div>
                                            <div className='mb-3'>
                                                <input type="text" placeholder='Descripation' onChange={(e) => setJobDetails({ ...jobDetails, description: e.target.value })} value={jobDetails.description} className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                                            </div>
                                        </div>
                                    </div>
                                    {/* footer of modal  */}
                                    <div className="bg-gray-200 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold border text-white shadow-xs
                                         hover:text-black hover:bg-white hover:border sm:ml-3 sm:w-auto"
                                            onClick={handleSubmit}>Submit</button>
                                        <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm 
                                        font-semibold border text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto
                                         hover:text-black hover:border" onClick={handleReset} >Reset</button>
                                    </div>
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
            <ToastContainer theme='colored' position='top-center' autoClose={2000} />


            <Footer />
        </>
    )
}

export default AdminCareers