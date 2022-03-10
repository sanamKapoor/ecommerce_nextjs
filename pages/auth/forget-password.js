import Head from "next/head";
import Link from 'next/link';

const forgetPassword = () => {
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
                    <h4 className="text-center fw-bold">Forget Password</h4>
                    <small className="w-75 mx-auto text-muted text-center mb-2">Enter your email and we will send you instructions on how to reset your password</small>
                    {/* <label htmlFor="email">Email</label> */}
                    <input type="email" placeholder="Email" className="p-2 mt-2" />
                    <Link href="/auth/instruction" passHref>
                        <button className="mt-2 btn-flat btn-hover">Continue</button>                    
                    </Link>
                </form>
              </div>
          </div>
        </div>
    </div>  
)
}

export default forgetPassword