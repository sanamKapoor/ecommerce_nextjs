import React from 'react'
import { Modal } from 'react-bootstrap';

const QuestionModal = ({ show, setShow }) => {

  const handleClose = () => {
    setShow(!show)
  }

  return (
    <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
            <Modal.Title>Ask Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <form>
                <textarea className='form-control' placeholder='What you want to ask?' rows={5}></textarea>
                <button className='btn-flat btn-hover mt-2 w-100'>Submit</button>
            </form>
        </Modal.Body>
    </Modal>  
  )
}

export default QuestionModal