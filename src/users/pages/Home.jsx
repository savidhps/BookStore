import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";
import { homeBookApi } from "../../services/allApi";
import { searchKeyContext } from "../../context/Contextshare";
import { toast, ToastContainer } from "react-toastify";




function Home() {
  const [homeBook, setHomeBook] = useState([])
  const { searchKey, setSearchKey } = useContext(searchKeyContext)
  const navigate = useNavigate()

console.log(searchKey);

  const getAllHomeBook = async () => {
    const result = await homeBookApi()
    // console.log(result);
    if (result.status == 200) {
      setHomeBook(result.data)
    }
  }

  const handleSearch = () => {
    const token = sessionStorage.getItem("token")
    if (searchKey == "") {
      toast.info("please title of book")

    } else if (!token) {
      toast.info('please logini')
      setTimeout(() => {
      navigate('/login')
      }, 2500);
    } else if (searchKey && token) {
      navigate('/allbooks')
    } else {
      toast.error("something went wrong")
    }
  }


    // console.log(homeBook);


    useEffect(() => {
      getAllHomeBook()
    }, [])
 
  return (
    <>
      <Header />
      <header className="flex justify-center items-center">
        <div id="main" className="flex justify-center items-center w-full">
          <div className="md:grid grid-cols-3 w-full">
            <div></div>
            <div className="text-white flex justify-center items-center flex-col px-5">
              <h1 className="text-5xl">Wonderful Gifts</h1>
              <p>Give your Family and friends a Book</p>

              <div className="flex mt-10 w-full">
                <input className="py-2 px-4 bg-white text-black rounded-3xl placeholder-gray-400 w-full" type="text" placeholder="search box"
                  onChange={(e) =>setSearchKey(e.target.value)} />
                <FontAwesomeIcon onClick={handleSearch} className="text-blue-800" style={{ marginTop: '11px', marginLeft: "-30px" }} icon={faMagnifyingGlass} />
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </header>

      {/* new arrival  */}
      <section className="flex justify-center items-center flex-col md:p-10 md:px-40 p-5">
        <h2 className="text-center">  NEW ARRIVALS</h2>
        <h4 className="text-center">Explore Our Latest Collection</h4>
        <div className="md:grid grid-cols-4 w-full mt-5">
          {
            homeBook?.length > 0 ?
              homeBook?.map((item, index) => (
                <div className="p-3" key={index}>
                  <div className="p-3 shadow">
                    {/* add image url  */}
                    <img src="data:image/jpeg;base64,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
              // K93Gq4NHg25WSO2N+p1Z+/1CX9Kv7lh+IBoU2UHPFQRmayRJ4l0KepOCUeSpQayyllScfNm5icOXYb+LBe2nmnk4CZV8o3j97yOfjmo57hxf4IOzeP3tMsfdzbX4tPNRwz1KmW9dg8KalHZP+5z+Kwxo4jKOD2lvgTZZpR0To6WPIs2C35b/ADHdpD/qH/7f8Qnm+Ni6JVgiUxhX5c+U5dZjhz8OqhpfNF/iw1abVlujhyykKu7DpcfeBLQ0cYnmppNR1UUympZPD1V8uSCng31Mz2MsDoOE8AFFQbtpFjywx1GTJ34MupU8lOXEvzQDfKREqWm4qkVLKo5JapbbUUadBzjlDSSNRyjnyVai26NEpxStsSpTLSWuBBHAoarZjjJSVpjUhggZG+i06gK2GfJD4ZGLP7P6bPvkxp+vD
              // +6GeyM5fNW/6zN5mT/wPRf0v7snWU64IAEACANnsriMtbLweI8xcfdX9PKpUYfaGPVivyNrtDlYx1X8bmbseBN/lKvzUlffgwdHc5KHZOx3ZmvnoAH8JLT4cE8ErhQuuhozX57mDt4BrmUG+7TEebjJJWbLSaiux0ekuUZZZcv/AINbblAUcNlpjKJAcRqR1KvyrTD3TH0k3mz3PfyLWHBGDg67k/4lSjfhfQom0+p2/q/5OZ7P4nJXbyd3T56fOFlwy0yR1+tx68T9Nzo9rYDPWpVODSS49G94StOSFyTOX0+fTinDz4OQxtbO97/icT5cPkscnqdnaxQ0QUfI13Oy1zWBG6LbQRduSAyPlCu4nfYxJasPh173+ebKVWmfZ2aWc8xIkAwBaZ5qDXuIvjL/AN0vkgwLC6lVaCJlhgkCwmdUobxaQ8z05IyfG5LkdkoAH8ZJ7w+IQTe2hUqdRIWteRvy8vQncMxrtGQvNXMA4iHMk6EEeKlzqXeypOlBu6qtvMzMfUc5/fiQAO7pAEAKqbbe5swxjGFR4K6gWAgAQAIAEACAFYwnQE+AlNK+BNpcsQiNUh2Oo1SxwcLFpBHiE06dilFSi4s1MfWxGIAJpnKNMrTB69VdN5J8oyYYYMDaUt/mVtn7TqUC4Ni+ocOIUIZJQ4LM3TwzJWVa9UvcXO1cST5qDbbtl0IqEVFcI06faGsGZZabRmIl35FWrPOqMr6DC5X+BuF27Xa0sBDpm5GY3ufFEc00q5HPo8Mpant+DOlzncS4nhrPRVbtmr3Yx9DpO0G1SKYpCz3NGePw2u1as2Slp7nK6Pprn4j4XHqcwsh1h1Kk5xhoJPIXTSb2QpTUVcnRJicG+nGdpbOkpyg48ojjywyfA7IFEmKgBEDFQIEACABAAgAQMvbHwgqPMiQxpflGroFm+asxRUmZupyuEVW1urNHZmJrb+mHgsY6YYBlbEG0fmrccp6lZlz48Pgycd2u/JqdoMEKtIvaBmaMwI1I4hW5oKUbRk6PM8WXTLhnObCotdVlwlrGueRwOXRZsSTlbOp1c3HHUeW0iucfUL95mOaZ6DpHLoo65XqLfAxqOitiLEVy9xc6JcZMKLlbslCChFRXCI0iYSgCfA4s0nh7YkcDpClGTi7RXlxLJFxZaftYid2ynTJ1c0d6/InTyU/FfZUUrpV
              // /vbfo+DPLpuqjTVbCIGW9lPIrU4JHfaPmFPG/eRR1CTxSvyZ0fbEfwm/3fZaup+FHM9m/zH8jkViO0EoAJQAIEEoGKgQIAEACALGAxrqT87YnSDoR1UoTcHaK8uGOWOmRq4PaT6+JpFwAAJgDwKujkc8isx5OnjhwSSNPs5jM28pHVr3Ef2lxVuGfMTJ1uKtORd0ilTwW6rV2j3TSe5vgeHkoKOmTXoXyzeLig3zqVmJs1rDVYKnuTf04+cLPjSclqOhn1rG9HJvYXEv9p3bC19LiGtaGtEaWHBaYyfiUt0c2eOHga5KpfN2yHtRhGU3MqMa0TMiBlnnGijngotSRZ0GSWROEma+0WMOGzPaCA1roFr20PBXTScLZiwuaz1F92huxSyrQvTaBJblAtH5oxVKPAdVqxZfibfJV7N1GFz6bWABv4jdzrwZ/JQwtbxSL+thNRUpS57djNx+zQ7FmkywdDjHAES6FVPHeTSjVh6jT02uW9F/HO9nfSpUGC93WlzhMa+qsl7jUYozYl48ZTyv5eQ3a7qRxFHJGcVG5o0jMNeqMunXGubH0yyLDPVxTon7Yfy2/3/ZS6j4UQ9m/G/kQPwTcLQ3kA1TAkicpPAA8lFwWOF9yazPqc2i/dF2jXa7Cg1QBVIsIAdM2McAQibTx+9yGHHKPUNY/hLZwxZhR7OBmLWmYEutJ14qdVj9wpWRS6j/3cWZLDRq16QibQ8kBuZ40kBU+5KaRsfi4sM39u9I1NrONN7CbUIhwDWkTexEaK3I3Fq+DH06U4SS+PtuclXLczsohuY5RybNvksbq9jtQvStXIxIkCABACIA0
              // +zrf9Qw8sxPQBpVuH40ZetdYX67EOBxxp1hUGmYyObSbqMZ6ZaieXCp4tH7s7PGta6m54v8Aw3wRxBbK3ySas4WJyjNRfmv7nJdn8C2tUh3utEkc+ngsWGClKmdrrMzxQuPLNavVc3F06TO6wR3W2BkGSY1VzdZVFcGOEFLppZJbv1Dtl7tPxP0R1PCD2Z8Ui9tL/wBmf/zb9lZP+V9DPg/+19WM7J/yP9zvsl0/wEvaH876Gf2T/m1fD/kVX0/LNPtH+XEsioBjzPFkDxgH7KV/+4pcW+jVeY3tXUqNyltmkEOIF/AnWEdQ5LdEvZ6hK1LlHPbMB31M/wD2N/yCzQ+JfM6WevDkvRnT9qnQymToKgPpdauo4XzOT7PVykvQt7ZLtyXU4JEOBgG3MTxhWZG9Noo6ZRWVKfHHkcM97nGSSSeOpK59t7s9CkoqlsbnZnaha4UXXaT3f6Ty8FowZKek5/XdMpR8SPI/tXgwxzarbFxvHMXDvFHURSepEfZ+VyTxy4NPYe0PaKZa8AuFncnA8VbinrjTMnVYPAnqjx2OV2rhhTqvYNAbeBAI+qyZI6ZNHZ6fI8mNSZVUC0EAIgC5gcYGBzXMD2vEEEwbcjwU4S08qynNic2mpU0OOPDWltJmTMIc4uLnRyBtA8k9dL3VRHwHJp5HdcbUiiVWaToez+2gwbqoe7+E8p4HotOHMltI5nWdI5vXj5HV6QoVN9RqU8pmWk8+Aj5JtaJaosUJPNj8PLF350VsX2hc4hzWNa4fi950cp4BQlnb3SLcfQRimpNtfgj2pts1mhpY0ddT5Tolky6lVEsHRrFLVbY7Ebec6jucgFg0uk6Dp5JvM3HTQodEo5fEv6CbL266iwsDA65IMxrzSx5nCNUGfo45Z6ror7M2m6i8uABzajTjw5KMMjg7Leo6dZYqLfAbR2m6q8PgNI0jWRoSUTyOTsMPTrFHTdl6n2ldly1KbX8J0nxEFWLqHVNGd+z46rhJoz6m0nFzSGtaGuDg1ogSOfNVvI74NK6eKi0222qtk+19tOrtDS0NAM6zJUsmVzVUV9N0iwtu7H7N2/UpNykB7RpNiOgPJEM8oqhZ+hhkerhkWM2sXTkpspzqWjvH/clLLfColi6XT8Um68+B+D2uGHM6ixzx+P3T4nhPVOOWt6Fk6TUtKm0vIjxe2KlR4ccsAQGxLYOszqlLLKTslj6SGOGlfcs4fb+7aRTosaTqQTE+B/NSWbSqSKp9D4krnNsya1UucXOMlxknqVS3btm2MVGKiuEMSGCAGCoEAKHBAxUCFQAIARAxUCBAAgAQMECBAAgAQAIASUAGYIATMEAGYIAMwQAsoAVAAgCugBEAKCgBc5QA7eIAXe9EAG8QAu8CADeBACbxABvUAJvUAIahQAZigBchQAopdUAOFIIAUUhyQA7ddEALuuiADddEAG66IAN2gLG5OiAENPogBu7CADdoATdIATdIATdlACZCgAylAChh5IAUUigBwpIAeKY5IAeGIAcKaBChgQA4BACoARAAgAQAIAEAJlQAhCBjUAEIAIQAQgAhAAgAQAIEODUAOyoAVAAgBEACABAAgAQAIAEACABAH//Z"
                      alt="" style={{ width: '100%', height: '300px' }} />
                    <div className="flex justify-center flex-col items-center mt-3">
                      <p className="text-blue-700">{item?.title}</p>
                      <h3>{item.author}</h3>
                      <p>$ {item.price}</p>
                    </div>

                  </div>
                </div>
              )) :
              <p>Loading..</p>
          }
        </div>

        <div className="flex justify-center items-center my-5">
          <Link to='/allbooks'> <button className="px-3 py-2 bg-blue-900 border text-white hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white">Explore More</button></Link>
        </div>

      </section>

      {/* Author  */}

      <section className="flex justify-center items-center flex-col md:p-10 md:px-40 p-5">
        <div className="md:grid grid-cols-2 w-full">
          <div>
            <div className="flex justify-center items-center flex-col">
              <h3 className="text-center">FEACTURED AUTHOR</h3>
              <h3 className="text-center">Captivate with every word</h3>
            </div>
            <p className="mt-5 text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos cum consequatur incidunt fugit deleniti ad rem aut perferendis ea qui? Quod rerum impedit animi molestiae incidunt dolores libero ullam. Blanditiis!

            </p>
            <p className="mt-5 text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos cum consequatur incidunt fugit deleniti ad rem aut perferendis ea qui? Quod rerum impedit animi molestiae incidunt dolores libero ullam. Blanditiis!

            </p>
          </div>

          <div className="px-10 pt-8">
            <img src="data:image/jpeg;base64,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" alt=""
              className="w-full" />
          </div>
        </div>
      </section>

      {/* Testimonial  */}
      <div className="flex justify-center items-center flex-col md:p-10 p-5">
        <h3>TESTIMONIAL</h3>
        <h3 className="text-2xl"> See what other Are saying</h3>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJC_a0xyp5wz-1bsSEG1CfMxYqLRwrGs5Jg&s" alt="no Image"
          style={{ width: '150px', height: '150px', borderRadius: '50%' }} className="mt-5" />
        <h6 className="mt-3">Teresa Josep</h6>
        <p className="mt-3">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum perspiciatis nostrum libero voluptatum nisi, eaque et molestiae maxime molestias officia dolorum magnam corporis minima enim placeat ducimus deserunt fugiat recusandae.

        </p>
      </div>
      <ToastContainer theme='colored' position='top-center' autoClose={2000} />

      <Footer />
    </>
  );
}

export default Home;