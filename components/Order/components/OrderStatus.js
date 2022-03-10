import React from 'react';
import OrderSteps from './OrderSteps';

const OrderStatus = () => {
  return (
    <div className="text-center mt-4">
        <h5 className="fw-bold">Order Status</h5>
        <hr />
        <div className='d-flex flex-column align-items-start'>
            <h6 className="fw-bold">Shipping Detail</h6>
            <p className='my-0'>1235, ABC Trading Company, Mumbail</p>
            <p>Phone: +91 89765-78654</p>
        </div>
        <OrderSteps />
    </div>
  )
}

export default OrderStatus;