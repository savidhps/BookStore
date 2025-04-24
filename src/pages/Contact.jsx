import React from 'react'
import Header from "../users/components/Header";
import Footer from "../components/Footer";

function Contact() {
    return (
        <>
            <Header />

            <div className='flex justify-center items-center flex-col md:px-40 px-10'>
                <h1 className='my-5 text-3xl font-medium'>Contacts</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias iure voluptatibus fugiat aspernatur culpa qui perferendis! Animi labore expedita modi accusamus itaque vitae nam pariatur reprehenderit fugit saepe. Modi, alias!</p>
            </div>

            <div className='grid grid-cols-7'>
                <div>1</div>
                <div>
                <p>123 Main Street, Apt 4B,Anytown, CA 91234</p>
                </div>
                <div>3</div>
                <div>
                <p>+91 9874561230</p>
                </div>
                <div>5</div>
                <div><p>Bookstore@gmail.com</p></div>
                <div>7</div>
            </div>

            <Footer />
        </>

    )
}

export default Contact