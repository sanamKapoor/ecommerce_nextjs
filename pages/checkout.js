import Head from "next/head";
import CheckOut from "../components/Checkout";
import Footer from "../components/Footer";
import Heading from "../components/Global/Heading";
import Header from "../components/Header.js";

const checkout = () => {
  return (    
    <div>
        <Head>
          <title>Auto & Electro</title>
        </Head>
        <div>
          <Header />
            <div className="container my-5">
                <Heading heading="checkout" />
                <CheckOut />
            </div>
          <Footer />
        </div>
    </div>
  );
}

export default checkout;
