import React, { useState, useEffect, useRef, useContext } from "react";
import { FiEdit } from "react-icons/fi";
import { RiLogoutBoxLine } from "react-icons/ri";
import { AiOutlineMenu } from "react-icons/ai";
import { useLocation, NavLink, useNavigate } from 'react-router-dom';
import { serverDomain } from "../../config/Config";
import { context } from "../../context/ContextProvider";

const Header = () => {
  const {pathname}= useLocation()
  const subPath= ['/dashboard/settings/questions', '/dashboard/settings/reports', '/dashboard/settings/users']
    const [header, setHeader] = useState(false)
    const  [showMenu, setShowMenu] = useState(false)
    const {user} = useContext(context)
    const navigate= useNavigate()
    const refWrapper = useRef<HTMLDivElement>(null)
    useEffect(()=>{
      setHeader(pathname==='/register' || pathname ==='/login' || pathname ==='/'? false: true)
    },[])
    useEffect(()=>{
      console.log('header',user)
    },[user])
    const clickHandle=(e:any)=>{
     
      if(
        e.target=== document.querySelector('.nav-btn') ||
        e.target=== document.querySelector('.nav-btn .icon') ||
        e.target=== document.querySelector('.nav-btn svg') ||
        e.target=== document.querySelector('.nav-btn path') 

      ){
        // console.log('button')
      }
      else if(showMenu && !refWrapper.current?.contains(e.target)){
        setShowMenu(false)
      }
      
    }
    document.addEventListener('click', clickHandle)

    const handleLogout= (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
      const logoutController= async()=>{
        const refreshToken= localStorage.getItem('refreshToken');
        const accessToken= localStorage.getItem('accessToken')
        const body= {"session_refresh_token": refreshToken, "session_access_token": accessToken}
          
        try {
          const update= await fetch(serverDomain+'logout', {
            method: 'PUT',
            body: JSON.stringify(body),
            headers:{
              'Content-Type': 'application/json'
            }
          })
          const status= update.status
          console.log(status)
          if(status===200){
              localStorage.removeItem('refreshToken')
              localStorage.removeItem('accessToken')
            }
          navigate('/login')
          
        } catch (error) {
          console.log(error)
        }

      }
      logoutController()
    }
  return (
    <header>
      <nav className="container d-flexSB">
        <a href="/" className="nav-brand">
          <img src="/Assets/Brand_Logo.svg" alt="" />
        </a>
        <a href="/" className="mobile-nav-brand">
          <img src="/Assets/mobile_logo.png" alt="" />
        </a>
        
        <div className="mobile-nav-page-name mobile">
          {
              pathname.includes('applications')? 'Applications':
              pathname.includes('interviews')? 'Interviews':
              pathname.includes('settings')? 'Settings': ""

          }
        </div>
        {
          header && 
          <button className="btn nav-btn mobile" onClick={()=>setShowMenu(true)}>
            <span className="icon"><AiOutlineMenu /></span>
        </button>}
        {
          header &&
          (<div className={showMenu? "nav-content show-menu": "nav-content"} ref={refWrapper}>
          <ul className="nav-menu">
            <li className="nav-item">

              <NavLink to="/dashboard/applications" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>
                Applications
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/interviews" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>
                Interviews
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/dashboard/settings/schedules" className={({isActive})=> isActive || subPath.includes(pathname)? 'nav-link active' : 'nav-link'}>
                Settings
              </NavLink>
            </li>
          </ul>
          <div className="user">
            <div className="user-avatar">
              <span>{user.firstname? user.firstname: ''}</span>
              <div className="avatar">
                <img src={user.pic? user.pic: "/Assets/profile-photo.jpg"} alt="" />
              </div>
            </div>
            <div className="user-menu">
              <button className="btn mini-menu-btn">
                <span className="icon">
                  <FiEdit />
                </span>
                <span>Edit Profile</span>
              </button>
              <button className="btn mini-menu-btn" onClick={handleLogout}>
                <span className="icon">
                  <RiLogoutBoxLine />
                </span>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>)}
      </nav>
    </header>
  );
};

export default Header;
