import React, { useState } from 'react'
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import EditProfile from '../components/EditProfile';

function Profile() {

  const [sellStatus, setSellStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseStatus] = useState(false)

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
                <input type="text" placeholder='title' className='p-2 bg-white rounded placeholder-gray-400 w-full' />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Author' className='p-2 bg-white rounded placeholder-gray-400 w-full' />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='No of pages' className='p-2 bg-white rounded placeholder-gray-400 w-full' />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Image Url' className='p-2 bg-white rounded placeholder-gray-400 w-full' />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Price' className='p-2 bg-white rounded placeholder-gray-400 w-full' />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Discount price' className='p-2 bg-white rounded placeholder-gray-400 w-full' />
              </div>
              <div className="mb-3">
                <textarea rows={5} placeholder="Abstract" className='p-2 bg-white rounded placeholder-gray-400 w-full'></textarea>
              </div>
            </div>

            <div className='px-3'>
              <div className="mb-3">
                <input type="text" placeholder='Publisher' className='p-2 bg-white rounded placeholder-gray-400 w-full' />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Language' className='p-2 bg-white rounded placeholder-gray-400 w-full' />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='ISBN' className='p-2 bg-white rounded placeholder-gray-400 w-full' />
              </div>
              <div className="mb-3">
                <input type="text" placeholder='Category' className='p-2 bg-white rounded placeholder-gray-400 w-full' />
              </div>

              <div className="mb-3 flex justify-center items-center mt-10">
                <label htmlFor="imageFile">
                  <input id='imageFile' type="file" style={{ display: 'none' }} />
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7_Rd3yDTcIPmE0Pe4sLXNpD6ElsqvvVofQ&s" alt="no image"
                    style={{ height: '200px', widows: '200px', borderRadius: '200px' }} />
                </label>
              </div>
              <div className='flex justify-center items-center'>
                <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEhAPDw4NDw0QDxAQDhAQEA8SDw4QFREWFhcVFRYYHSosGB0lGxYVITIhJyovOjExFx8zRDMtQyktLysBCgoKDg0NGhAPFy0dHSU1LS8tLS0tLSstLSstKy0tMC8tLS0tNy8tLS0vLS0rLS0rLSsrLS0tKystKy0tLSsrK//AABEIALMBGgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQQDBQcGAv/EAEkQAAICAQIDAwQPBAgFBQAAAAECAAMRBBIFEyEGMUEiUXOzFBYXIzIzNVNUYXGRk5TRNIGy0iRCUmJygtPwB0OhseEVJWPBwv/EABgBAQEBAQEAAAAAAAAAAAAAAAABAgME/8QAHhEBAAMAAwADAQAAAAAAAAAAAAECERIxMgMhQQT/2gAMAwEAAhEDEQA/AEREy85ERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREgwNxo+zWruXfXUGXOM8ysdcA+J+sTP7T9f8yv4tX6z2/ZH4g+kP8CTdy46RSJhy32n6/5lfxav1j2n6/5lfxav1nUojF4Q5b7T9f8AMr+LV+se0/X/ADK/i1frOpTRcU441Dv0RqkepWIUlhuDMy/C7woQ589iiMOEPFe0/X/Mr+LV+se0/X/Mr+LV+s6bp7d6q+0ruGQDtzjw7iZkjDhDl3tP1/zK/i1frHtP1/zK/i1frOoxGHCHLvafr/mV/Fq/WabV6dqneqwYsQ7XGQcHAPePtE7VONdrbca/Vj/5R6tYmGbViIVYmNHzPvMjCYiICIiAiIgIiICIiAiIgIiICIiAiIgIiICQZMgwOrdkfiD6Q/wJMH/ELWW0cP1V9Fj1XVIrVuuMg71HcQQehPeJm7IfEH0h/gSR234Xdq9FqNLQE5tyqqmxiqLh1YkkA+A80sO1emq4zx59JqOHKLmeu9SNXU3llFIUV2g96E2MF6nB3Yx4zejj1PshNGy3JqLOYaw6YRwiqzbXzg9GHcfP5jj41nDBZpeQ2m07hxUt9LnCOoK78Mo7wASp6dQO7w85Z2Usq2irUFDXxDT38Prtue2yijC1ahdzEkgq9h25IGF698rTfavtPplqstL2V1o9dNluwFabrdoQHvycungQNwzjrNX2W7WodPoRrLLBqdTRZYbnqKUOyKzuN4AUEKCcfVMug4RrdLZqqqU0l2i1Oos1KNbY626d7MFl5ewiwBhlfKWanUdidRdouGaKw1r7GXUV6p0fOFs01tQNeQN2DYD1x0Bgb/i/aKv2OzVWWU236S+/Qu1YHN5dRs8kOD12jdtYAkZOOhxHBu0lZ01b2PZbbTodNqNayIW5XMpD5bHeSMttUE4wcdRmjxns5qNVVpK25Sto6bs7XOLtQ2lahMdPJTy2Y569AMHvnzwHs1qdJRqql5TPqtPQMsx206hNIunfPTyq/IVhjr1IwIG5u7U6NVttFheik0rddWpeus2hWTJHf0dCcZwGGcT64Z2jo1C2mpdRmi9dPbXZU1VqWttIBR8HGHU57sH7Z4PhvDNRTTqqNPo9Hr9FRaldrezbdOdQ+kRFw9fLI3g1gN5WG2gHIE9TwPTi7VjiVTbKNXodPZqKG+MTUqCKy3mPLsZSP7i+aB6ucR7Zn/3DV+lX1aTt04h20+UNX6VfVpJLF+lWkywJVolpZHJIkyBJgIiICIiAiIgIiICIiAiIgIiICIiAiIgJBkyDA6r2P+Ib0h/gSbTX6lqkLhN4XvAOGx9XTrNV2O+Ib0p/gSbfU/B/zJ/GJfx2r5YeF8QXUJzFBGCVZSckEf8AjEr8ZtopKal6EsuTclT7V5iK2N21iMqDgZ/dNdoP6Nq3p7qrvKr8wPUj/wDS/dMvabrQ7+G9EX7A3U/vOfuEab9Nzo7zYiuV2b1DAZycEZGek0HajW61GKacbFZa60s2g++2l03Ekf1W5PQeDse5Zbo1zZ02mrwGNCPY5GdiBB0A85/+5Or1JrvrR1rcuj+x7WQb638VJHgcDux4RprY6DRV0IErUAYXc2F3WFUVAzkDym2qoz9Qliedp4jqrdMdQjVKV3sw2E7lXwHm6fbn6pm0vGWtNKKNrNVzbmCliozjCj6z5+4RpyhsP/StPusbkVBrTuuwoAubGM2AfDOABk57pl0+jqrNhrqrrNrmy0oiqbbCACzY+EcAdT5po+I8Q1lYuKqeXXtZLHrxvU4BBHnBPf5gZt67i4pKOdrrvY7V6ptH3HJX/rGrq5OH9tflDV+lX1aTt84h21+UNX6VfVpEs36VKJZWVaJaWRyfQkyJMBERAREQEREBERAREQEREBERAREQEREBIMmQYHU+x3xDelP8CTY8TtZVGyt7GLIcKuegcE9fsE13Y34hvSn1aTey/jtXy1HGeHnUCl0yrpYvUgqwQnqeviMAz47SVM1Ipqrsc7l+Cpwqj6/um6iMXGg0uldbKNQEfApWm9CpDoQuNwH9YdB3TNq9K119dpVhTQpIJU7rLD4Be/A6dZl13aDTUsEazdYXCbUBYhiGIzju+A33TGvHRzGramxQFDK2GO/4efD+75z3juyMsTIV+FaexNFZU1bi0raAu05JYHGJT0ui1FPI1FdTM61mq+o+S2NxORnv7x3eYS5wntdpdQ9qKxXlDcWIOwgEqeuOhBHUeH3434P3RhxUaLHvVhZQ1VTKVIcje+Rg9B3DGe+VuzWmsrrZbDko71p/gVz1/eS3/SXuIV3MoFFi1vuBJZdwK+I/7TNUm0AZzjvPnPifvhc+33OIdtflDV+lX1aTt04h21+UNX6RfVpEs36VKJaWVaJaWRyfQkyJMBERAREQEREBERAREQEREBERAREQEREBIMmQYHUuxnxDelPq0m+mg7F/s7elPq0m/lh2r0Txvb/tK+mNGmq+HdufUbc81NMvRmQA5zkjqO4ZM9lOJ9u+MBr7XLJaEvvrRFa9LKbKELpzBu2srAE5ABw+PGVZXOzgN/II1FNT0G+yzkW6dqLi+UDOWXIxXhQDjAUTb6HVM2s1Gw84NUleotS2t0ZdjdFVT72QVI3HGc9JoRVZdW2opW1qLAMmxNJqa2RgGC++OjjvHRifDEvdmHNLEPiusbUWsacUbg627gqc5l69ThcfBJ6wiNVotNrmRqNTtKUW761ena9b7CVsDZ7sJ9hP1DHquyl+qpdaNUCEaijBz72t21gyqT1YnaCcDHlDzknznDdPpdJZY7VU0B62UMNNTUxAbcf+YWIwAMBfrz5sOk7TC8aqvdsFL6pgScrytPbtD7twOWIB7+uD39IHWJEx6ezeiP37lVvvGZkhonEO2vyhq/SL6tJ2+cQ7a/KGr9Ivq0kli/SnRLaypRLayOT6kyBJgIiICIiAiIgIiICIiAiIgIiICIiAiIgJBkyDA6j2J/Z29KfVpN/PP9iP2dvSn1aT0EsO1fJOB9t+HbOKaioFdtmq0moStgWR+ZXZvBA69RWw2jvyO7w73PJ9sOy9essrcqi2hcLayV2AFckAqwPnOD5z5sg1pzvSaNqOaKF0jbFp5lep1IXdQqqAupqtr8llUjDqQegzkgmZdHptPYljLptCh5+nDCq3U2U2BkvC5s2jGDu+CDjP1zFxDhWpo1B3utGoKlfZS6cI12duGZwGrc9MFSKv34mZTc7WqV32Ndp7GrXALKq35KjexXoGPwh8DpjoYZfbaeu5kp1NfDlrOpr5A0+pQO5VLOlrAbmHh1wM47+6eZ4xwn+lew9OG2OdDp3T/meXqbDbv6YBL9cjpgr9k9DxJ1VQNRYrrVa9tQtptss0+VbaMhiWwWBG5/AeaZ+AcPt1HF9MNiMmlrq1GstFSI2QjcpXZe87tpAz5+/GYHYqqwqqo+CqhR9gGBPqIhonEO23yhq/Sr6tJ2+cP7bfKGr9Kvq0kli/SpRLaypRLayOT6kyJMBERAREQEREBERAREQEREBERAREQEREBIMmQYHT+w/7O3pT6tJ6Cee7D/s7emPq0mxvTV7jy3p2bgRvByF8QMDvlh2p5hsJ8sAehGRNbt1uAN1QIVsnoctsXHTH9rf96/XPt/ZQV+tIbNm0k9FXAKk9PDyh9x+oVpj1HDG3b6n67XGxicFmAGSe/wDqgfrNDwHsfdSNVbbbUdZea+W6glKhXW6qT3Ek8x8n7OuZvGfVZKrZpySX2Asu4gMvhjwGQfv+ofQt1I3b7dNjZhcMBh9y+ceIP34789Bjyut7D3asompNNWnUoXepmOouIJLDuwoPT9PN7PhvDadMpSmsICdznqWdsAbmY9WOAB18wlNb9TsybtFu5nVgx28rBz/mB6fZJqt1R8nmaZm2YO1wWDjeC2Md24oMf3T54G2iUWGq2uAai+/3s9w2bu5uh648cTAE13i9B7u4fW+fD/B9xgbWcP7bfKGs9Kvq0natLzNo5mN4JyRjBGen78f9jOK9tvlDV+kX1SSSxfpTolxZTolxZHJ9SZEmAiIgIiICIiAiIgIiICIiAiIgIiICIiAkGTIMDpvYb9nb0x9Wk3HEtfVpq2vvcV0pt3uQSF3MFBOPDJHWabsL+zt6Y+rSbTi2mo1CNp7mXYxrZk3KCdriwAg+BKdfqzLDtTzCpqu1WhqDM952pbbS5Su1wjUgG0ttU7UTI3Oegz3z51faHQk6jT22MOVXabw1V6qyVhDYFbbizAtryFJPlgSjZ2Q4fyjQtllVXviMEuXLV3VV12VMzAkh1rQk/Czk7usz29mdA1motztt1aW13sr1q1gYV46gZ8jlgr16ZbvlaZNPqNBWdM45lT6i6yvTramprdrtpDbkcAjop6sMdR/aGfnh9nDb7WSna9ytqFdcW4DUW1paGB6dGarv+F0PUdZWPZDQHlBrbTZUz21sL1RubZqU1DWlUAUk2V1nG3b5I6S5wzgmiovOqqs9+dNQGzapVlu1J1DHH1O2AfNgdcCBVu1XCQpcnC1CweSt+7KX+xmUADLMbQFA6ljgjPQzPpOK8PXF1bsC48VvyOZqhRtZCPJbneSQRkHOcdZgXspw730owV7mZnsR6hYbTqvZauWx1ZbMFc5wABgz6HZrRYo9/sxVZuY86vGqc6n2V7706nnDf5O3xHd0gXD2o0ey2wPaa6rl07Mun1JDXNcaQlZCe+HmAr5OcH7RL+k4hXaWVC29Frd1ZHRlFikrkMBg4B6eHjPP6zsjoX9lGy5s6qzTvaxOlHWm7m1jHLw43E/DDEjpnHSbDR8MqptFyau0ZqqqerdpRVbykKqSAgIIBJwpA6d0DdTh/bb5Q1fpF9Uk7eDnqO7wnD+23yhq/Sr6tJJYv0qUS4sp6eXFkcn1JkSYCIiAiIgIiICIiAiIgIiICIiAiIgIiICQZMgwOmdhP2ZvTH1aTfW6dH+GiP8A4lVvP5/tP3zlPCO3j6NGp9iLZ5Zbdziv9VR3bT/Zl73VX+gL+YP+nLEutZiIdCt0FZUha6VPgTUhA6+bx8fvlY8Lbz6bIGF/oqYHd4Z7vqnhvdVf6Av5g/6cj3VX+gL+YP8AJGtcoev1eyoqGehWzjK6IsemMAEHp3yvRraMoeZWykjCnQOp6kr5vJJz/vM8z7qz/QF/MH+SPdWf6Av5g/yRpyh6N9VQuVNlOd2Co4fZt6b89P8AI/X/AA9+RnZafScwbkOm5JLeSdKB1UleuT4YI7p4n3Vn+gL+YP8AJHuqv9AX8wf5I05Q95Rw3BzZ7HdSACFoVS2BgZJJyP8AeZnHD6Bn3mnqcnyF6n7pzz3VX+gL+YP8ke6o/wBAX8wf5I05Q9hw3jhst5HLKYBwdpCkK7J0Ph8EHHmInLO23yhq/SL6tJv0/wCJeDkcOrBHceef5J5Pi+vOq1FupKcs2sG2bt23Cgd+Bnunl/m+P5aUmPltyk+W1beU6eW0lWgS2s9Lg+pMiTAREQEREBERAREQEREBERAREQEREBERASDJgwNfqqMnMqmibZ0zMJqga7kxyZsOVHKhda/kxyZsOVHKg1r+THJmw5UcqDWv5McmbDlRyoNUBTMtdUtcqfQrgfNSyws+FWZBCJkyBJgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiIESIiBEREBERAREQERECYxEQEmIgSIiICIiAiIgIiICIiB//Z" alt=""
                  style={{ widows: '70px', height: '70px' }} />

                <FontAwesomeIcon className='fa-2x shadow ms-3 text-gray-500' icon={faSquarePlus} />
              </div>
            </div>

          </div>

          <div className='flex justify-end mt-3'>

            <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-orange-500 px-3 py-2 text-sm font-semibold border text-white shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto hover:text-black hover:border">Reset</button>

            <button type="button" className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold border text-white shadow-xs hover:text-black hover:bg-white hover:border sm:ml-3 sm:w-auto">Submit</button>

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
          style={{width:"200px",height:"200px"}}/>
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
        style={{width:"200px",height:"200px"}}/>
        <p className='text-red-600 text-3xl'>no Purshse Yet</p>
        </div>

    </div>
      }



      <Footer />
    </>

  )
}

export default Profile