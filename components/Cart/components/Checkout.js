import Link from 'next/link';

const Checkout = () => {
    return (
        <div className="bg-light p-4 rounded">
            <h5>Price Detail</h5>
            <hr />
            <div className="d-flex justify-content-between">
                <p>Price (3 items)</p>
                <p>$50</p>
            </div>
            <div className="d-flex justify-content-between">
                <p>Shipping fee</p>
                <p>$5</p>
            </div>
            <div className="d-flex justify-content-between mt-2">
                <h6>Total</h6>
                <h6>$55</h6>
            </div>
            <Link href="/checkout" passHref>
                <button className="w-100 mt-3 btn-flat btn-hover">Proceed to checkout</button>            
            </Link>
        </div>
    )
}

export default Checkout;