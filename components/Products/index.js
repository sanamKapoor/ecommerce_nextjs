import Link from 'next/link';
import Heading from '../Global/Heading';
import Product from './components/Product';

const Products = ({ title }) => {
  return (
    <div className="section">
    <div className="container">
        <Heading heading={title} />
        <span className='d-flex justify-content-end'>
            <Link href="/products" passHref>
                <a className='pointer text-decoration-underline'>View More</a>            
            </Link>
        </span>
        <div className="row py-4">
            <div className="col-3 col-md-6 col-sm-12">
                <Product />
            </div>
            <div className="col-3 col-md-6 col-sm-12">
                <Product />
            </div>
            <div className="col-3 col-md-6 col-sm-12">
                <Product />
            </div>
            <div className="col-3 col-md-6 col-sm-12">
                <Product />
            </div>
        </div>
        {/* <div className="section-footer">
            <Link href="/" passHref><a className="btn-flat btn-hover">view all</a></Link>
        </div> */}
    </div>
    </div>
  );
};

export default Products;
