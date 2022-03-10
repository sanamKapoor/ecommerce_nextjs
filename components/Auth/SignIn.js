import React from 'react'
import Link from 'next/link';

const SignIn = ({ login }) => {
  return (
    <div className="col-6 vh-100 d-flex flex-column justify-content-center">
        <div className="w-50 mx-auto">
        <h5 className="text-uppercase fw-bold border-bottom border-3 border-dark d-inline-block mb-4">
            { login ? "login" : "sign up" }
        </h5>
        <form className="d-flex flex-column justify-content-center">
            {
                !login &&
                <>
                    <label htmlFor="firstname">First Name</label>
                    <input type="text" className="py-2 mt-1" />
                    <label htmlFor="lastname" className="mt-2">Last Name</label>
                    <input type="text" className="py-2 mt-1" />
                </>
            }
            <label htmlFor="email" className={`${!login && 'mt-2'}`}>Email</label>
            <input type="email" className="py-2 mt-1" />
            <label htmlFor="password" className="mt-2">Password</label>
            <input type="password" className="py-2 mt-1" />
            {
                login && 
                <div className="d-flex justify-content-between align-items-center mt-4">
                    <label>
                        <input type="checkbox" className="m-1" />
                        <span>Remember me</span>
                    </label>
                    <Link href="/auth/forget-password" passHref>
                        <span className='pointer'>Forgot Password?</span>
                    </Link>
                </div>
            }
            <Link href="/?login=true" passHref>
                <button className="mt-3 btn-flat btn-hover">Sign {login ? 'in' : 'up'}</button>            
            </Link>
            <span className="mt-4 text-center">
                { login ? "Do not have an account? " : "Already have an account? " } 
                <Link href={login ? "/auth/signup" : "/auth/login"} passHref>
                    <u className="pointer">{login ? "Sign Up" : "Sign In"}</u>                
                </Link>
            </span>
        </form>
        </div>
    </div>
  )
}

export default SignIn