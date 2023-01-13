import React from 'react'
import AuthArth from '../../components/autharth/AuthArth'
import Header from '../../components/header/Header'
import LoginForm from '../../components/loginForm/LoginForm'
const Login = () => {
  return (
    <>
        <AuthArth>
            <LoginForm/>
        </AuthArth>
    </>
  )
}

export default Login