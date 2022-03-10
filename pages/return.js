import Head from "next/head";
import Cart from "../components/Cart";
import Footer from "../components/Footer";
import Heading from "../components/Global/Heading";
import Header from "../components/Header.js/index.js";

const ReturnOrder = () => {
  return (    
    <div>
        <Head>
          <title>Auto & Electro</title>
        </Head>
        <div>
          <Header />
            <div className="container my-5">
                <Heading heading="Return Order" />
                <ReturnOrder />
            </div>
          <Footer />
        </div>
    </div>
  );
}

export default ReturnOrder;