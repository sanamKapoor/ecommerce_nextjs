import Head from "next/head";
import Footer from "../components/Footer";
import Heading from "../components/Global/Heading";
import Header from "../components/Header";

const contact = () => {
  return (    
    <div>
        <Head>
          <title>Auto & Electro</title>
        </Head>
        <div>
          <Header />
            <div className="container my-5">
                <Heading heading="contact" />
                <div className="content my-5 row">
                    <div className="col-6 d-flex flex-column text-center">
                        <div className="my-2">
                            <h5>Opening Hours</h5>
                            <p className="my-0">Monday - Friday</p>
                            <p className="my-0">9am - 7pm</p>
                            <p>Sunday (Closed)</p>
                        </div>
                        <div className="my-2">
                            <h5>Address</h5>
                            <p className="my-0">Shop No. 1277, Near Main Road</p>
                            <p className="my-0">Dera Basi</p>
                            <p>Punjab #133890</p>
                        </div>
                        <div className="my-2">
                            <h5>Support</h5>
                            <p className="my-0">Phone: +91 78987-67867, +91 89762-45689</p>
                            <p>Email: info@autoelectro.com</p>
                        </div>
                    </div>
                    <div className="col-6 border rounded p-4 shadow-sm">
                        <div className="text-center">
                            <h3 className="fw-bold">Get in Touch</h3>
                        </div>
                        <form className="form my-4">
                            <div className="row">
                                <div className="col-6">
                                    <input type="text" placeholder="First Name" className="form-control" />
                                </div>
                                <div className="col-6">
                                    <input type="text" placeholder="Last Name" className="form-control" />
                                </div>
                            </div>
                            <input type="email" placeholder="Email Address" className="form-control" />
                            <textarea className="form-control mt-4" rows={5} placeholder="Write message"></textarea>
                            <button className="btn-flat btn-hover w-100 mt-4">Send</button>
                        </form>
                    </div>
                </div>
            </div>
          <Footer />
        </div>
    </div>
  );
}

export default contact;
