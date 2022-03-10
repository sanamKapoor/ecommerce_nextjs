import Head from "next/head";
import SignIn from "../../components/Auth/SignIn";

const login = () => {
  return (
    <div>
        <Head>
          <title>Auto & Electro</title>
        </Head>
        <div className="row">
          <div className="col-6 vh-100 auth-bg"></div>
          <SignIn login={true} />
        </div>
    </div>  
)
}

export default login