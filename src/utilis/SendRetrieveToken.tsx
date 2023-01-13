import React, { useContext } from 'react'
import { serverDomain } from '../config/Config';
const SendRetrieveToken = async () => {
    const refreshToken= localStorage.getItem('refreshToken');
    const accessToken= localStorage.getItem('accessToken');

    if(refreshToken && accessToken)
    {
        const userLogged = await fetch(serverDomain+`verify?accessToken=${accessToken}&refreshToken=${refreshToken}`)
        const response= await userLogged.json()
        if(userLogged.status===200){
            console.log(response.token)
            localStorage.setItem('accessToken', response.token.accessToken)
            localStorage.setItem('refreshToken', response.token.refreshToken)
            
        }
        else{
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
        }
        return response.verified
    }
    return false
}

export default SendRetrieveToken