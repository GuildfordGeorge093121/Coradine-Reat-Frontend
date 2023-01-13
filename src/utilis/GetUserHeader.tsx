import { serverDomain } from "../config/Config"

const GetUserHeader = async ()=>{
    const accessToken= localStorage.getItem('accessToken')
    const currentUser = await fetch(serverDomain+`user/${accessToken}`)
    const status = currentUser.status;
    if(status=== 200){
        const response= await currentUser.json()
        console.log('response',response.data.user )
        return response.data.user
    }
    return null
}

export default GetUserHeader