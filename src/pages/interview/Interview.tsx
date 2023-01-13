import React, { useState } from 'react'
import InterviewTemplate from '../../components/interviewTemplate/InterviewTemplate'
import { useNavigate } from 'react-router-dom'
const Interview = () => {
    const [email, setEmail] = useState('')
    const [schedule, setSchedule] = useState('')
    const [userVerified, setUserVerified] = useState(false)

    const navigate= useNavigate()
    const handleVerify = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        setUserVerified(true)
    }
    const handleSchedule = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        navigate('/interview/1234')
    }
  return (
    <InterviewTemplate>
        <div className="interview-content">
                <p className='interview-content-topic1'>Candidate Interview Preparation</p>
                <p className='interview-content-topic2'>Kindly let your interview know your areas of expertise and skills so that you to have an amazing session</p>
            </div>
            {
                !userVerified &&
                <form action="" onSubmit={handleVerify}>
                    <label htmlFor="email">Email</label>
                    <div className="form-input-field">
                        <input type="email" name="email" id="email" value={email} placeholder='example@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
                        <button type="submit" className='btn blue-btn'>Verify</button>
                    </div>
                </form>
            }
            
            
            {
                userVerified && 
                    (
                        <>
                        
                        <div className="verified-user-email">{email}</div>
                        <form action="" onSubmit={handleSchedule} className="confirm-dialog">
                            <div className="form-input-field">
                                <input type="number" name="schedule" id="email" placeholder='xxxx' value={schedule} onChange={(e)=>setSchedule(e.target.value)}/>
                                <button type="submit" className='btn blue-btn'>Confirm</button>
                            </div>
                            <small className='code-message'>Kindly confirm the code sent to your email</small>
                        </form>
                        </>
                    )

            }
    </InterviewTemplate>
  )
}

export default Interview