import Head from "next/head";
import Link from 'next/link';

const verifyOtp = () => {
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
                    <h4 className="text-center fw-bold">Verify Otp</h4>
                    <small className="w-75 mx-auto text-muted text-center mb-2">Enter the otp sent to your registered email address.</small>
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="text" placeholder="OTP" className="p-2 mt-2" />
                    <Link href="/auth/reset-password" passHref>
                        <button className="mt-2 btn-flat btn-hover">Continue</button>                    
                    </Link>
                    <small className="text-center mt-2 text-muted pointer">Resend Code</small>
                </form>
              </div>
          </div>
        </div>
    </div>  
)
}

export default verifyOtp