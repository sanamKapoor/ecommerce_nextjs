import React from 'react';
import OrderAddress from '../Order/components/OrderAddress';
import OrderItem from '../Order/components/OrderItem';
import ReturnReason from './components/Reason';

const ReturnDetail = () => {
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-5">
                <OrderAddress />
                <ReturnReason />
            </div>
            <div className="col-7">
                <div className='p-4 border shadow-sm rounded'>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div>
                        <h4 className='fw-bold'>Order No: #2342</h4>
                        <small>July 14 2022, 02:30 PM</small>
                        </div>
                        <span className='bg-success px-3 py-1 rounded shadow-sm mb-2 text-light'>Delivered</span>
                    </div>
                    <OrderItem />
                    <OrderItem />
                    <div className='text-center'>
                        <u>See all</u>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ReturnDetail;