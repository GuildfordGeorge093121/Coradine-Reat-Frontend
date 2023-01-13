import React, { useState, useEffect, useContext } from 'react'
import { HiLockClosed } from 'react-icons/hi'
import { HiOutlineMail } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import { serverDomain } from '../../config/Config'
import CircularProgress from '@mui/material/CircularProgress'; 
import { context } from '../../context/ContextProvider'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [errorMessage, setErrorMesssage] = useState('')
    const {verifiedUser} = useContext(context)
    const navigate= useNavigate()


    useEffect(()=>{
        if(verifiedUser){
            navigate('/dashboard/applications')
        }
    },[verifiedUser])
   
    const handleSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
     
    
        e.preventDefault();
        const loginPermit = async ()=>{
            setLoading(true)
            const body={email,password}
            if(email.length!==0 && password.length!==0){
                try {
                    const poster= await fetch(serverDomain+'login',
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(body)
                        })
                    const status= poster.status
                    if(status===201){
                        setLoading(false)
                        const response= await poster.json();
                        console.log(response)
                        localStorage.setItem('accessToken', response.token.accessToken)
                        localStorage.setItem('refreshToken', response.token.refreshToken)
                        navigate('/dashboard/applications')
                    }
                    else if(status===401){
                        setLoading(false)
                        const response= await poster.json();
                        setHasError(true);
                        setErrorMesssage(response.message)
                    }
                    
                } catch (error) {
                    console.log(error)
                }
            }
        }
        loginPermit()
    }
  return (
    <div className="login-register">
        <div>
            <div className='form-container'>
                <div className="form-header">
                    <h3>SignIn</h3>
                </div>
                <p className="server-error-message">
                    {
                        hasError && errorMessage
                    }
                </p>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form-input-field">
                        <span className="icon"><HiOutlineMail/></span>
                        <input type="email" name="email" placeholder="example@email.com" value={email} onChange={e=>setEmail(e.target.value)} />
                    </div>
                    <div className="form-input-field">
                        <span className="icon"><HiLockClosed/></span>
                        <input type="password" name="password" placeholder="passowrd" value={password} onChange={e=>setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn blue-btn form-btn" disabled ={loading}>{loading? <CircularProgress size={'16px'} color= 'inherit'/> : 'Connect'}</button>
                </form>
                <p>
                    Don't have an account? <Link to='/register'>click here to signup</Link>
                </p>
            </div>
        </div>
    </div>
  )
}

export default LoginForm