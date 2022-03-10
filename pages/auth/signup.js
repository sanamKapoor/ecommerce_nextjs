import Head from "next/head";
import SignIn from "../../components/Auth/SignIn";

const signup = () => {
  return (
    <div>
        <Head>
          <title>Auto & Electro</title>
        </Head>
        <div className="row">
          <div className="col-6 vh-100 auth-bg"></div>
          <SignIn login={false} />
        </div>
    </div>  
)
}

export default signup