import React, { useEffect, useState } from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faArrowUpRightFromSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { addApplicationApi, getAllJobsApi } from '../../services/allApi';
import { toast, ToastContainer } from 'react-toastify';



function Careers() {

    const [modalStatus, setModalStatus] = useState(false)
    const [alljobs, setallJobs] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [applicantDetails, setApplicantDetails] = useState({
        fullname: "",
        email: "",
        phone: "",
        qualification: "",
        coverletter: "",
        resume: ""
    })
    // console.log(applicantDetails);
    const [jobTitle, setjobTitle] = useState("")
    const [token, setToken] = useState("")


    const getAllJobs = async (searchKey) => {
        const result = await getAllJobsApi(searchKey)   
        // console.log(result);
        if (result.status == 200) {
            setallJobs(result.data)
        }

    }


    const handleReset = () => {
        setApplicantDetails({
            fullname: "",
            email: "",
            phone: "",
            qualification: "",
            coverletter: "",
            resume: ""
        })
        //modern browsers wont allow you to set value directly to a input tab with file type(empty value(""))
        document.getElementById('fileInput').value = ""
    }

    const openModal = (jobtitle) => {
        // console.log(jobtitle);
        setjobTitle(jobtitle)
        setModalStatus(true)
    }
    const handleSubmit = async () => {
        // console.log(jobTitle);
        const { fullname, email, phone, qualification, coverletter, resume } = applicantDetails
        if (!fullname || !email || !phone || !qualification || !coverletter || !resume) {
            toast.info("Please add complete details")
        } else {
            const reqBody = new FormData()
            for (let key in applicantDetails) {
                reqBody.append(key, applicantDetails[key])
            }
            reqBody.append("jobtitle", jobTitle)
            const reqHeader = {
                "Authorization": `Bearer ${token}`
            }

            const result = await addApplicationApi(reqBody, reqHeader)
            // console.log(result);
            if (result.status==200) {
                toast.success("Submited Sucessfully")
                setModalStatus(false)
            }else if(result.status==400){
                toast.info(result.response.data)
            }else{
                toast.error("Somethig went wrong")
                setModalStatus(false)
                handleReset()
            }

        }
    }
  

    useEffect(() => {
        getAllJobs(searchKey)
        if (sessionStorage.getItem("token")) {
            setToken(sessionStorage.getItem("token"))
        }
    }, [searchKey])

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
                    <input type="text" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} placeholder='Job title ' className='rounded border border-gray-400 px-5 py-2 mt-4 mb-5 md:w-1/4 1/2 shadow' />
                    <button className='bg-green-900 shadow text-white px-3 py-2  border hover:text-green-900 hover:bg-white hover:border'>Search</button>

                </div>
            </div>

            <div className='md:px-20 py-5 '>

                {
                    alljobs?.length >> 0 ?
                        alljobs?.map((item, index) => (
                            <div className='shadow border border-gray-500 mb-5' key={index}>
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

                                    <div className='flex md:justify-center items-start justify-end'>
                                        <button onClick={() => openModal(item?.title)} className='bg-blue-800 p-3 mt-5 md:mt-0 text-white ms-3 border hover:text-blue-800 hover:bg-white hover:border'>Apply
                                            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                        </button>
                                    </div>
                                </div>

                            </div>)) : <p className='text-center'>No job openings</p>}
            </div>



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
                                <div className='grid grid-cols-2'>
                                    <div className='p-3 '>
                                        <div className='mb-3'>
                                            <input type="text" placeholder='Full Name' onChange={(e) => setApplicantDetails({ ...applicantDetails, fullname: e.target.value })} value={applicantDetails.fullname} className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                                        </div>
                                        <div className='mb-3'>
                                            <input type="text" placeholder='Email Id' onChange={(e) => setApplicantDetails({ ...applicantDetails, email: e.target.value })} value={applicantDetails.email} className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                                        </div>
                                    </div>

                                    <div className='p-3 '>
                                        <div className='mb-3'>
                                            <input type="text" placeholder='Qulification' onChange={(e) => setApplicantDetails({ ...applicantDetails, qualification: e.target.value })} value={applicantDetails.qualification} className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                                        </div>
                                        <div className='mb-3'>
                                            <input type="text" placeholder='Phone' onChange={(e) => setApplicantDetails({ ...applicantDetails, phone: e.target.value })} value={applicantDetails.phone} className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full' />
                                        </div>
                                    </div>

                                </div>

                                <div className='mb-3 px-3 w-full'>
                                    <textarea name="" id="" placeholder='Cover Letter' onChange={(e) => setApplicantDetails({ ...applicantDetails, coverletter: e.target.value })} value={applicantDetails.coverletter} className='p-2 border border-gray-400 rounded placeholder-gray-500 w-full'></textarea>
                                </div>

                                <div className='mb-3 px-3 w-full '>
                                    <p className='text-gray-400 '>Resume</p>
                                    <input type="file" id='fileInput' onChange={(e) => setApplicantDetails({ ...applicantDetails, resume: e.target.files[0] })} className=' border border-gray-400 rounded placeholder-gray-500 w-full file:bg-gray-400 file:p-2 file:text-white' />
                                </div>
                                {/* if an input type is a file we cannot set value attiributes / and it has to be accessed like file[0] */}

                            </div>
                            {/* footer of modal  */}
                            <div className="bg-gray-200 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                <button type="button" onClick={handleSubmit} className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold border
                                 text-white shadow-xs hover:text-black hover:bg-white hover:border sm:ml-3 sm:w-auto">Submit</button>
                                <button type="button" onClick={handleReset} className="mt-3 inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold border
                                 text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto hover:text-black hover:border">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
            <ToastContainer theme='colored' position='top-center' autoClose={2000} />



            <Footer />

        </>
    )
}

export default Careers