import React, { useEffect,useContext } from 'react'
import Header from '../../components/header/Header'
import { context } from '../../context/ContextProvider'
import GetUserHeader from '../../utilis/GetUserHeader';

const DashboardTemplate = ({children}:{children:React.ReactNode}) => {
    const {verifiedUser,setUser}= useContext(context);
    useEffect(()=>{

        if(verifiedUser){
            GetUserHeader().then((response )=>{
                console.log('fetch user', response)
                setUser({firstname: response.firstname, pic: response.pic})
            })
        }
    },[verifiedUser])
  return (
    <>
        <Header/>
        {children}
    </>
  )
}

export default DashboardTemplate