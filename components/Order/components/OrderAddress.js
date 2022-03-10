import React from 'react';
import Image from 'next/image';

const OrderAddress = () => {
  return (
    <>
    <div className="text-center">
        <h5 className="fw-bold">Address Detail</h5>
        <hr />
    </div>
    <div className="row border rounded shadow-sm mx-1 mt-3 pb-0">
        <div className="col-4 d-flex justify-content-center align-items-center pt-2">
            <Image src="/images/map.png" alt='' height={140} width={140} />
        </div>
        <div className="col-8 d-flex flex-column justify-content-center mt-2">
            <h5>Home</h5>
            <p>#2078/54, Sector 48C, Nabi Building</p>
            <p>Chandighar</p>
            <p className='d-flex justify-content-between align-items-center'>
                <span>India, 133101</span>
            </p>
        </div>
    </div>
    </>
  )
}

export default OrderAddress