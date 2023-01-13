import React from 'react'
import { AiOutlineSchedule } from 'react-icons/ai'
import { MdOutlineListAlt,MdOutlineQuestionAnswer } from  'react-icons/md'
import { ImUsers } from 'react-icons/im'
import { NavLink } from 'react-router-dom'
const SettingSideBar = ({show}: {show: boolean}) => {
  return (
    <ul className={show?"settings-links show-active-settings-page":"settings-links"}>
          <li>
            <NavLink to="/dashboard/settings/schedules" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>
              <span className="icon"><AiOutlineSchedule /></span>
              <span>Interview Schedule</span>
            </NavLink>

          </li>
          <li>
            <NavLink to="/dashboard/settings/questions" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>
              <span className="icon"><MdOutlineListAlt /></span>
              <span>Skills & Questions</span>
            </NavLink>

          </li>
          <li>
            <NavLink to="/dashboard/settings/reports" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>
              <span className="icon"><MdOutlineQuestionAnswer /></span>
              <span>Reports</span>
            </NavLink>

          </li>
          <li>
            <NavLink to="/dashboard/settings/users" className={({isActive})=> isActive? 'nav-link active' : 'nav-link'}>
              <span className="icon"><ImUsers /></span>
              <span>Users</span>
            </NavLink>
          </li>
    </ul>
  )
}

export default SettingSideBar