import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import { makePaymentApi, viewABookApi } from '../../services/allApi'
import { serverUrl } from '../../services/serverUrl'
import { loadStripe } from '@stripe/stripe-js';
import { toast, ToastContainer } from 'react-toastify'


function ViewBook() {
  const [modalStatus, setModalStatus] = useState(false);
  const { id } = useParams()
  const [viewBookDetails, setViewBookDetails] = useState('')
  const [token, setToken] = useState("")


  // console.log(id);


  const viewABook = async (id) => {
    const result = await viewABookApi(id)
    // console.log(result);
    setViewBookDetails(result.data)

  }

  const makePayment = async () => {
    // console.log(viewBookDetails);

    const stripe = await loadStripe('pk_test_51RSy07GbLKwtiywW9zdWyVygozSGVgRv6Mer8BlMxdnbOn70cNDnezime9AU0ZDORnTAId0IT3lMmlpr0LTkaIeI009hN8AJXh');
    //data to update in backend
    const reqBody = {
      bookDetails: viewBookDetails
    }
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    }
    const result = await makePaymentApi(reqBody, reqHeader)
    console.log(result);
    // console.log(result.data.existingBook);
    
    const sessionId=result.data.sessionId
    const response=stripe.redirectToCheckout({
      sessionId:sessionId
    })
    if(response.error){
      toast.error("something went wrong")
    }
  }

  useEffect(() => {
    viewABook(id)
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }

  }, [])

  return (
    <>

      <Header />

      <div className='p-10 my-10'>
        <div className='md:grid grid-cols-[1fr_4fr] border border-transparent shadow-2xl'>
          <div className='py-5 flex justify-center items-center'>
            <img src={viewBookDetails?.imageurl} onClick={() => setModalStatus(true)} />
          </div>
          <div>
            <div className="flex justify-center items-center flex-col">
              <h1 className='text-3xl'>{viewBookDetails?.title}</h1>
              <p className='text-blue-600'>{viewBookDetails?.author}</p>
            </div>
            <div className="md:grid grid-cols-3 ps-2 mt-5 md:ps-10">
              <div>Publisher : {viewBookDetails?.publisher}</div>
              <div>Language : {viewBookDetails?.language}</div>
              <div>Number Of pages : {viewBookDetails?.noofpages}</div>
            </div>
            <div className="md:grid grid-cols-3 ps-2 pb-2 md:ps-10">
              <div>Seller Mail : {viewBookDetails?.userMail}</div>
              <div>Book Price : ${viewBookDetails?.price}</div>
              <div>ISBN : {viewBookDetails?.isbn}</div>
            </div>
            <div className='ps-2 pb-2 mt-3 md:ps-10'>
              <p className='text-justify pe-5'>{viewBookDetails?.abstract}Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta ratione inventore enim non sapiente molestiae repudiandae? Sequi maiores cumque, necessitatibus quaerat assumenda similique consequatur odio reprehenderit, dicta temporibus officiis.
                Earum illum assumenda officia excepturi, sequi ex itaque suscipit similique quos saepe, voluptatibus corporis qui neque enim? Facere illum ratione, consequuntur doloribus recusandae deserunt ut distinctio quis error, earum laudantium?
                Libero error voluptatibus sunt minus dicta nesciunt quia alias provident reprehenderit laboriosam aspernatur culpa vel, quaerat ex eligendi ab quae illum velit, enim animi impedit unde modi hic! Sequi, animi!</p>
            </div>
            <div className="flex justify-end items-end my-5 px-5">
              <Link to={'/allbooks'}>
                <button type='button' className='px-4 py-2 bg-blue-600 text-white border border-blue-600 hover:bg-white hover:text-blue-600 me-5'><FontAwesomeIcon icon={faBackward} /> Back</button>

              </Link>
              <button onClick={makePayment} type='button' className='px-4 py-2 bg-green-600 text-white border border-green-600 hover:bg-white hover:text-green-600'>Buy ${viewBookDetails?.dprice}</button>
            </div>
          </div>
        </div>
      </div>

      {modalStatus && <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

        <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
              {/* tittle  */}
              <div className="bg-gray-900 p-2 flex  justify-between  sm:px-4">
                <h1 className='text-2xl text-white'>Deatiled View </h1>
                <FontAwesomeIcon icon={faXmark} onClick={() => setModalStatus(false)} className='text-white text-2xl' />
              </div>

              {/* body of modal  */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex justify-center items-center">
                  {
                    viewBookDetails?.uploadingImg.map((item) => (
                      <img src={`${serverUrl}/upload/${item}`} style={{ height: '300px', width: '200px' }} />
                    ))
                  }
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>}
            <ToastContainer theme='colored' position='top-center' autoClose={2000} />
      

      <Footer />

    </>
  )
}

export default ViewBook