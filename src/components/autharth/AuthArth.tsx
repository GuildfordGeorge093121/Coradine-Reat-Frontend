import React, {ReactNode} from 'react'
import {Routes, Route} from 'react-router-dom'
const AuthArth = ({children}: {children:ReactNode}) => {
  return (
    <>
      <header className='mobile-header'>
        <nav className="container d-flexSB">
          <a href="/" className="nav-brand">
            <img src="/Assets/Brand_Logo.svg" alt="" />
          </a>
        </nav>
      </header>
      <section className="auth-arth">
          <div className="container">
              <div>
                  <h1>Best Interview Platform</h1>
              </div>
              {children}
          </div>
      </section>
    </>
  )
}

export default AuthArth