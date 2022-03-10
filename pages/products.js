import Head from "next/head";
import Breadcumb from "../components/Breadcumb";
import Filter from "../components/Filter";
import Footer from "../components/Footer";
import Header from "../components/Header.js";
import Pagination from "../components/Pagination";
import Product from "../components/Products/components/Product";

const products = () => {
    return (
      <div>
        <Head>
          <title>Auto & Electro</title>
        </Head>
        <div>
          <Header />
          <div className="bg-main">
            <div className="container">
              <div className="box">
                <Breadcumb />
              </div>
              <div className="box">
                <div className="row">
                  <Filter />
                  <div className="col-9 col-md-12">
                      <div className="box filter-toggle-box">
                          <button className="btn-flat btn-hover" id="filter-toggle">filter</button>
                      </div>
                      <div className="box">
                          <div className="row" id="products">
                            <div className="col-4 col-md-6 col-sm-12">
                              <Product />
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                              <Product />
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                              <Product />
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                              <Product />
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                              <Product />
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                              <Product />
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                              <Product />
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                              <Product />
                            </div>
                            <div className="col-4 col-md-6 col-sm-12">
                              <Product />
                            </div>
                          </div>
                      </div>
                      <div className="box">
                        <Pagination />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  };
  
  export default products;
  