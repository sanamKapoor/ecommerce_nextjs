import Head from "next/head";
import Banner from "../components/Banner/index.js";
import Discount from "../components/Discount/index.js";
import Footer from "../components/Footer/index.js";
import Header from "../components/Header.js";
import Products from "../components/Products/index.js";
import Promotion from "../components/Promotion/index.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Auto & Electro</title>
      </Head>
      <div>
        <Header />
        <Banner />
        <Promotion />
        <Products title="Latest" />
        <Products title="Best Seller" />
        <Discount />
        <Products title="Recently Viewed" />
        <Products title="Recommeded" />
        <Footer />
      </div>
    </div>
  )
}
