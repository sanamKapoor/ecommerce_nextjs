import Head from "next/head";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer";
import Heading from "../../components/Global/Heading";
import Order from "../../components/Order/index.js";
import Address from "../../components/Address/index.js";

const address = () => {
    return(
        <div>
            <Head>
                <title>Auto & Electro</title>
            </Head>
            <div>
            <Header />
                <div className="container my-5">
                    <Heading heading="address" />
                    <Address />
                </div>
            <Footer />
            </div>
        </div>
    )
}

export default address;