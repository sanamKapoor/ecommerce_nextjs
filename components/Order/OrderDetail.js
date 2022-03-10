import React from 'react';
import Link from 'next/link';
import OrderAddress from './components/OrderAddress';
import OrderStatus from './components/OrderStatus';
import OrderItem from './components/OrderItem';

const OrderDetail = () => {
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-5">
                <OrderAddress />
                <OrderStatus />
                <Link href="/return/4" passHref>
                    <button className='btn-flat btn-hover w-100 mt-4'>Return</button>
                </Link>
            </div>
            <div className="col-7">
                <div className='p-4 border shadow-sm rounded'>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <div>
                        <h4 className='fw-bold'>Order No: #2342</h4>
                        <small>July 14 2022, 02:30 PM</small>
                        </div>
                        <span className='bg-success px-3 py-1 rounded shadow-sm mb-2 text-light'>Out for delivery</span>
                    </div>
                    <OrderItem />
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

export default OrderDetail;