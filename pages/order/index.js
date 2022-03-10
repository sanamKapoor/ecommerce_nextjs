import Head from "next/head";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer";
import Heading from "../../components/Global/Heading";
import Order from "../../components/Order/index.js";

const order = () => {
    return(
        <div>
            <Head>
            <title>Auto & Electro</title>
            </Head>
            <div>
            <Header />
                <div className="container my-5">
                    <Heading heading="orders" />
                    <Order />
                </div>
            <Footer />
            </div>
        </div>
    )
}

export default order;