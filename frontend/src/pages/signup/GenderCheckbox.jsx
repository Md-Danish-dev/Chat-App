import React from 'react'

const GenderCheckbox=({onCheckboxChange,selectedGender}) =>{
  return (
    <div className='flex' >
      <div className='form-control'>
        <label className={`cursor-pointer label gap-2 ${selectedGender==="male"?"selcted":""}`}>
          <span className='label-text text-black'>Male</span>
          <input type='checkbox' 
          className='checkbox border-slate-900'
          checked={selectedGender==="male"}
          onChange={()=>onCheckboxChange("male")} ></input>
        </label> 
      </div>
      <div className='form-control'>
        <label className={`cursor-pointer label gap-2 ml-12 ${selectedGender==="female"?"selected":""}`}>
          <span className='label-text text-black'>Female</span>
          <input type='checkbox' 
          className='checkbox border-slate-900'
          checked={selectedGender==="female"}
          onChange={()=>onCheckboxChange("female")}></input>
        </label> 
      </div>
    </div>
  )
}

export default GenderCheckbox