import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { HiLockClosed } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";

import { serverDomain } from '../../config/Config'
const RegisterForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPasswaord] = useState("");
  const [role, setRole] = useState("admin");


  const [loading, setLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [errorMessage, setErrorMesssage] = useState('')
  const navigate= useNavigate()
  const handleSubmit= (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(
        firstname.length !==0 &&
        lastname.length !==0 &&
        email.length !==0 &&
        password.length !==0 &&
        role.length !==0
    ){
        const body={
            firstname,
            lastname,
            email,
            password,
            userrole: role
        }
        const registerUser = async ()=>{
            setLoading(true)
            try {
              const userRegistered= await fetch(serverDomain+'register',{
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                }
              })
              const status= userRegistered.status
              if(status===201){
                const response= await userRegistered.json()
                localStorage.setItem('accessToken', response.accessToken)
                localStorage.setItem('refreshToken', response.refreshToken)
                navigate('/dashboard/applications')
              }
              else if(status===400 || status===409){
                const response= await userRegistered.json();
                setHasError(true);
                setErrorMesssage(response.message)
              }
              setLoading(false)
            } catch (error) {
              console.log(error)
            }
        }
        registerUser()
    }
  }
  return (
    <div className="login-register register">
      <div>
        <div className="form-container">
          <div className="form-header">
            <h3>SignUp</h3>
          </div>
          <p className="server-error-message">
              {
                hasError && errorMessage
              }
          </p>
          <form action="" onSubmit={handleSubmit}>
            <div className="form-input-field">
              <input type="text" name="firstname" placeholder="First Name" value={firstname} onChange={(e)=>setFirstname(e.target.value)}/>
            </div>
            <div className="form-input-field">
              <input type="text" name="lastname" placeholder="Last Name" value={lastname} onChange={(e)=>setLastname(e.target.value)}/>
            </div>
            <div className="form-select">
              <label htmlFor="role">User Role</label>
              <select name="role" id="role" onChange={(e)=>setRole(e.target.value)} value={role}>
                <option value="admin" selected>Adminstrator</option>
                <option value="user">User</option>
              </select>
            </div>

            <div className="form-input-field">
              <span className="icon">
                <HiOutlineMail />
              </span>
              <input type="email" name="email" placeholder="example@email.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-input-field">
              <span className="icon">
                <HiLockClosed />
              </span>
              <input type="password" name="password" placeholder="passowrd" value={password} onChange={(e)=>setPasswaord(e.target.value)}/>
            </div>
            <button type="submit" className="btn blue-btn form-btn">
            {loading? <CircularProgress size={'16px'} color= 'inherit'/> : 'Connect'}
            </button>
          </form>
          <p>
            Already have an account?{" "}
            <Link to="/login">click here to signin</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
