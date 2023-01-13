import React, { useState } from 'react'
import ConfirmedApp from '../../../components/confirmedapp/ConfirmedApp'
import Selectedapp from '../../../components/selectedapplication/SelectedApp'
import DashboardTemplate from '../DashboardTemplate'
const Application = () => {
    const [tab, setTab] = useState('app')
  return (
    <>
        <DashboardTemplate>
            <main className='applications'>
                <div className="applications-container">
                    <div className="app-tabs-container">
                        <button className={tab==='app'? "btn app-tab active" : "btn app-tab"} onClick={()=>setTab('app')}>
                            Selected Applications
                        </button>
                        <button className={tab==='cfm'? "btn app-tab active" : "btn app-tab"} onClick={()=>setTab('cfm')}>
                            <span>Confirm</span>
                            <span className="confirm-app">25/100</span>
                        </button>
                    </div>
                    <div className="application-content">
                        {
                            tab==='app'? <Selectedapp /> : <ConfirmedApp/>
                        }
                        
                    </div>
                </div>
            </main>
        </DashboardTemplate>
        
    </>
  )
}

export default Application