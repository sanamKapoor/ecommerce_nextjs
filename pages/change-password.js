import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ChangePassword = () => {
  return (
    <div>
        <Head>
          <title>Auto & Electro</title>
        </Head>
        <div>
          <Header />
            <div className="container my-5">
                <div className="text-center">
                    <Image src="/images/lock2.jpg" alt="" height={150} width={150} className="border rounded-circle shadow-sm pointer" />
                    {/* <h4 className="font-bold">Profile</h4> */}
                </div>
                <form className="form py-5 w-75 mx-auto">
                    <div className="row">
                        <div className="col-12">
                            <input type="password" placeholder="Old Password" className="mt-2 form-control" />
                        </div>
                        <div className="col-12">
                            <input type="password" placeholder="New Password" className="mt-2 form-control" />
                        </div>
                        <div className="col-12">
                            <input type="password" placeholder="Confirm Password" className="mt-2 form-control" />
                        </div>
                    </div>
                    <button className="mt-3 w-100 btn-flat btn-hover">Change Password</button>
                </form>
            </div>
          <Footer />
        </div>
    </div>
  )
}

export default ChangePassword