import React from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';



function Careers() {
    return (
        <>
            <Header />

            <div className='flex justify-center items-center flex-col md:px-40 px-10'>
                <h1 className='my-5 text-3xl font-medium'>Careers</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias iure voluptatibus fugiat aspernatur culpa qui perferendis! Animi labore expedita modi accusamus itaque vitae nam pariatur reprehenderit fugit saepe. Modi, alias!</p>
            </div>

            <div className='p-20'>
                <h1 className='text-2xl'>Current Openings</h1>
                <div className='flex justify-center items-center my-8 w-full'>
                    <input type="text" placeholder='Job title ' className='rounded border border-gray-400 px-5 py-2 mt-4 mb-5 md:w-1/4 1/2 shadow' />
                    <button className='bg-green-900 shadow text-white px-3 py-2  border hover:text-green-900 hover:bg-white hover:border'>Search</button>

                </div>
            </div>

            <div className='md:px-20 py-5 '>
            
            <div className='shadow border border-gray-500'>
                <div className="grid grid-cols-[8fr_1fr] p-5">
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

                <div>
                    <button className='bg-blue-800 p-3 text-white ms-3 border hover:text-blue-800 hover:bg-blue-800 hover:border'>Apply
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </button>
                </div>
                </div>

            </div>
            </div>



            <Footer />

        </>
    )
}

export default Careers