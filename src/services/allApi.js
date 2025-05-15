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

//----------user api---------
//upload a book 
export const uploadBookApi=async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/add-book`,reqBody,reqHeader)
}