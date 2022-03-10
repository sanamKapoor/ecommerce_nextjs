import Image from 'next/image';
import Link from 'next/link';

const Product = ({ inWishList = false, setTotalProducts }) => {
  return (
        <div className="product-card">
            <div className="product-card-img">
                <Image src="/images/JBL_Quantum_400_Product Image_Hero 02.png" alt="" height={250} width={250} />
            </div>
            <div className="product-card-info">
                <div className="product-btn">
                    <button className="btn-flat btn-hover btn-cart-add">
                    <Link href="/product/2">
                        <i className='bi bi-eye'></i>
                    </Link>
                    </button>
                    <button className="btn-flat btn-hover btn-cart-add" onClick={setTotalProducts}>
                        <i className={`bi ${inWishList ? 'bi-heart-fill' : 'bi-heart'}`}></i>
                    </button>
                    <button className="btn-flat btn-hover btn-cart-add">
                        <i className="bi bi-cart3"></i>
                    </button>
                </div>
                <div className="product-card-name">
                    JBL Quantum 400
                </div>
                <div className="product-card-price">
                    <span><del>$300</del></span>
                    <span className="curr-price">$200</span>
                </div>
            </div>
        </div>
  );
};

export default Product;
