import Head from "next/head";
import Link from 'next/link';

const resetPassword = () => {
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
                    <i className="fs-1 bi bi-lock-fill"></i>
                    </div>
                    <h4 className="text-center fw-bold">Reset Password</h4>
                    <small className="w-75 mx-auto text-muted text-center mb-2">Enter your new password and do not share.</small>
                    <input type="password" placeholder="New Password" className="p-2 mt-2" />
                    <input type="password" placeholder="Confirm Password" className="p-2 mt-2" />
                    <Link href="/auth/login" passHref>
                        <button className="mt-3 btn-flat btn-hover">Continue</button>                    
                    </Link>
                </form>
              </div>
          </div>
        </div>
    </div>  
)
}

export default resetPassword