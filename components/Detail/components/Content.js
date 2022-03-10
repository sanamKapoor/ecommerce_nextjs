import React from 'react';

const Content = () => {
  return (
    <div className="product-info">
        <h1>
            JBL TUNE 750TNC
        </h1>
        <div className="product-info-detail d-flex">
            <div>
                <span className="product-info-detail-title">Cat No: </span>
                <a href="#">MMMI7</a>
            </div>
            <div className='mx-5'>
                <span className="product-info-detail-title text-success">(In Stock)</span>
            </div>
        </div>
        <div className="product-info-detail d-flex">
            <div>
                <span className="product-info-detail-title">Brand: </span>
                <a href="#">JBL</a>
            </div>
            <div className='mx-5'>
                <span className="product-info-detail-title">Warranty: </span>
                <a href="#">6 months</a>
            </div>
        </div>
        <div className='d-flex align-items-center'>
            <div className="text-success product-info-price">
                $2345
            </div>
            <span className='px-2'><del>$2500</del></span>
            <h6 className="text-danger fw-bold mt-2">10% off</h6>
        </div>
        <div className="product-info-detail">
            <h5 className='fw-bold mb-3'>Size</h5>
            <span className='border rounded-circle bg-muted px-2 py-1 shadow-sm'>S</span>
            <span className='border rounded-circle bg-muted px-2 py-1 mx-2 shadow-sm'>M</span>
            <span className='border rounded-circle bg-muted px-2 py-1 shadow-sm'>L</span>
        </div>
        <div className="product-info-detail">
            <h5 className='fw-bold mb-3'>Color</h5>
            <span className='border border-success rounded-circle bg-success px-3 py-2 shadow-sm'></span>
            <span className='border border-danger rounded-circle bg-danger px-3 py-2 mx-2 shadow-sm'></span>
            <span className='border border-dark rounded-circle bg-dark px-3 py-2 shadow-sm'></span>
        </div>
        <div>
            <button className="btn-flat bg-warning border border-warning btn-hover">add to cart</button>
            <button className="btn-flat btn-hover mx-3">add to wishlist</button>
        </div>
    </div>
  );
};

export default Content;
