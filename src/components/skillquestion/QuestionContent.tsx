import React, { useState } from 'react'
import { HiDocumentArrowDown } from 'react-icons/hi2'
import { FaUpload } from 'react-icons/fa'
import BulkAction from '../bulkaction/BulkAction'
import TablePagnition from '../tablepagnition/TablePagnition'
const QuestionContent = () => {
    const [tab, setTab] = useState('skill')
  return (
    <section className="skills-questions">
        <div className="app-tabs-container">
            <button className={tab==='skill'? "btn app-tab active" : "btn app-tab"} onClick={()=>setTab('skill')}>
                Required Skill Set
            </button>
            <button className={tab==='quest'? "btn app-tab active" : "btn app-tab"} onClick={()=>setTab('quest')}>
               Questions & Expectations
            </button>
        </div>
        <div className="top-form">
            <div>
                {
                    tab==='skill' &&
                        <form action="">
                            <input type="text" placeholder='Title'/>
                            <textarea name="" id="" cols={30} rows={1} placeholder='Some description here...'></textarea>
                            <div>
                                <button className="btn blue-btn">Add new Skill</button>
                                <button className="btn light-black-btn">Reset</button>
                            </div>
                        </form>
                }
                {
                    tab ==='quest' &&
                    <form action="">
                        <div className="skill-set">
                            <span>Skill set</span>
                            <div className="select">
                                <select name="" id="">
                                    <option value="Javascript1">Javascript1</option>
                                    <option value="Javascript1">Javascript1</option>
                                    <option value="Javascript1">Javascript1</option>
                                    <option value="Javascript1">Javascript1</option>
                                </select>
                            </div>
                        </div>
                        <div className='textarea-group'>
                            <div>
                            <textarea name="" id="" cols={30} rows={1} placeholder='Questions...'></textarea>
                            </div>
                            <div>
                                <textarea name="" id="" cols={30} rows={1} placeholder='Solution or Expectations...'></textarea>
                            </div>
                        </div>
                        <div>
                            <button className="btn blue-btn">Add new Skill</button>
                            <button className="btn light-black-btn">Reset</button>
                        </div>
                    </form>
                }
            </div>
            <div className='download-content'>
                <a href="/">
                    <span>Download Template  </span>
                    <span className="icon"><HiDocumentArrowDown /></span>
                </a>
                <a href="/">
                    <span>Upload from File  </span>
                    <span className="icon"><FaUpload /></span>
                </a>
            </div>
        </div>
        <div className="bottom-table">
            {
                tab==='skill' &&
                    <div className="confirmed-content">
                        <BulkAction optInner={['Terminate','Terminate', 'Terminate']} optValue={['1','2','3']}/>

                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" name="" id="" /></th>
                                    <th style={{textAlign: 'left'}}><span>Title</span></th>
                                    <th style={{textAlign: 'center'}}><span>Description</span></th>
                                    <th style={{textAlign: 'center'}}><span>Questions</span></th>
                                    <th colSpan={2} style={{textAlign: 'center'}}><span>Actions</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="" id="" />
                                    </td>
                                    <td>
                                        Javascript
                                    </td>
                                    <td className='description-title'>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, nisi?
                                    </td>
                                    <td className='questions-title'>
                                        125
                                    </td>
                                    <td className='edit'>
                                        edit
                                    </td>
                                    <td className='delete'>
                                        delete
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="pagnition">
                            <TablePagnition />
                        </div>
                    </div>
            }
            {
                tab==='quest' &&
                    <div className="confirmed-content">
                        <BulkAction optInner={['Terminate','Terminate', 'Terminate']} optValue={['1','2','3']}/>

                        <table>
                            <thead>
                                <tr>
                                    <th><input type="checkbox" name="" id="" /></th>
                                    <th style={{textAlign: 'left'}}><span>Skill</span></th>
                                    <th style={{textAlign: 'center'}}><span>Questions</span></th>
                                    <th style={{textAlign: 'center'}}><span>Questions</span></th>
                                    <th colSpan={2} style={{textAlign: 'center'}}><span>Actions</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <input type="checkbox" name="" id="" />
                                    </td>
                                    <td>
                                        Javascript
                                    </td>
                                    <td className='description-title'>
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores, nisi?
                                    </td>
                                    <td className='questions-title'>
                                        125
                                    </td>
                                    <td className='edit'>
                                        edit
                                    </td>
                                    <td className='delete'>
                                        delete
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="pagnition">
                            <TablePagnition />
                        </div>
                    </div>
            }
        </div>
    </section>
  )
}

export default QuestionContent