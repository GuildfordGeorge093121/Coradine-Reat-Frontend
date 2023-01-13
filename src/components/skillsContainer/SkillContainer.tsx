import React from 'react'

export const UserSkill= ()=>{
    return (
        <div className="d-flexSB">
            <div>
                <input type="text" placeholder='Skill' className='input-pos' />  
            </div>
            <div>
                <select name="level" >
                    <option value="advanced">Beginner</option>
                    <option value="advanced">Advanced</option>
                    <option value="advanced">Expert</option>
                </select>
            </div>
        </div>
    )
}

export const UserProject= ()=>{
    return (
        <div className="d-flexSB">
            <input type="text" placeholder='Project title'/>
            <input type="text" placeholder='GitHub or Hosting URL'/>
        </div>
    )
}