import React from 'react'
import { Modal } from 'react-bootstrap';
import { Rating } from 'react-simple-star-rating';

const ReviewModal = ({ show, setShow }) => {

  const handleClose = () => {
    setShow(!show)
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>Review Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <div className='text-center mb-2'>
                    <Rating />
                </div>
                <textarea className='form-control' placeholder='Add Review' rows={5}></textarea>
                <button className='btn-flat btn-hover mt-2 w-100'>Submit</button>
            </form>        
        </Modal.Body>
    </Modal>  
  )
}

export default ReviewModal