import React, { useState } from 'react'
import SettingSideBar from '../../../components/settingsidebar/SettingSideBar'
import DashboardTemplate from '../DashboardTemplate'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { useLocation } from 'react-router-dom'
import { AiOutlineSchedule } from 'react-icons/ai'
import { MdOutlineListAlt, MdOutlineQuestionAnswer } from 'react-icons/md'
import { ImUsers } from 'react-icons/im'

const Settings = ({children}:{children:React.ReactNode}) => {
  const [showMenu, setShowMenu] = useState(false)
  const {pathname} = useLocation()
  return (
    <>
    <DashboardTemplate>
      <main className='setting-page'>
        <div className="container">
          <div>
            <div className="mobile-setting-menu-btn" onClick={()=>setShowMenu(!showMenu)}>
              <div className="active-setting-page" >
                {
                  /schedules$/.test(pathname)?(<>
                                                  <span className="icon"><AiOutlineSchedule /></span>
                                                  <span>Interview Schedule</span>
                                                </>):
                  /questions$/.test(pathname)? (<>
                                                  <span className="icon"><MdOutlineListAlt /></span>
                                                  <span>Skills & Questions</span>
                                              </>):
                  /reports$/.test(pathname)? (<>
                                                  <span className="icon"><MdOutlineQuestionAnswer /></span>
                                                  <span>Reports</span>
                                              </>):
                  /users$/.test(pathname)? (<>
                                                  <span className="icon"><ImUsers /></span>
                                                  <span>Users</span>
                                              </>): ''
                }
              </div>
              <span className="icon">{showMenu? <IoIosArrowUp/>:<IoIosArrowDown/>}</span>
            </div>
              <SettingSideBar show={showMenu}/>
          </div>
          <div>
              {children}
          </div>
        </div>
      </main>
    </DashboardTemplate>
    </>
  )
}

export default Settings