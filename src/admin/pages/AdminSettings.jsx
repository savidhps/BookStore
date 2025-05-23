import React, { useContext, useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { toast, ToastContainer } from 'react-toastify'
import { updateProfileApi } from '../../services/allApi'
import { serverUrl } from '../../services/serverUrl'
import { adminProfileUploadStatusContext } from '../../context/Contextshare'

function AdminSettings() {

    const [adminDetails, setAdminDetails] = useState({
        username: "",
        password: "",
        cpassword: "",
        profile: ""
    })
    // console.log(adminDetails);
    const [token, setToken] = useState("")

    const [preview, setPreview] = useState("")
    const [existingProfileImage, setExistingProfileImage] = useState("")
    const [updateStatus, setUpdateStatus] = useState({})
    const {setAdminProfileUploadStatus} = useContext(adminProfileUploadStatusContext)


    const handleFileAdd = (e) => {
        console.log((e.target.files[0]));
        setAdminDetails({ ...adminDetails, profile: e.target.files[0] })

        if (e.target.files[0] != "") {
            const url = URL.createObjectURL(e.target.files[0])
            console.log(url);
            setPreview(url)
        }

    }
    const handleAdd = async () => {
        const { username, password, cpassword, profile } = adminDetails
        console.log(username, password, cpassword, profile);
        if (!username || !password || !cpassword) {
            toast.info("Please Add all Details")
        } else {
            if (password != cpassword) {
                toast.warning("password must be same")
            } else {
                if (preview) {
                    const reqBody = new FormData()
                    for (let key in adminDetails) {
                        reqBody.append(key, adminDetails[key])
                    }
                    const reqHeader = {
                        "Authorization": `Bearer ${token}`
                    }

                    const result = await updateProfileApi(reqBody, reqHeader)
                    console.log(result);
                    if (result.status == 200) {
                        toast.success("update Sucessfully")
                        sessionStorage.setItem("existingUser", JSON.stringify(result.data))
                        setUpdateStatus(result.data)
                        setAdminProfileUploadStatus(result.data)
                    } else {
                        toast.error("something went wrong")
                        setUpdateStatus(result)
                        
                    }
                } else {
                    const reqHeader = {
                        "Authorization": `Bearer ${token}`
                    }

                    const result = await updateProfileApi({ username, password, profile: existingProfileImage }, reqHeader)
                    console.log(result);
                    if (result.status == 200) {
                        toast.success("update Sucessfully")
                        sessionStorage.setItem("existingUser", JSON.stringify(result.data))
                        setUpdateStatus(result.data)
                        setAdminProfileUploadStatus(result.data)
                    } else {
                        toast.error("something went wrong")
                        setUpdateStatus(result)
                     

                    }

                }
            }
        }

    }
    const handleReset = () => {

        if (sessionStorage.getItem("token")) {
            // const token = sessionStorage.getItem("token")
            // setToken(token)
            const user = JSON.parse(sessionStorage.getItem("existingUser"))
            setAdminDetails({ username: user.username, password: user.password, cpassword: user.password })
            setExistingProfileImage(user.profile)
            setPreview("")
        }

    }

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            const token = sessionStorage.getItem("token")
            setToken(token)
            const user = JSON.parse(sessionStorage.getItem("existingUser"))
            setAdminDetails({ username: user.username, password: user.password, cpassword: user.password })
            setExistingProfileImage(user.profile)
        }

    }, [updateStatus])

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
                                {existingProfileImage == "" ?
                                    <img className='z-52 ' id='profileFile' src={preview ? preview : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"} alt=""
                                        style={{ width: '100px', height: '100px', borderRadius: '50%' }} /> :
                                    <img className='z-52 ' id='profileFile' src={preview ? preview : `${serverUrl}/upload/${existingProfileImage}`} alt=""
                                        style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
                                }
                                <label htmlFor="imageFile" >
                                    <input onChange={(e) => handleFileAdd(e)} id='imageFile' type="file" className='hidden' />
                                    <FontAwesomeIcon className='bg-amber-500 p-1 rounded text-white text-xs ' icon={faPenToSquare} />
                                </label>
                                <div className='mb-3 mt-5 w-full px-5 '>
                                    <input value={adminDetails.username} onChange={(e) => setAdminDetails({ ...adminDetails, username: e.target.value })} type="text" placeholder='Username' className='w-full border border-gray-300 bg-white placeholder-gray-400 rounded p-2' />

                                </div>
                                <div className='mb-3  w-full px-5 '>
                                    <input value={adminDetails.password} onChange={(e) => setAdminDetails({ ...adminDetails, password: e.target.value })} type="text" placeholder='password' className='w-full border border-gray-300 bg-white placeholder-gray-400 rounded p-2' />
                                </div>
                                <div className='mb-3  w-full px-5 '>
                                    <input value={adminDetails.cpassword} onChange={(e) => setAdminDetails({ ...adminDetails, cpassword: e.target.value })} type="text" placeholder='Confirm Password' className='w-full border border-gray-300 bg-white placeholder-gray-400 rounded p-2' />
                                </div>
                                <div className='flex justify-between  w-full px-5 mt-5'>
                                    <button onClick={handleReset} className='w-full bg-amber-600 text-black rounded py-3 px-4 hover:text-amber-600 hover:border hover:border-amber-600 hover:bg-white '>Reset
                                    </button>

                                    <button onClick={handleAdd} className='w-full bg-green-600 text-black rounded py-3 px-4 hover:text-green-600 hover:border hover:border-green-600 hover:bg-white ms-4 '>
                                        Update
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <ToastContainer theme='colored' position='top-center' autoClose={2000} />


            <Footer />
        </>
    )
}

export default AdminSettings