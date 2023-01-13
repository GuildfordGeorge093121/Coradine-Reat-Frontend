import React from 'react'

const InterviewTemplate = ({children}:{children:React.ReactNode}) => {
  return (
    <section className="interview">
    <div className="interview-container">
        <div className="interview-header">
            <a href="/" className="nav-brand">
            <img src="/Assets/Brand_Logo.svg" alt="" />
            </a>
        </div>
        
       {children}
    </div>
</section>
  )
}

export default InterviewTemplate