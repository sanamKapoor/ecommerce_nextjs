import { useState } from 'react';
import Checkout from "./components/checkout";
import Product from "./components/product";

const Cart = () => {

  const [totalProducts, setTotalProducts] = useState(3);

  const renderProducts = () => {
      let prods = [];
      for(let i = 0; i < totalProducts; i++){
          prods.push(
            <Product inWishList={i%2 === 0 ? true : false} key={i} setTotalProducts={() => setTotalProducts(totalProducts - 1)} />
          )
      }
      return prods;
  }

    if(totalProducts > 0){
        return (
            <div className="row py-4" id="latest-products">
                <div className="col-8 col-md-7 col-sm-12">
                    {
                        renderProducts()
                    }
                </div>
                <div className="col-4 col-md-5 col-sm-12">
                    <Checkout />
                </div>
            </div>
        )
    } else {
        return (
            <div className="text-center py-5" id="latest-products">
                <i className="fs-1 bi bi-exclamation-triangle"></i>
                <h4>Empty Cart</h4>
            </div>
        )
    }
}

export default Cart;