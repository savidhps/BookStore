import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { approveBookApi, getAllBookAdminApi, getAllUsersApi } from '../../services/allApi'
import { toast, ToastContainer } from 'react-toastify'


function AdminBooks() {
    const [booklistStatus, setBookListStatus] = useState(true)
    const [userStatus, setUserStatus] = useState(false)
    const [bookDetails, setBookDetails] = useState([])
    const [token, setToken] = useState("")
    const [approveStatus, setApproveStatus] = useState('')
    const [allusers,setAllUsers]=useState([])


    const getAllBookAdmin = async (token) => {
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await getAllBookAdminApi(reqHeader)
        // console.log(result);
        if (result.status == 200) {
            setBookDetails(result.data)
        }

    }
    // console.log(bookDetails);
    console.log(allusers);
    

    const approveBook = async (data) => {
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await approveBookApi(data, reqHeader)
        // console.log(result);
        if (result.status == 200) {
            setApproveStatus(!approveStatus)
        } else {
            toast.error('something went wrong')
        }


    }

    // function to get all users 
    const getAllUsers = async (token) => {
        const reqHeader = {
            "Authorization": `Bearer ${token}`
        }
        const result = await getAllUsersApi(reqHeader)
        console.log(result);
        setAllUsers(result.data)

    }

    useEffect(() => {
        if (sessionStorage.getItem("token")) {
            // console.log(token);
            const token = sessionStorage.getItem("token")
            setToken(token)
            if (booklistStatus == true) {
                getAllBookAdmin(token)
            } else if (userStatus == true) {
                getAllUsers(token)
            } else {
                console.log("something went wrong");

            }
        }
    }, [approveStatus, userStatus])

    return (
        <>
            <AdminHeader />

            <div className='md:grid grid-cols-[1fr_4fr] '>
                <div className='bg-blue-200  mt-0 flex justify-top flex-col items-center p-5'>
                    <AdminSidebar />
                </div>
                <div>
                    <h1 className='text-2xl font-medium mt-5 text-center'>All Books</h1>

                    <div className=''>
                        <div className='flex justify-center items-center my-5'>
                            <p onClick={() => { setBookListStatus(true); setUserStatus(false) }} className={booklistStatus ? 'p-2 text-blue-600 border-l border-t border-r border-gray-300 rounded cursor-pointer'
                                : 'p-2 text-black border-b border-gray-300 rounded cursor-pointer'
                            }>BookList</p>
                            <p onClick={() => { setUserStatus(true); setBookListStatus(false) }} className={userStatus ? 'p-2 text-blue-600 border-l border-t border-r border-gray-300 rounded cursor-pointer'
                                : 'p-2 text-black border-b border-gray-300 rounded cursor-pointer'
                            }>User</p>
                        </div>


                        {/* Book list tab div  */}
                        {booklistStatus && <div className='md:flex md:flex-wrap justify-center items-center md:w-full '>
                            {
                                bookDetails?.length > 0 ?
                                    bookDetails.map((item, index) => (
                                        <div className="p-3" key={index}>
                                            <div className={item?.status == 'sold' ? 'p-3 opacity-54  rounded-lg' : 'p-3  rounded-lg'}>
                                                <img src={item?.imageurl} alt="" style={{ width: '100%', height: '300px' }} />
                                                <div className="flex justify-center flex-col items-center mt-3">
                                                    <p className="text-blue-700">{item?.author.slice(0, 20)}..</p>
                                                    <h3>{item?.title.slice(0, 20)}..</h3>
                                                    <h5 className='text-red-600'>{item?.userMail}</h5>
                                                    {item?.status == "pending" && <button className="px-3 py-2 bg-green-900 border text-white hover:border hover:border-green-900 hover:text-green-900 hover:bg-white w-full"
                                                        onClick={() => approveBook(item)}>Approve</button>}
                                                </div>
                                                <div className='flex justify-center'>
                                                    {item?.status == 'approved' && <img src="https://static.vecteezy.com/system/resources/previews/023/527/502/non_2x/green-check-mark-icon-symbol-logo-tick-symbol-green-color-transparent-design-free-png.png" alt="" style={{ width: '40px', height: '40px' }} />}
                                                </div>

                                            </div>
                                        </div>))
                                    :
                                    <p>no books</p>}


                        </div>}


                        {/* user tab div  */}
                        {userStatus && <div className='md:grid grid-cols-3 w-full mt-5'>
                            {allusers?.length>0?
                             allusers?.map((item,index)=>(
                                <div key={index} className='bg-gray-300 px-5 py-2  md:mb-16 mb-10 rounded md:mx-4 '>
                        <p className='text-orange-700 mb-1'>ID:{item?._id}</p>
                        <div className='flex'>
                          <img src={item.profile == "" ? "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" : `${item?.profile}`} alt="no img" style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
                          <div className='ms-6'>
                            <h1 className='text-blue-600 text-lg'>{item?.username}</h1>
                            <p className='text-sm '>{item?.email}</p>
                          </div>
                        </div>
                      </div>)):
                            <p>Loading ...</p>}
                        </div>}


                    </div>


                </div>
            </div>
            <ToastContainer theme='colored' position='top-center' autoClose={2000} />

            <Footer />
        </>
    )
}

export default AdminBooks