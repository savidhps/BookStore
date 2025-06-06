import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faTrash, faXmark } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import { addJobApi, deleteJobApi, getAllJobsApi, getApplicationsApi } from '../../services/allApi'
import { Link } from 'react-router-dom'
import { serverUrl } from '../../services/serverUrl'


function AdminCareers() {
    const [jobPostStatus, setJobPostStatus] = useState(true)
    const [viewApplicantStatus, setViewApplicantStatus] = useState(false)
    const [modalStatus, setModalStatus] = useState(false)
    const [jobDetails, setJobDetails] = useState({
        title: "", location: "", jType: "", salary: "", qualification: "", experience: "", description: ""
    })
    const [allJobs, setAllJobs] = useState([])
    const [addjobStatus,setaddJobStatus]=useState([])
    const [searchKey,setSearchKey]=useState("")
    const [deleteStatus,setDeleteStatus]=useState([])
    const [allApplication, setAllApplication] = useState([])
    // console.log(jobDetails);
    console.log(allApplication);
    

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
                handleReset()
                setaddJobStatus(result.data)
                setModalStatus(false)
            } else if (result.status == 404) {
                toast.warning(result.response.data)
                handleReset()
            } else {
                toast.error("something went wrong")
                handleReset()
            }

        }
    }

    const getAllJobs = async (searchKey) => {
        const result = await getAllJobsApi(searchKey)
        // console.log(result);
        if (result.status == 200) {
            setAllJobs(result.data)
        }

    }
    // console.log(allJobs);

    const deleteJob=async(id)=>{
        const result=await deleteJobApi(id)
        // console.log(result);
        toast.success(result.data)
        setDeleteStatus(result.data)
        
    }
      const getAllApplication=async()=>{
            const result=await getApplicationsApi()
            // console.log(result);
            if(result.status==200){
                setAllApplication(result.data)
            }else{
                alert("something went wrong")
            }
            
        }


    useEffect(() => {
        getAllJobs(searchKey)
        
        if(jobPostStatus==true){
            getAllJobs(searchKey)
        }else if(viewApplicantStatus==true){
            getAllApplication()
        }else{
            alert("something went wrong")
        }
    }, [addjobStatus,searchKey,deleteStatus,viewApplicantStatus])

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
                            <input type="text" value={searchKey} onChange={(e)=>setSearchKey(e.target.value)} className='placeholder-gray-300 border px-8 border-gray-400 py-2
                            ms-5' placeholder='Job Title' />
                            <button className='bg-green-500 px-3 py-2 border border-white'>Search</button>
                        </div>
                        {jobPostStatus && <div>
                            <button onClick={() => setModalStatus(true)} className='bg-white text-blue-700 border border-blue-700
                            hover:bg-blue-700 hover:text-white md:me-5 px-3 py-2'> Add Job</button>
                        </div>}
                    </div>

                    {jobPostStatus &&
                        <div className='md:px-20 py-5 mt-5'>

                            {allJobs?.length>0 ?
                                allJobs.map((item,index)=>(
                                <div className='shadow border border-gray-500 mb-4' key={index}>
                                <div className="md:grid grid-cols-[8fr_1fr] p-5">
                                    <div>
                                        <h1 className='mb-3'>{item.title}</h1>
                                        <hr />
                                        <p className='mt-3'><FontAwesomeIcon icon={faLocationDot} className='text-blue-600 me-3' />{item.location}</p>
                                        <p className='mt-3'>Job Type:{item.jType}</p>
                                        <p className='mt-3'>Salary:{item.salary}</p>
                                        <p className='mt-3'>Qulification:{item.qualification}</p>
                                        <p className='mt-3'>Experience:{item.experience}</p>
                                        <p className='text-justify'>{item.description}</p>
                                    </div>

                                    <div className='flex md:justify-center items-start justify-end '>
                                        <button onClick={() => deleteJob(item?._id)} className='bg-red-800 p-2 py-2 rounded mt-5 md:mt-0 text-white ms-3 border hover:text-red-800 hover:bg-white hover:border'>Delete
                                            <FontAwesomeIcon className='' icon={faTrash} />
                                        </button>
                                    </div>
                                </div>
                            </div>)):
                            <p>Loading..</p>}
                        </div>
                        }

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
                        <div className='md:flex justify-center items-center overflow-x-auto mt-5'>
                            {allApplication?.length>0?
                            <table className='border-2 border-gray-200 shadow-md rounded-md  w-full md:w-auto'>
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
                                    {allApplication?.map((item,index)=>(
                                    <tr className='bg-white hover:bg-gray-50' key={index}>
                                        <td className='py-3 px-4 border-b border-gray-200'>{index+1}</td>
                                        <td className='py-3 px-4 border-b border-gray-200'>{item?.jobtitle}</td>
                                        <td className='py-3 px-4 border-b border-gray-200'>{item?.fullname}</td>
                                        <td className='py-3 px-4 border-b border-gray-200'>{item?.qualification}</td>
                                        <td className='py-3 px-4 border-b border-gray-200'>{item?.email}</td>
                                        <td className='py-3 px-4 border-b border-gray-200'>{item?.phone}</td>
                                        <td className='py-3 px-4 border-b border-gray-200'>{item?.coverletter}</td>
                                        <td className='py-3 px-4 border-b border-gray-200'><Link to={`${serverUrl}/pdfUploads/${item?.resume}`} target='_blank'
                                        className='text-blue-700 underline'>Resume
                                        </Link></td>
                                    </tr>))}
                                    {/* Add more rows here */}
                                </tbody>
                            </table>:
                            <p>No application Available</p>}
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