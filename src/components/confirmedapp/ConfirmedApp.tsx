import React from 'react'
import BulkAction from '../bulkaction/BulkAction'
import TablePagnition from '../tablepagnition/TablePagnition'


const ConfirmedApp = () => {
  return (
    <div className="confirmed-app">

        <div className="confirmed-content">
           <BulkAction optInner={['Terminate','Terminate', 'Terminate']} optValue={['1','2','3']}/>

            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" name="" id="" /></th>
                        <th style={{textAlign: 'left'}}><span>Emails</span></th>
                        <th></th>
                        <th style={{textAlign: 'left'}}><span>Status</span></th>
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
                        <td className='confirmed-name'>
                            George Guildford Junior
                        </td>
                        <td className='confirm-status'>
                            Confirmed
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

export default ConfirmedApp