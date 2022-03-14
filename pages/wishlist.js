import Head from "next/head";
import Link from 'next/link';
import { useState } from "react";
import Footer from "../components/Footer";
import Heading from "../components/Global/Heading";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import Product from "../components/Products/components/Product";

const Wishlist = () => {

  const [totalProducts, setTotalProducts] = useState(8);

  const renderProducts = () => {
      let prods = [];
      for(let i = 0; i < totalProducts; i++){
          prods.push(
            <div className="col-3 col-md-6 col-sm-12" key={i}>
                <Product inWishList={true} setTotalProducts={() => setTotalProducts(totalProducts - 1)} />
            </div>
          )
      }
      return prods;
  }

  return (
    <div>
        <Head>
          <title>Auto & Electro</title>
        </Head>
        <div>
          <Header />
            <div className="container my-5">
                <Heading heading="WishList" />
                {
                    totalProducts > 0 
                    ?
                    <div className="row py-4" id="latest-products">
                        {
                            renderProducts()
                        }
                    </div>
                    :
                    <div className="text-center py-5" id="latest-products">
                        <i className="fs-1 bi bi-exclamation-triangle"></i>
                        <h4>Empty Wishlist</h4>
                    </div>
                }
                {totalProducts > 0 && <Pagination />}
            </div>
          <Footer />
        </div>
    </div>
  );
}

export default Wishlist;
