import React from 'react'
import { FaFilePdf } from 'react-icons/fa'
import { RiDeleteBin5Line } from 'react-icons/ri'
import SelectedCandidate from './SelectedCandidate'
import DashboardTemplate from '../DashboardTemplate'

const InterviewPage = () => {
  return (
    <>
        <DashboardTemplate>
            <main className='interview-page'>
                <div className="container">
                    <SelectedCandidate name='mobile'/> 
                    <div className="interview-page-header">
                        <p>Live Interview</p>
                    </div>
                    <div className="interview-page-body">
                        <aside className='interview-candidate'>
                            <div>
                                <p className='head'>Candidate Details</p>
                                <div className="candidate-profile">
                                    <div className='profile'>
                                        <div className="candidate-pic">
                                            <img src="/Assets/profile-photo3.jpg" alt="" />
                                        </div>
                                        <div className="candidate-info">
                                            <p className="candidate-name">Anne Maria</p>
                                            <small>example@gmail.com</small>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="icon"><FaFilePdf /></span>
                                    </div>
                                </div>
                                <p className='candidate-postion'>
                                    <span>Position Applied:  </span>
                                    <span>Senior Software Developer</span>
                                </p>
                                <div className="list">
                                    <h5>Top Skills</h5>
                                    <ul>
                                        <li>Node JS: Interview</li>
                                        <li>Angular: Advanced</li>
                                        <li>Javascript: Expert</li>
                                    </ul>
                                </div>
                                <div className="list candidate-project">
                                    <h5>Top Projects</h5>
                                    <ul>
                                        <li><a href="/" >School management System</a></li>
                                        <li><a href="/">Quiz app</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="candidate-assess">
                                    <p className='head'>Skills Accessed</p>
                                    <div className="skills-assesment">
                                        <div className='skill-grade'>
                                            <div className="select">
                                                <select name="" id="">
                                                    <option value="">Javascript</option>
                                                    <option value="">Javascript</option>
                                                    <option value="">Javascript</option>
                                                    <option value="">Javascript</option>
                                                </select>
                                            </div>
                                            <div className='skill-mark'>80</div>
                                        </div>
                                        <div>
                                            <span className="icon"><RiDeleteBin5Line /></span>
                                        </div>
                                    </div>
                                    <div className="skills-assesment">
                                        <div className='skill-grade'>
                                            <div className="select">
                                                <select name="" id="">
                                                    <option value="">Javascript</option>
                                                    <option value="">Javascript</option>
                                                    <option value="">Javascript</option>
                                                    <option value="">Javascript</option>
                                                </select>
                                            </div>
                                            <div className='skill-mark'>80</div>
                                        </div>
                                        <div>
                                            <span className="icon"><RiDeleteBin5Line /></span>
                                        </div>
                                    </div>
                                    <div className="skills-assesment">
                                        <div className='skill-grade'>
                                            <div className="select">
                                                <select name="" id="">
                                                    <option value="">Javascript</option>
                                                    <option value="">Javascript</option>
                                                    <option value="">Javascript</option>
                                                    <option value="">Javascript</option>
                                                </select>
                                            </div>
                                            <div className='skill-mark'>80</div>
                                        </div>
                                        <button>
                                            <span className="icon"><RiDeleteBin5Line /></span>
                                        </button>
                                    </div>
                                    <div className="skills-assesment">
                                        <div className='skill-grade'>
                                            <div className="select">
                                                <select name="" id="">
                                                    <option value="">Javascript</option>
                                                    <option value="">Javascript</option>
                                                    <option value="">Javascript</option>
                                                    <option value="">Javascript</option>
                                                </select>
                                            </div>
                                            <div className='skill-mark'>80</div>
                                        </div>
                                        <div>
                                            <span className="icon"><RiDeleteBin5Line /></span>
                                        </div>
                                    </div>
                                    
                                    <button className="btn light-black-btn add-skill-btn">Add Skill</button>
                                </div>
                            </div>
                        </aside> 
                        <aside>
                            <div className="interview-approval">
                                <form action="" className='approval-form'>
                                    <div className='comment'>
                                        <textarea name="" id="" cols={30} rows={3} placeholder="comment..." ></textarea>
                                        <div>
                                            <button className="btn red-btn">Reject</button>
                                            <button className="btn blue-btn">Accept</button>

                                        </div>
                                    </div>
                                    
                                    <SelectedCandidate name={null}/> 
                                </form>
                            </div>
                            <div className="interview-sample-questions">
                                <p className="sample">Sample Questions</p>
                                <div className="question-category">
                                    <span>Skill set</span>
                                    <div className="select">
                                        <select name="" id="">
                                            <option value="DataStructure">DataStructure</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="question-content">
                                    <ol>
                                        <li>
                                            <a href="/">Lorem ipsum dolor sit amet?</a>
                                        </li>
                                        <li>
                                            <a href="/">Lorem ipsum dolor sit amet?</a>
                                        </li>
                                        <li>
                                            <a href="/">Lorem ipsum dolor sit amet?</a>
                                        </li>
                                        <li>
                                            <a href="/">Lorem ipsum dolor sit amet?</a>
                                        </li>
                                        <li>
                                            <a href="/">Lorem ipsum dolor sit amet?</a>
                                        </li>
                                        <li>
                                            <a href="/">Lorem ipsum dolor sit amet?</a>
                                        </li>
                                        <li>
                                            <a href="/">Lorem ipsum dolor sit amet?</a>
                                        </li>
                                        <li>
                                            <a href="/">Lorem ipsum dolor sit amet?</a>
                                        </li>
                                        
                                    </ol>
                                    <div className="question-cart">
                                        <p className="question">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id nisi explicabo voluptas fugit.</p>
                                        <div className="expectation">
                                            <span>Expectations:</span>
                                            <div>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                                <p>Lorem ipsum dolor sit amet.</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </aside>  
                    </div>
                </div>
            </main>
        </DashboardTemplate>
    </>
  )
}

export default InterviewPage