import React from 'react'

function CreateEmploy() {
    
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded'>
        <form>
            <h2>Add employee</h2>
            <div className='mb-2'>
        <label htmlfo=''>Name</label>
        <input type='text' placeholder='Enter Name' className='form-control'/>
    </div>
    <div className='mb-2'>
        <label htmlfo=''>Email</label>
        <input type='email' placeholder='Enter Email' className='form-control'/>
    </div>
    <button className='btn btn-success'>Submit</button>
    </form>

    </div>
    </div>

  )
}

export default CreateEmploy
