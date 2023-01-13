import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserProject, UserSkill } from '../../components/skillsContainer/SkillContainer'
import { FaPlus } from 'react-icons/fa';
import InterviewTemplate from '../../components/interviewTemplate/InterviewTemplate';
const Profile = () => {
    const [pos, setPos] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [schedule, setSchedule] = useState('')
    const [skill, setSkill] =useState('')
    const [tab, setTab] = useState('skill')
    
    const navigate=useNavigate()

    const handleProfile = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        e.preventDefault();
        navigate('/interview/confirm')
    }
  return (
    <InterviewTemplate>
        <div className="user-info">
                <div className="user-profile-pic">
                        <div>
                            <img src="/Assets/profile-photo4.jpg" alt="" width='80px'/>
                            <div>Change picture

                             <input type="file" name="" id="" className='uploadpic'/>
                            </div>
                        </div>
                </div>
                <form action="" onSubmit={(e)=> e.preventDefault()}>

                    <div className="top-input">
                        <div>

                            <div>
                                <label htmlFor="fname">First name</label>
                                <input type="text" name="firstname" id="fname" value={firstname}  onChange={(e)=>setFirstname(e.target.value)} className='input-pos' placeholder='First name'/>
                            </div>

                            <div>
                                <label htmlFor="lname">Last name</label>
                                <input type="text" name="lastname" id="lname" value={lastname}  onChange={(e)=>setLastname(e.target.value)} className='input-pos' placeholder='Last name'/>
                            </div>
                        </div>
                        <div>
                        <div>
                            <label htmlFor="pos">Position applied for</label>
                            <input type="text" name="position" id="pos" value={pos}  onChange={(e)=>setPos(e.target.value)} className='input-pos' placeholder='Position appplied for'/>
                        </div>
                        </div>
                    </div>
                    <div className="user-strength">
                         <p className='noted'>Kindly tell us your areas of confidence</p>
                         <div className="taps">
                            <button className= {tab==='skill'? "btn tab active" : "btn tab" } onClick={()=>setTab('skill')}>Top Three Skills</button>
                            <button className= {tab==='proj'? "btn tab active" : "btn tab" } onClick={()=>setTab('proj')}>Top projects</button>
                         </div>
                         {
                            tab ==='skill'?
                            (
                                <div className="user-skills">
                                <UserSkill />
                                <UserSkill />
                                <UserSkill />

                                </div>
                            ): tab==='proj'?
                            (
                                <div className="user-project">
                                    <div>
                                        <UserProject />
                                    </div>
                                    <div>
                                        <button className="btn add-btn"> 
                                            <span className='icon'><FaPlus /></span>
                                            <span>Add</span>
                                        </button>
                                    </div>
                                </div>
                            ) : ''
                         }

                         <div className='user-submit'>
                            <button className="btn blue-btn" onClick={handleProfile}>Submit</button>
                         </div>
                    </div>

                </form>
            </div>
    </InterviewTemplate>
  )
}

export default Profile