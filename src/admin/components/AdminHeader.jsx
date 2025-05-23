import { faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


function AdminHeader() {
    const navigate = useNavigate()
    const logout = () => {
        sessionStorage.removeItem("existingUser")
        sessionStorage.removeItem("token")
        navigate('/')
    }
    return (
        <>
            <div className='flex justify-between md:px-20 p-3'>
                <div className='flex items-center'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGqKZ_XghbsCkjKJFYhJ-tu1uSbYJPeqsJ3w&s" alt="Logo"
                        style={{ width: "50px", height: '50px' }} />
                    <h1 className='ms-3 text-2xl font-medium'> BookStore</h1>
                </div>
                <button onClick={logout} className='border border-black rounded  px-4 py-3 hover:bg-black hover:text-white'><FontAwesomeIcon icon={faPowerOff}
                    className='me-2' /> Logout</button>
            </div>
            <div className='flex justify-center items-center bg-gray-900 text-white '>
                <p>Welcome , Admin! You're all se to manage and minitor the system. Let's get to work!</p>
            </div>
        </>
    )
}

export default AdminHeader