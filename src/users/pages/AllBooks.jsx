import { useContext, useEffect, useState } from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getAllBookApi } from '../../services/allApi';
import { searchKeyContext } from '../../context/Contextshare';


function AllBooks() {
    const [status, setStatus] = useState(false)
    const [token, setToken] = useState("")
    const [allbooks, setAllBooks] = useState([])
    const [tempArray, setTempArray] = useState([])
    const { searchKey, setSearchKey } = useContext(searchKeyContext)
    console.log(allbooks);



    const getAllBooks = async (searchKey, tok) => {
        const reqHeader = {
            "Authorization": `Bearer ${tok}`
        }
        const result = await getAllBookApi(searchKey, reqHeader)
        if (result.status == 200) {
            setAllBooks(result.data)
            setTempArray(result.data)
        }
    }
    // console.log(allbooks);

    const filter = (data) => {
        if (data == "No-filter") {
            setAllBooks(tempArray)
        } else {
            setAllBooks(tempArray.filter((item) => item.category.toLowerCase() == data.toLowerCase()))
        }
    }


    useEffect(() => {
        if (sessionStorage.getItem('token')) {
            const tok = sessionStorage.getItem('token')
            setToken(tok)
            getAllBooks(searchKey,tok)
        }
    }, [searchKey])

    return (
        <>
            <Header />
            {/* when the user is loged in  */}
            {token && <div>
                <div className='text-center mt-4'>
                    <h1 className='text-3xl font-medium'>Collections</h1>
                    <input type="text" value={searchKey} onChange={(e) => setSearchKey(e.target.value)} placeholder='Search by title ' className='rounded border border-gray-400 px-5 py-2 mt-4 mb-5 md:w-1/4 1/2 shadow' />
                    <button className='bg-blue-900 shadow text-white px-3 py-2 ms-3 border hover:text-blue-900 hover:bg-white hover:border'>Search</button>
                </div>

                <div className='md:grid grid-cols-[1fr_4fr] md:py-10 md:px-20 px-5'>
                    <div className=' '>
                        <div className='flex justify-between'>
                            <h1 className='text-2xl font-medium'>Filters</h1>
                            <span className='md:hidden' onClick={() => setStatus(!status)}><FontAwesomeIcon icon={faBars} className='me-3' /></span>
                        </div>
                        <div className={status ? 'md:block' : 'md:block justify-center hidden'}>
                            <div className='mt-3' onClick={() => filter('No-filter')}>
                                <input type="radio" id='No-filter' name='filter' />
                                <label htmlFor="No-filter" className='ms-3'>No-filter</label>
                            </div>
                            <div className='mt-3' onClick={() => filter('Literary')}>
                                <input type="radio" id='Literary' name='filter' />
                                <label htmlFor="Literary" className='ms-3'>Literary Fiction</label>
                            </div>
                            <div className='mt-3' onClick={() => filter('Philosophy')}>
                                <input type="radio" id='Philosophy' name='filter' />
                                <label htmlFor="Philosophy" className='ms-3'>Philosophy</label>
                            </div>
                            <div className='mt-3' onClick={() => filter('Romance')}>
                                <input type="radio" id='Romance' name='filter' />
                                <label htmlFor="Romance" className='ms-3'>Romance</label>
                            </div>
                            <div className='mt-3' onClick={() => filter('Mystery')}>
                                <input type="radio" id='Mystery' name='filter' />
                                <label htmlFor="Mystery" className='ms-3'>Mystery/Thriller</label>
                            </div>
                            <div className='mt-3' onClick={() => filter('Horror')}>
                                <input type="radio" id='Horror' name='filter' />
                                <label htmlFor="Horror" className='ms-3'>Horror</label>
                            </div>
                            <div className='mt-3' onClick={() => filter('Auto')}>
                                <input type="radio" id='Auto' name='filter' />
                                <label htmlFor="Auto" className='ms-3'>Auto/Biography</label>
                            </div>
                            <div className='mt-3' onClick={() => filter('Self')}>
                                <input type="radio" id='Self' name='filter' />
                                <label htmlFor="Self" className='ms-3'>Self-Help</label>
                            </div>
                            <div className='mt-3' onClick={() => filter('Politics')}>
                                <input type="radio" id='Politics' name='filter' />
                                <label htmlFor="Politics" className='ms-3'>Politics</label>
                            </div>


                        </div>


                    </div>

                    <div>

                        <div className="md:grid grid-cols-4 w-full mt-5">
                            {
                                allbooks?.length > 0 ?
                                    allbooks?.map((item,index) => (
                                        <div className="p-3" key={index}
                                            hidden={item?.status == "pending" || item?.status == 'sold'}>
                                            <div className="p-3 shadow">
                                                <img src={item.imageurl
                                                } alt="" style={{ width: '100%', height: '300px' }} />
                                                <div className="flex justify-center flex-col items-center mt-3">
                                                    <p className="text-blue-700">{item.author.slice(0, 20)}..</p>
                                                    <h3>{item.title.slice(0, 20)}..</h3>
                                                    <Link to={`/view-books/${item?._id}`}>
                                                        <button className="px-3 py-2 bg-blue-900 border text-white hover:border hover:border-blue-900
                                         hover:text-blue-900 hover:bg-white w-full">View Book</button></Link>
                                                </div>

                                            </div>
                                        </div>

                                    ))
                                    :
                                    <p>NO books</p>
                            }
                        </div>

                    </div>
                </div>
            </div>
            }

            {/* not Logged in */}
            {!token && <div className='grid grid-cols-3 py-10'>
                <div></div>
                <div className='flex justify-center items-center flex-col w-full'>
                    <img src="https://cdn-icons-gif.flaticon.com/17702/17702103.gif" alt="" className='w-1/2' />
                    <p className='mt-5 text-2xl'>Please <Link className='text-red-700 underline' to='/login'>Login</Link> to Explore more</p>
                </div>
                <div></div>
            </div>}


            <Footer />
        </>
    )
}

export default AllBooks