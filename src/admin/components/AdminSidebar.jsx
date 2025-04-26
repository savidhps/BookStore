import { faBagShopping, faBook, faGear, faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
faHouse
function AdminSidebar() {

    const navigate = useNavigate()

    const [homeStatus,setHomeStatus]=useState(false)
    const [bookStatus,setBookStatus]=useState(false)
    const [careersStatus,setCareersStatus]=useState(false)
    const [settingStatus,setsettingStatus]=useState(false)

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
        
    },[])

    return (
        <>
            <img className='z-52 mt-5' id='profileFile' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                alt="noimage" style={{ width: '150px', height: '150px', borderRadius: '50%' }} />

            <h1 className='my-5'>Username</h1>


            <div className='my-5'>
                <div className="mb-3">
                    <input onClick={() => filter('home')} type="radio" name="filter" id="home" readonly checked={homeStatus}/>
                    <label htmlFor="home" className='ms-3'><FontAwesomeIcon icon={faHouse} /> Home</label>
                </div>
                <div className="mb-3">
                    <input onClick={() => filter('books')} type="radio" name="filter" id="allbooks" readonly checked={bookStatus}/>
                    <label htmlFor="allbooks" className='ms-3'><FontAwesomeIcon icon={faBook} /> AllBooks</label>
                </div>
                <div className="mb-3">
                    <input onClick={() => filter('careers')} type="radio" name="filter" id="careers" readonly checked={careersStatus}/>
                    <label htmlFor="careers" className='ms-3'><FontAwesomeIcon icon={faBagShopping} /> Careers</label>
                </div>
                <div className="mb-3">
                    <input onClick={() => filter('settings')} type="radio" name="filter" id="settings" readonly checked={settingStatus}/>
                    <label htmlFor="settings" className='ms-3'> <FontAwesomeIcon icon={faGear} /> Settings</label>
                </div>

            </div>

        </>
    )
}

export default AdminSidebar