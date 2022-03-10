import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header.js";

const profile = () => {
  return (
    <div>
        <Head>
          <title>Auto & Electro</title>
        </Head>
        <div>
          <Header />
            <div className="container my-5">
                <div className="text-center">
                    <Image src="/images/avatar.jpg" alt="" height={150} width={150} className="border rounded-circle shadow-sm pointer" />
                    <h4 className="font-bold">Profile</h4>
                </div>
                <form className="form py-5 w-75 mx-auto">
                    <div className="row">
                        <div className="col-6">
                            <input type="text" placeholder="First Name" className="form-control" />
                        </div>
                        <div className="col-6">
                            <input type="text" placeholder="Last Name" className="form-control" />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-6">
                            <input type="text" placeholder="Email" className="form-control" />
                        </div>
                        <div className="col-6">
                            <input type="text" placeholder="Phone" className="form-control" />
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="col-6">
                        <select className="form-select">
                            <option selected>Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">Others</option>
                        </select>
                        </div>
                    </div>
                    <button className="mt-3 w-100 btn-flat btn-hover">Edit Profile</button>
                </form>
            </div>
          <Footer />
        </div>
    </div>
  );
}

export default profile;
