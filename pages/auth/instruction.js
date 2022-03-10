import Head from "next/head";
import Link from 'next/link';

const instruction = () => {
  return (
    <div>
        <Head>
          <title>Auto & Electro</title>
        </Head>
        <div className="row">
          <div className="col-6 vh-100" style={{background: "url('/images/auth-laptop.jpg') no-repeat center center / cover"}}></div>
          <div className="col-6 vh-100 d-flex flex-column justify-content-center">
              <div className="w-50 mx-auto">
                <form className="d-flex flex-column justify-content-center">
                    <div className="text-center mb-4">
                    <i className="fs-1 bi bi-envelope-fill"></i>
                    </div>
                    <h4 className="text-center fw-bold">Check Your Email</h4>
                    <small className="w-75 mx-auto text-muted text-center mb-2">We have sent instructions on how to reset password (Also check spam folder).</small>
                    <Link href="/auth/verify-otp" passHref>
                        <button className="mt-2 btn-flat btn-hover">Continue</button>                    
                    </Link>
                </form>
              </div>
          </div>
        </div>
    </div>  
)
}

export default instruction