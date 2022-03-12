import Head from "next/head";
import Header from "../../components/Header.js";
import Footer from "../../components/Footer";
import Heading from "../../components/Global/Heading";
import ReturnDetail from "../../components/Return/index";

const Index = () => {
    return(
        <div>
            <Head>
            <title>Auto & Electro</title>
            </Head>
            <div>
            <Header />
                <div className="container my-5">
                    <Heading heading="return order" />
                    <ReturnDetail />
                </div>
            <Footer />
            </div>
        </div>
    )
}

export default Index;