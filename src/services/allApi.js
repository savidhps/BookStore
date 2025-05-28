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

//get all jobs
export const getAllJobsApi=async(searchKey)=>{
    return await commonApi('GET',`${serverUrl}/all-jobs?search=${searchKey}`)
}

//----------user api---------------
//upload a book 
export const uploadBookApi=async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/add-book`,reqBody,reqHeader)
}

//get all Books
export const getAllBookApi=async(searchKey,reqHeader)=>{
    //query parameter baseurl?key=value
    return await commonApi('GET',`${serverUrl}/all-books?search=${searchKey}`,'',reqHeader)
}

//Api to view a book 
export const viewABookApi=async(id)=>{
    return await commonApi('GET',`${serverUrl}/view-books/${id}`)
}
//api to add application
export const addApplicationApi=async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/apply-job`,reqBody,reqHeader)
}

//api to get all user books
export const getAllUsersBookApi=async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/user-books`,"",reqHeader)
}

//api to get all user brought  books
export const getAllUsersBroughtBookApi=async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/user-brought-books`,"",reqHeader)
}

//api to delete a user books
export const deleteAUserBookApi=async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/delete-user-books/${id}`)
}
//api to make payment
export const makePaymentApi=async(reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/make-payment`,reqBody,reqHeader)
}

// --------------------admin--------------------------------------
//api to get all book -admin
export const getAllBookAdminApi=async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/admin-all-books`,'',reqHeader)
}

//api to approve a book
export const approveBookApi=async(reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/approve-book`,reqBody,reqHeader)
}

//api to get all users
export const getAllUsersApi=async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/all-users`,'',reqHeader)
}
//api to add all jobs
export const addJobApi=async(reqBody)=>{
    return await commonApi("POST",`${serverUrl}/add-job`,reqBody)
}
//api to delete a job
export const deleteJobApi=async(id)=>{
    return await commonApi("DELETE",`${serverUrl}/delete-job/${id}`)
}
//api to view application
export const getApplicationsApi=async()=>{
    return await commonApi("GET",`${serverUrl}/all-application`)
}
//api to update the profile
export const updateProfileApi=async(reqBody,reqHeader)=>{
    return await commonApi("PUT",`${serverUrl}/admin-profile-update`,reqBody,reqHeader)
}

