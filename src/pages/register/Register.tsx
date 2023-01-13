import React from 'react'
import AuthArth from '../../components/autharth/AuthArth'
import Header from '../../components/header/Header'
import RegisterForm from '../../components/registerForm/RegisterForm'

const Register = () => {
  return (
    <>
        <AuthArth>
            <RegisterForm/>
        </AuthArth>
    </>
  )
}

export default Register