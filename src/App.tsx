import React, { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Interview from './pages/interview/Interview';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Application from './pages/dashboard/applications/Application';
import InterviewPage from './pages/dashboard/interviews/InterviewPage';
import Schedule from './pages/dashboard/settings/Schedule';
import Questions from './pages/dashboard/settings/Questions';
import { context } from './context/ContextProvider';
import SendRetrieveToken from './utilis/SendRetrieveToken';
import Confirm from './pages/confirm/Confirm';


function App() {
  const {setVerifiedUser} = useContext(context)
  useEffect(()=>{
    SendRetrieveToken().then((verified)=>{
      setVerifiedUser(verified)
    })
  },[])
  return (
    <div className="App">
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/interview' element={<Interview />}>
              <Route path=':id' element={<Profile />} />
              <Route path='confirm' element={<Confirm />} />
            </Route>
            
            <Route path='/dashboard'>
                <Route path='applications' element={<Application />}/>
                <Route path='interviews' element={<InterviewPage />}/>
                <Route path='settings'>
                  <Route path='schedules' element={<Schedule />}/>
                  <Route path='questions' element={<Questions />}/>
                </Route>
            </Route>
        </Routes>
        
    </div>
  );
}

export default App;
