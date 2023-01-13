import React from 'react'

const SelectedCandidate = (props:{name:'mobile' | null}) => {
  return (
    <div className={props.name? 'active-candidate mobile':'active-candidate'}>
    <span>Candidate:</span>
    <div className='select'>
        <select name="" id="">
            <option value="">Anne Maria</option>
        </select>
    </div>
    </div>
  )
}

export default SelectedCandidate