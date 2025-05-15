import React, { useEffect, useState } from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import EditProfile from '../components/EditProfile';
import { ToastContainer, toast } from 'react-toastify';
import { uploadBookApi } from '../../services/allApi';

function Profile() {

  const [sellStatus, setSellStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseStatus] = useState(false)
  const [bookDetails, setBookDetails] = useState({
    title: "", author: "", noofpages: "", imageurl: "", price: "", dprice: "", abstract: "", publisher: "", language: "", isbn: "", category: ""
    , uploadedImage: []
  })
  // console.log(bookDetails);
  const [preview, setpreview] = useState("")
  const [previewList,setpreviewList]=useState([])
  const [token,setToken]=useState("")



  const handleUpload = (e) => {
    console.log(e.target.files[0]);
    const fileArray = bookDetails.uploadedImage
    fileArray.push(e.target.files[0])
    setBookDetails({ ...bookDetails, uploadedImage: fileArray })

    const url = URL.createObjectURL(e.target.files[0])
    console.log(url);
    setpreview(url)
    
    const newArray=previewList
    newArray.push(url)
    setpreviewList(newArray)
  }

  const handleReset=()=>{
    setBookDetails({
    title: "", author: "", noofpages: "", imageurl: "", price: "", dprice: "", abstract: "", publisher: "", language: "", isbn: "", category: ""
    , uploadedImage: []
  })
  setpreview("")
  setpreviewList([])

  }

  const handleSubmit=async()=>{
    const {title, author, noofpages, imageurl, price, dprice, abstract, publisher, language, isbn, category
    , uploadedImage}=bookDetails
      if(!title|| !author|| !noofpages|| !imageurl|| !price|| !dprice|| !abstract|| !publisher|| !language|| !isbn|| !category
    || uploadedImage.length==0){
        toast.info("please fill the form compleatly")
      }else{
        const reqHeader={
          "Authorization":`Bearer ${token}`
        }
        const reqBody=new FormData()
        for(key in bookDetails){
          if(key !='uploadedImage'){
            reqBody.append(key,bookDetails[key])
          }else{
            bookDetails.uploadedImage.forEach((item)=>{
              reqBody.append('uploadedImage',item)
            })
          }
        }
        const result=await uploadBookApi(reqBody,reqHeader)
        console.log(result);
        
      }

  }

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
  })


  return (
    <>
      <Header />

      <div className=' w-full bg-gray-900' style={{ height: '200px' }}></div>
      <div style={{ width: '230px', height: '230px', borderRadius: '50%', marginLeft: '70px', marginTop: '-130px' }} className='bg-white p-3 flex justify-center items-center'>
        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="" style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
      </div>
      <div>

        <div className='flex justify-between px-25 mt-5'>
          <p className='flex justify-center items-center'>
            <span className='text-2xl font-bold'>Savidh Ps</span>
            <FontAwesomeIcon icon={faCircleCheck} className='text-blue-400 ms-3' />
          </p>
          <EditProfile />
        </div>
      </div>

      <p className='md:px-20 px-5 my-5 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum saepe maxime iste vitae officia vel quisquam quod recusandae error consequatur pariatur magni natus, sint corporis eveniet doloremque similique quaerat. Velit!
        Sed laudantium eos accusamus sit ab, eveniet qui possimus sunt omnis voluptate autem ducimus sint cum reiciendis eum atque error! Quibusdam laborum quae commodi nostrum possimus ea sint, voluptatem distinctio?</p>

      <div className='md:px-40'>
        {/* tab */}
        <div className='flex justify-center items-center my-5'>
          <p onClick={() => { setSellStatus(true); setBookStatus(false); setPurchaseStatus(false) }} className={sellStatus ? 'p-4 text-blue-600 border-l border-t border-r border-gray-300 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-300 cursor-pointer'} >Sell Book</p>

          <p onClick={() => { setSellStatus(false); setBookStatus(true); setPurchaseStatus(false) }} className={bookStatus ? 'p-4 text-blue-600 border-l border-t border-r border-gray-300 rounded cursor-pointer' : 'p-4 text-black border-b border-gray-300 cursor-pointer'} >Book Status</p>
          <p onClick={() => { setSellStatus(false); setBookStatus(false); setPurchaseStatus(true) }} className={purchaseStatus ?
            'p-4 text-blue-600 border-l border-t border-r border-gray-300 rounded cursor-pointer' :
            'p-4 text-black border-b border-gray-300 cursor-pointer'}>Purchase History</p>
        </div>
      </div>

      {/* Contents  */}
      {sellStatus &&
        <div className='bg-gray-200 rounded-lg mx-10 md:p-10 mb-10 '>
          <h1 className='text-3xl font-medium text-center pt-5 '>Book Details</h1>
          <div className='md:grid grid-cols-2 mt-10 w-full'>
            <div className='px-3 '>
              <div className="mb-3">
                <input type="text" placeholder='title' className='p-2 bg-white rounded placeholder-gray-400 w-full'
                  onChange={(e) => setBookDetails({ ...bookDetails, title: e.target.value })} value={bookDetails.title} />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Author' className='p-2 bg-white rounded placeholder-gray-400 w-full'
                  onChange={(e) => setBookDetails({ ...bookDetails, author: e.target.value })} value={bookDetails.author} />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='No of pages' className='p-2 bg-white rounded placeholder-gray-400 w-full'
                  onChange={(e) => setBookDetails({ ...bookDetails, noofpages: e.target.value })} value={bookDetails.noofpages} />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Image Url' className='p-2 bg-white rounded placeholder-gray-400 w-full'
                  onChange={(e) => setBookDetails({ ...bookDetails, imageurl: e.target.value })} value={bookDetails.imageurl} />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Price' className='p-2 bg-white rounded placeholder-gray-400 w-full'
                  onChange={(e) => setBookDetails({ ...bookDetails, price: e.target.value })} value={bookDetails.price}/>
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Discount price' className='p-2 bg-white rounded placeholder-gray-400 w-full'
                  onChange={(e) => setBookDetails({ ...bookDetails, dprice: e.target.value })} value={bookDetails.dprice}/>
              </div>
              <div className="mb-3">
                <textarea rows={5} placeholder="Abstract" className='p-2 bg-white rounded placeholder-gray-400 w-full'
                  onChange={(e) => setBookDetails({ ...bookDetails, abstract: e.target.value })} value={bookDetails.abstract}></textarea>
              </div>
            </div>

            <div className='px-3'>
              <div className="mb-3">
                <input type="text" placeholder='Publisher' className='p-2 bg-white rounded placeholder-gray-400 w-full'
                  onChange={(e) => setBookDetails({ ...bookDetails, publisher: e.target.value })} value={bookDetails.publisher}/>
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Language' className='p-2 bg-white rounded placeholder-gray-400 w-full'
                  onChange={(e) => setBookDetails({ ...bookDetails, language: e.target.value })} value={bookDetails.language}/>
              </div>
              <div className="mb-3">
                <input type="text" placeholder='ISBN' className='p-2 bg-white rounded placeholder-gray-400 w-full'
                  onChange={(e) => setBookDetails({ ...bookDetails, isbn: e.target.value })} value={bookDetails.isbn}/>
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Category' className='p-2 bg-white rounded placeholder-gray-400 w-full'
                  onChange={(e) => setBookDetails({ ...bookDetails, category: e.target.value })} value={bookDetails.category}/>
              </div>

              <div className="mb-3 flex justify-center items-center mt-10">
                {!preview ? <label htmlFor="imageFile">
                  <input id='imageFile' type="file" style={{ display: 'none' }} onChange={(e) => handleUpload(e)} />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7_Rd3yDTcIPmE0Pe4sLXNpD6ElsqvvVofQ&s" alt="no image"
                    style={{ height: '200px', widows: '200px', borderRadius: '200px' }} />
                </label>
                  :
                  <img src={preview} alt="no image"
                    style={{ height: '200px', widows: '200px', borderRadius: '20px' }} />
                }

              </div>
              {preview && <div className='flex justify-center items-center'>
                { previewList?.map((item)=>(
                <img src={item} alt=""
                  style={{ widows: '70px', height: '70px' }} className='mx-2'/>
                ))}
                {previewList.length<3&&<label htmlFor="imageFile">
                  <input id='imageFile' type="file" style={{ display: 'none' }} onChange={(e) => handleUpload(e)} />
                  <FontAwesomeIcon className='fa-2x shadow ms-3 text-gray-500' icon={faSquarePlus} />
                </label>}


              </div>}
            </div>

          </div>

          <div className='flex justify-end mt-3'>

            <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold border text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto hover:text-black hover:border"
            onClick={handleReset}>Reset</button>

            <button type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold border text-white shadow-xs hover:text-black hover:bg-white hover:border sm:ml-3 sm:w-auto"
            onClick={handleSubmit}>Submit</button>

          </div>


        </div>



      }

      {bookStatus && <div className='p-10 my-20 shadow rounded-lg '>
        <div className='bg-gray-200 p-4 rounded '>
          <div className='md:grid grid-cols-[3fr_1fr]'>
            <div className='px-4'>
              <h1 className='text-2xl font-bold'>Dracula</h1>
              <h2>Bram Stoker</h2>
              <h3 className='text-blue-600'>$13</h3>
              <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat modi mollitia facere, accusamus, exercitationem impedit architecto libero necessitatibus doloribus odio quae voluptates? Quidem dolorem a facere facilis et delectus?
                Corporis sapiente tempore distinctio eos iusto rem perspiciatis tenetur nihil porro quis voluptates est, blanditiis culpa itaque doloremque corrupti deserunt magnam pariatur! Nemo, soluta nobis maiores esse libero suscipit reiciendis?
                Dicta, quos illum ipsam voluptatibus, quae repellat molestias velit perferendis animi, earum dolorum quaerat in impedit vitae obcaecati assumenda sed mollitia eligendi! Exercitationem incidunt dicta officiis, laudantium excepturi neque voluptas.</p>

              <div className='flex '>
                <img src="https://st.depositphotos.com/2274151/2861/i/450/depositphotos_28617343-stock-photo-pending-stamp.jpg" alt="" style={{ width: '70px', height: '70px' }} />

                <img src="https://pngimg.com/uploads/approved/approved_PNG13.png" alt="" style={{ width: '70px', height: '70px' }} />

                <img src="http://clipart-library.com/images_k/sold-transparent-background/sold-transparent-background-10.png" alt="" style={{ width: '70px', height: '70px' }} />
              </div>
            </div>



            <div>
              <img src=" https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476788104/dracula-9781476788104_xlg.jpg" alt="no img" className='w-full' />
              <div className='flex justify-end mt-4'>
                <button className='px-3 py-2 bg-red-600 text-white hover:bg-white hover:text-red-600  hover:border hover:border-red-600 rounded-md'>Delete</button>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-center items-center flex-col'>
          <img src="data:image/jpeg;base64,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" alt=""
            style={{ width: "200px", height: "200px" }} />
          <p className='text-red-600 text-3xl'>no book yet</p>
        </div>

      </div>}

      {purchaseStatus &&
        <div className='p-10 my-20 shadow rounded-lg'>
          <div className='bg-gray-200 p-4 rounded'>
            <div className='md:grid grid-cols-[3fr_1fr]'>
              <div className='px-4'>
                <h1 className='text-2xl font-bold'>Dracula</h1>
                <h2>Bram Stoker</h2>
                <h3 className='text-blue-600'>$13</h3>
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur quaerat modi mollitia facere, accusamus, exercitationem impedit architecto libero necessitatibus doloribus odio quae voluptates? Quidem dolorem a facere facilis et delectus?
                  Corporis sapiente tempore distinctio eos iusto rem perspiciatis tenetur nihil porro quis voluptates est, blanditiis culpa itaque doloremque corrupti deserunt magnam pariatur! Nemo, soluta nobis maiores esse libero suscipit reiciendis?
                  Dicta, quos illum ipsam voluptatibus, quae repellat molestias velit perferendis animi, earum dolorum quaerat in impedit vitae obcaecati assumenda sed mollitia eligendi! Exercitationem incidunt dicta officiis, laudantium excepturi neque voluptas.</p>

                <div className='flex '>
                  <img src="https://st.depositphotos.com/2274151/2861/i/450/depositphotos_28617343-stock-photo-pending-stamp.jpg" alt="" style={{ width: '70px', height: '70px' }} />

                  <img src="https://pngimg.com/uploads/approved/approved_PNG13.png" alt="" style={{ width: '70px', height: '70px' }} />

                  <img src="http://clipart-library.com/images_k/sold-transparent-background/sold-transparent-background-10.png" alt="" style={{ width: '70px', height: '70px' }} />
                </div>
              </div>



              <div>
                <img src=" https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781476788104/dracula-9781476788104_xlg.jpg" alt="no img" className='w-full' />
                <div className='flex justify-end mt-4'>
                  <button className='px-3 py-2 bg-red-600 text-white hover:bg-white hover:text-red-600  hover:border hover:border-red-600 rounded-md'>Delete</button>
                </div>
              </div>
            </div>
          </div>

          <div className='flex justify-center items-center flex-col'>
            <img src="data:image/jpeg;base64,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" alt=""
              style={{ width: "200px", height: "200px" }} />
            <p className='text-red-600 text-3xl'>no Purshse Yet</p>
          </div>

        </div>
      }

      <ToastContainer theme='colored' position='top-center' autoClose={2000} />

      <Footer />
    </>

  )
}

export default Profile