import { faBagShopping, faBook, faGear, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { serverUrl } from '../../services/serverUrl'
import { adminProfileUploadStatusContext } from '../../context/Contextshare'

function AdminSidebar() {

    const navigate = useNavigate()

    const [homeStatus,setHomeStatus]=useState(false)
    const [bookStatus,setBookStatus]=useState(false)
    const [careersStatus,setCareersStatus]=useState(false)
    const [settingStatus,setsettingStatus]=useState(false)
    const [adminD, setadminD]  = useState({
        username:"",
        profile:""
    })
    const {adminProfileUploadStatus} = useContext(adminProfileUploadStatusContext)

    const filter = (data) => {
        if (data == 'home') {
            navigate('/admin-home')
        } else if (data == 'books') {
            navigate('/admin-books')
        }else if (data == 'careers') {
            navigate('/admin-careers')
        }else if (data == 'settings') {
            navigate('/admin-setings')
        }else{
            navigate('*')
        }
    }

    useEffect(()=>{
        // console.log(location.pathname); for find the path (search bar in browser path)

        if(location.pathname =='/admin-home'){
            setHomeStatus(true)
        }else if(location.pathname=='/admin-books'){
            setBookStatus(true)
        }else if(location.pathname=='/admin-careers'){
            setCareersStatus(true)
        }else if(location.pathname=='/admin-setings'){
            setsettingStatus(true)
        }else{
            console.log('no such page');
            
        }
        const user=JSON.parse(sessionStorage.getItem("existingUser"))
        setadminD({username:user.username,profile:user.profile})
        
    },[adminProfileUploadStatus])

    return (
        <>
            <img className='z-52 mt-5' id='profileFile' src={adminD.profile==""?"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png":`${serverUrl}/upload/${adminD.profile}`}
                alt="noimage" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />

            <h1 className='my-5'>{adminD.username}</h1>


            <div className='my-5'>
                <div className="mb-3">
                    <input onClick={() => filter('home')} type="radio" name="filter" id="home" readOnly checked={homeStatus}/>
                    <label htmlFor="home" className='ms-3'><FontAwesomeIcon icon={faHouse} /> Home</label>
                </div>
                <div className="mb-3">
                    <input onClick={() => filter('books')} type="radio" name="filter" id="allbooks" readOnly checked={bookStatus}/>
                    <label htmlFor="allbooks" className='ms-3'><FontAwesomeIcon icon={faBook} /> AllBooks</label>
                </div>
                <div className="mb-3">
                    <input onClick={() => filter('careers')} type="radio" name="filter" id="careers" readOnly checked={careersStatus}/>
                    <label htmlFor="careers" className='ms-3'><FontAwesomeIcon icon={faBagShopping} /> Careers</label>
                </div>
                <div className="mb-3">
                    <input onClick={() => filter('settings')} type="radio" name="filter" id="settings" readOnly checked={settingStatus}/>
                    <label htmlFor="settings" className='ms-3'> <FontAwesomeIcon icon={faGear} /> Settings</label>
                </div>

            </div>

        </>
    )
}

export default AdminSidebar