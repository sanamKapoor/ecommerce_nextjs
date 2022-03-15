import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const OrderItem = () => {
  return (
        <div className="card mb-3">
            <div className="row">
                <div className="col-4 d-flex flex-column align-items-center justify-content-center">
                    <Image src="/images/JBL_Quantum_400_Product_Image_Hero_02.png" alt="" height={250} width={250} />
                </div>
                <div className="col-8 product-info d-flex align-items-center justify-content-around">
                    <div>
                    <h3 className='pt-2'>
                        JBL TUNE 750TNC
                    </h3>
                    <div className="product-info-detail d-flex mt-2">
                        <div>
                            <span className="product-info-detail-title">Cat No: </span>
                            <a href="#">MMMI7</a>
                        </div>
                        <div className='mx-5'>
                        <span className="product-info-detail-title">Brand: </span>
                            <a href="#">JBL</a>
                        </div>
                    </div>
                    <div className="product-info-detail d-flex mt-2">
                        <div>
                            <span className="product-info-detail-title">Size: </span>
                            <a href="#">Medium</a>
                        </div>
                        <div className='mx-5'>
                            <span className="product-info-detail-title">Color: </span>
                            <a href="#">Black</a>
                        </div>
                    </div>
                    <div className="product-info-detail d-flex mt-2">
                        <div>
                            <span className="product-info-detail-title">Quantity: </span>
                            <a href="#">3</a>
                        </div>
                        <div className='mx-5'>
                            <span className="product-info-detail-title">Rating: </span>
                            <a href="#">3.5</a>
                        </div>
                    </div>
                    <div className='d-flex align-items-center mt-2'>
                        <div className="text-success product-info-price">
                            $2345
                        </div>
                        <span className='px-2'><del>$2500</del></span>
                        <h6 className="text-danger fw-bold mt-2">10% off</h6>
                    </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Link href="/product/2" passHref>
                            <button className="btn-flat btn-hover btn-cart-add">
                                <i className='bi bi-chevron-right'></i>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem