import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//register content-type =application/json
export const registerApi=async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqbody)
}

//Login

export const loginApi=async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqbody)
}

//Google Login
export const googleLoginApi=async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/google-login`,reqbody)
}

//get all books
export const homeBookApi=async()=>{
    return await commonApi('GET',`${serverUrl}/all-home-book`)
}

//----------user api---------
//upload a book 
export const uploadBookApi=async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/add-book`,reqBody,reqHeader)
}

//get all Books
export const getAllBookApi=async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/all-books`,'',reqHeader)
}