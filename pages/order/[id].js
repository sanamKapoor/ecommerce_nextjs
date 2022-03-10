import Head from "next/head";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer";
import Heading from "../../components/Global/Heading";
import OrderDetail from "../../components/Order/OrderDetail.js";

const index = () => {
    return(
        <div>
            <Head>
            <title>Auto & Electro</title>
            </Head>
            <div>
            <Header />
                <div className="container my-5">
                    <Heading heading="order detail" />
                    <OrderDetail />
                </div>
            <Footer />
            </div>
        </div>
    )
}

export default index;