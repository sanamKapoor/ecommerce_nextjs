import React from 'react'

const ReturnReason = () => {
  return (
    <div className='mt-5'>
        <div className="text-center">
            <h5 className="fw-bold">Return Reason</h5>
        </div>
        <form className='mt-3'>
            <textarea className='form-control' rows={5} placeholder='Write your message here...'></textarea>
            <button className='btn-flat btn-hover mt-3 w-100'>Submit</button>
        </form>
    </div>
  )
}

export default ReturnReason