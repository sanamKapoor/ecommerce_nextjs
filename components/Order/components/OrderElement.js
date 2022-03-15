import Image from 'next/image';
import Link from 'next/link';

const OrderElement = () => {
    return (
        <div className="card mb-3">
            <div className="row">
                <div className="col-3 d-flex flex-column align-items-center justify-content-center">
                    <Image src="/images/JBL_Quantum_400_Product_Image_Hero_02.png" alt="" height={200} width={200} />
                </div>
                <div className="col-7 my-2 product-info d-flex flex-column justify-content-center">
                    <h5 className='fw-bold pt-2'>
                        Order: #23768
                    </h5>
                    <div className="product-info-detail d-flex">
                        <div>
                            <span className="product-info-detail-title">Items: </span>
                            <a href="#">5</a>
                        </div>
                        <div className='mx-5'>
                        <span className="product-info-detail-title">Payment: </span>
                            <a href="#">UPI <small>(completed)</small></a>
                        </div>
                    </div>
                    <div className="product-info-detail d-flex">
                        <div>
                            <span className="product-info-detail-title">Amount: </span>
                            <a href="#">$2500</a>
                        </div>
                        <div className='mx-5'>
                            <span className="product-info-detail-title">Date: </span>
                            <a href="#">21/01/2022 Mon (10:45 PM)</a>
                        </div>
                    </div>
                    <div className='d-flex align-items-center'>
                        <p className='text-muted'># House No. 1547, Sector - 35A, Chandighar, India</p>
                    </div>
                </div>
                <div className='col-2 d-flex justify-content-center align-items-center'>
                    <Link href="/order/1" passHref>                    
                        <button className="btn-flat btn-hover btn-cart-add">
                            <i className='bi bi-chevron-right'></i>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OrderElement;