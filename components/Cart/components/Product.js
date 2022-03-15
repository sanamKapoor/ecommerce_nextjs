import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Product = ({ inWishList, setTotalProducts }) => {

    const [count, setCount] = useState(1);

    return (
        <div className="card mb-3">
            <div className="row">
                <div className="col-4 d-flex flex-column align-items-center">
                    <Image src="/images/JBL_Quantum_400_Product_Image_Hero_02.png" alt="" height={250} width={250} />
                    <div className="product-quantity-wrapper">
                            <span className="product-quantity-btn" onClick={() => {
                                if(count > 1){
                                    setCount(count - 1)
                                }
                            }}>
                                <i className='bi bi-dash'></i>
                            </span>
                            <span className="product-quantity">{count}</span>
                            <span className="product-quantity-btn" onClick={() => setCount(count + 1)}>
                                <i className='bi bi-plus'></i>
                            </span>
                    </div>
                </div>
                <div className="col-8 product-info d-flex flex-column justify-content-center">
                    <h3>
                        JBL TUNE 750TNC
                    </h3>
                    <div className="product-info-detail d-flex">
                        <div>
                            <span className="product-info-detail-title">Cat No: </span>
                            <a href="#">MMMI7</a>
                        </div>
                        <div className='mx-5'>
                        <span className="product-info-detail-title">Brand: </span>
                            <a href="#">JBL</a>
                        </div>
                    </div>
                    <div className="product-info-detail d-flex">
                        <div>
                            <span className="product-info-detail-title">Size: </span>
                            <a href="#">Medium</a>
                        </div>
                        <div className='mx-5'>
                            <span className="product-info-detail-title">Color: </span>
                            <a href="#">Black</a>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <div className="text-success product-info-price">
                            $2345
                        </div>
                        <span className='px-2'><del>$2500</del></span>
                        <h6 className="text-danger fw-bold mt-2">10% off</h6>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="btn-flat btn-hover btn-cart-add">
                        <Link href="/product/2" passHref>
                            <i className='bi bi-eye'></i>
                        </Link>
                        </button>
                        <button className="btn-flat btn-hover btn-cart-add mx-3">
                            <i className={`bi ${inWishList ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                        </button>
                        <button className="btn-flat btn-hover btn-cart-add" onClick={setTotalProducts}>
                            <i className="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product;