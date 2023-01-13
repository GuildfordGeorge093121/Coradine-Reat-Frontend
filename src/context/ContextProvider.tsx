import React, { useContext, createContext, useState} from 'react'
interface ContextType{
    verifiedUser: boolean;
    setVerifiedUser:React.Dispatch<React.SetStateAction<boolean>>,
    user: {firstname: string, pic: string},
    setUser: React.Dispatch<React.SetStateAction<{firstname: string;pic: string;}>>
}
export const context= createContext({} as ContextType)

const ContextProvider = ({children}:{children: React.ReactNode}) => {
    const [verifiedUser, setVerifiedUser] = useState(false)
    const [user, setUser] = useState({firstname: '', pic:''})
  return (
    <context.Provider value={{verifiedUser, setVerifiedUser, user, setUser}}>
        {children}
    </context.Provider>
  )
}

export default ContextProvider