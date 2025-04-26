import React from 'react'
import Footer from '../../components/Footer'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'

function AdminBooks() {
    return (
        <>
            <AdminHeader />

            <div className='grid grid-cols-[1fr_4fr]'>
                <div className='bg-blue-200  mt-0 flex justify-center flex-col items-center p-5'>
                    <AdminSidebar />
                </div>
                <div>Books</div>
            </div>

            <Footer />
        </>
    )
}

export default AdminBooks