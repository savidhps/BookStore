import React, { createContext,useState } from 'react'

 export const searchKeyContext = createContext("")
 export const adminProfileUploadStatusContext = createContext("")

function Contextshare({ children }) {
    const [searchKey, setSearchKey] = useState("")
    const [adminProfileUploadStatus, setAdminProfileUploadStatus] = useState({})

    return (
        <adminProfileUploadStatusContext.Provider value={{adminProfileUploadStatus,setAdminProfileUploadStatus}}>
            <searchKeyContext.Provider value={{searchKey,setSearchKey}}>
                {
                    children
                }
            </searchKeyContext.Provider >
        </adminProfileUploadStatusContext.Provider>
    )
}

export default Contextshare