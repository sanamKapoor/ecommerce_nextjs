import { useState, useEffect } from 'react';
import Head from "next/head";
import Content from "../../components/Detail/components/Content";
import Description from "../../components/Detail/components/Description";
import Images from "../../components/Detail/components/Images";
import Review from "../../components/Detail/components/Review";
import Breadcumb from "../../components/Breadcumb";
import Footer from "../../components/Footer";
import Header from "../../components/Header/index.js";
import Pagination from "../../components/Pagination";
import Product from "../../components/Products/components/Product";
import FAQs from "../../components/FAQs";
import Specification from "../../components/Specification";
import ReviewModal from '../../components/Modal/ReviewModal';
import QuestionModal from '../../components/Modal/QuestionModal';

const Index = () => {

    const [showQueModal, setShowQueModal] = useState(false);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      window.onscroll = () => {
        setOffset(window.pageYOffset);
      }
    }, [])

    return (
      <div>
        <Head>
          <title>Auto & Electro</title>
        </Head>
        <div>
          <Header />
          <div className="bg-main">
            <div className="container">
              <div className="row product-row">
                  <Images offset={offset} />
                  <div className="col-7 col-md-12">
                    <Content />
                    <div className="box border mt-4">
                      <div className="box-header">
                        Highlights
                      </div>
                      <hr />
                      <ul className="list-unstyled">
                        <li className="py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium</li>
                        <li className="py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium</li>
                        <li className="py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium</li>
                        <li className="py-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit laudantium</li>
                      </ul>
                      <div className="box-header">
                          specifications
                      </div>
                      <hr />
                      <Specification />
                    </div>
                    <div className="box border mt-4">
                      <div className="box-header">
                          description
                      </div>
                      <hr />
                      <Description />
                    </div>
                    <div className="box border mt-4">
                      <div className="d-flex justify-content-between">
                        <h5 className="fw-bold">
                          Rating & Reviews
                        </h5>
                        <span onClick={() => setShowReviewModal(true)} className="text-decoration-underline pointer">Review Product</span>
                      </div>
                      <div className="mt-2">
                        <h5 className="d-inline-block bg-warning text-dark px-2 py-1 rounded">4.5</h5>
                        <small className="text-muted pl-3">
                          120 Ratings & 50 Reviews | 200 Buyers
                        </small>
                      </div>
                      <hr />
                      <div>
                        <Review />
                        <Review />
                        <Review />
                        <Review />
                        <div className="box">
                            <Pagination />
                        </div>
                      </div>
                    </div>
                    <div className="box border mt-4">
                      <div className="d-flex justify-content-between">
                        <h5 className="fw-bold">
                          FAQs
                        </h5>
                        <span onClick={() => setShowQueModal(true)} className="text-decoration-underline pointer">Ask a Question</span>
                      </div>
                      <hr className="mt-2" />
                      <div>
                        <input type="search" placeholder="Have a question? Search for answer" className="form-control" />
                        <FAQs />
                        <FAQs />
                        <FAQs />
                        <FAQs />
                        <div className="box">
                            <Pagination />
                        </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div className="box">
                <div className="box-header">
                    related products
                </div>
                <div className="row" id="related-products">
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
            </div>
            <ReviewModal show={showReviewModal} setShow={setShowReviewModal} />
            <QuestionModal show={showQueModal} setShow={setShowQueModal} />
          </div>
          <Footer />
        </div>
      </div>
    );
  };
  
  export default Index;
  