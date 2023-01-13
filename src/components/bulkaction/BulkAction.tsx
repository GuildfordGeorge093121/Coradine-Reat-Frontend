import React from 'react'

const BulkAction = ({optValue, optInner}:{optValue:string[]; optInner:string[]}) => {
  return (
    <form action="" className="bulk-action">
        <span>Bulk action</span>
        <div className="select">
            <select name="" id="">
                {
                    optValue.map((opt,index)=><option value={opt} key={index}>{optInner[index]}</option>)
                }
            </select>
        </div>
        <button type="submit" className="btn blue-btn">confirm</button>
    </form>
  )
}

export default BulkAction