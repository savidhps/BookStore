import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { googleLoginApi, loginApi, registerApi } from '../services/allApi';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Auth({ register }) {

  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })

  const navigate = useNavigate()
  console.log(userDetails);

  const handleRegister = async () => {
    // console.log("in handleRegister function");
    const { username, email, password } = userDetails
    if (!username || !email || !password) {
      toast.info("please fill the form compleatly ")
    } else {
      const result = await registerApi({ username, email, password })
      console.log(result);
      if (result.status == 200) {
        toast.success('Register sucessfull')
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        navigate('/login')
      }
      else if (result.status == 409) {
        toast.warning(result.response.data)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      } else {
        toast.error("something went wrong")
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      }
    }

  }

  const handleLogin = async () => {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.info("please enter complete details")
    } else {
      const result = await loginApi({ email, password })
      console.log(result);
      if (result.status == 200) {
        toast.success('Login sucessful')
        sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token", result.data.token)

        setTimeout(() => {
          if (result.data.existingUser.email == 'admin@gmail.com') {
            navigate('/admin-home')
          } else {
            navigate('/')
          }
        }, 2500)

      } else if (result.status == 401) {
        toast.warning(result.response.data)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      } else if (result.status == 404) {
        toast.error(result.response.data)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      } else {
        toast.error('something went wrong')
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
      }
    }
  }


 const handleGoogleLogin=async(credentialResponse)=>{
    const details=jwtDecode(credentialResponse.credential)
    console.log(details);

    const result =await googleLoginApi({username:details.name,email:details.email,password:'googlepassword',photo:details.picture})
    console.log(result);
    if (result.status == 200) {
      toast.success('Login sucessful')
      sessionStorage.setItem("existingUser", JSON.stringify(result.data.existingUser))
      sessionStorage.setItem("token", result.data.token)

      setTimeout(() => {
        if (result.data.existingUser.email == 'admin@gmail.com') {
          navigate('/admin-home')
        } else {
          navigate('/')
        }
      }, 2500)

    } else if (result.status == 401) {
      toast.warning(result.response.data)
      setUserDetails({
        username: "",
        email: "",
        password: ""
      })
    } else if (result.status == 404) {
      toast.error(result.response.data)
      setUserDetails({
        username: "",
        email: "",
        password: ""
      })
    } else {
      toast.error('something went wrong')
      setUserDetails({
        username: "",
        email: "",
        password: ""
      })
    }
    
    
  }



  return (
    <>
      <div id='loginpage' className='flex justify-center items-center px-3'>

        <div className="md:grid grid-cols-3 w-full ">
          <div></div>
          <div className='flex justify-center items-center flex-col'>
            <h1 className='text-3xl mb-5 font-bold text-white'>BookStore</h1>

            <form className='w-full bg-gray-900 p-6 flex justify-center items-center flex-col' action="">

              <div style={{ width: '70px', height: '70px', borderRadius: '50%' }}
                className='border border-white flex justify-center items-center'>
                <FontAwesomeIcon icon={faUser} className='text-white fa-2x' />
              </div>
              {!register ? <h1 className='text-white mt-5 text-3xl mb-8'>Login</h1> :
                <h1 className='text-white mt-5 text-3xl mb-8'>Register</h1>}
              {/* username  */}
              {register && <div className='mb-5 w-full '>
                <input type="text" onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} placeholder='User Name' className='p-2 rounded placeholder-gray-600 bg-white w-full' />
              </div>}
              <div className='mb-5 w-full '>
                <input type="text" onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} placeholder='Email Id' className='p-2 rounded placeholder-gray-600 bg-white w-full' />
              </div>
              <div className='mb-2 w-full '>
                <input type="password" onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} placeholder='Password' className='p-2 rounded placeholder-gray-600 bg-white w-full' />
              </div>
              <div className='mb-5 w-full flex justify-between'>
                <p className='text-amber-300' style={{ fontSize: '10px' }}>*Never share your password with other</p>
                {!register && <p className='text-white underline' style={{ fontSize: '10px' }}>Forgot Password</p>}
              </div>
              {register ? <div className='mb-2 w-full'>
                <button type='button' onClick={handleRegister} className='bg-green-800 text-white w-full p-3 rounded'>Register</button>
              </div> :
                <div className='mb-2 w-full'>
                  <button type='button' onClick={handleLogin} className='bg-green-800 text-white w-full p-3 rounded'>Login</button>
                </div>}
              {!register && <p className='text-white'>-----------------or-----------------</p>}
              {!register && <div className='mb-5 mt-3 w-full'>
                {/* <button className='bg-white text-black w-full p-3 rounded'>Sign in with Google</button> */}
                <GoogleLogin width={'500px'}
                  onSuccess={credentialResponse => {
                    console.log(credentialResponse);
                    handleGoogleLogin(credentialResponse)
                  }}
                  onError={() => {
                    console.log('Login Failed');
                  }}
                />;
              </div>}
              {register ? <p className='text-white'>Are you a New User ? <Link to='/login' className='text-blue-400
          underline ms-2'>Login</Link></p> :
                <p className='text-white'>Are you a New User ? <Link to='/register' className='text-blue-400
          underline ms-2'>Register</Link></p>}

            </form>
          </div>

          <div></div>

        </div>
        <ToastContainer theme='colored' position='top-center' autoClose={2000} />
      </div>
    </>
  )
}

export default Auth