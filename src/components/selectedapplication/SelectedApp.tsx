import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import BulkAction from '../bulkaction/BulkAction'
import TablePagnition from '../tablepagnition/TablePagnition'

const Selectedapp = () => {
  return (
    <div className="confirmed-app">
        <form action="" className='add-email'>
            <div className="form-input-field">
                <span className="icon"><HiOutlineMail /></span>
                <input type="email" name="email" placeholder="example@email.com"/>
            </div>
           
            <button type="submit" className="btn blue-btn">Add</button>
            
        </form>

        <div className="confirmed-content">
            <BulkAction optInner={['Send Email', 'Send Email', 'Send Email']} optValue={['1','2','3']} />

            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" name="" id="" /></th>
                        <th style={{textAlign: 'left'}}><span>Emails</span></th>
                        <th colSpan={2} style={{textAlign: 'center'}}><span>Actions</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox" name="" id="" />
                        </td>
                        <td>
                            example.example@gmail.com
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

    </div>
  )
}

export default Selectedapp