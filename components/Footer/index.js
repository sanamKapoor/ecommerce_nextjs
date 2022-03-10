import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-second">
    <div className="container">
        <div className="row">
            <div className="col-3 col-md-6">
                <h3 className="footer-head">Products</h3>
                <ul className="menu">
                    <li><a href="#">Help center</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">product help</a></li>
                    <li><a href="#">warranty</a></li>
                    <li><a href="#">order status</a></li>
                </ul>
            </div>
            <div className="col-3 col-md-6">
                <h3 className="footer-head">my account</h3>
                <ul className="menu">
                    <li><Link href="/profile"><a>Profile</a></Link></li>
                    <li><Link href="#"><a>Notifications</a></Link></li>
                    <li><Link href="/order"><a>Orders History</a></Link></li>
                    <li><Link href="/address"><a>Manage Address</a></Link></li>
                </ul>
            </div>
            <div className="col-3 col-md-6">
                <h3 className="footer-head">about us</h3>
                <ul className="menu">
                    <li><Link href="/about"><a>About</a></Link></li>
                    <li><Link href="/contact"><a>Contact</a></Link></li>
                    <li><Link href="/privacy-policy"><a>Privacy Policy</a></Link></li>
                    <li><Link href="/terms-and-conditions"><a>Terms and Conditions</a></Link></li>
                </ul>
            </div>
            <div className="col-3 col-md-6 col-sm-12">
                <div className="contact">
                    <h3 className="contact-header">
                        Auto&Electro
                    </h3>
                    <ul className="contact-socials">
                        <li><a href="#">
                                <i className='bi bi-facebook'></i>
                            </a></li>
                        <li><a href="#">
                                <i className='bi bi-envelope'></i>
                            </a></li>
                        <li><a href="#">
                            <i className='bi bi-telephone'></i>
                        </a></li>
                    </ul>
                </div>
                {/* <div className="subscribe">
                    <input type="email" placeholder="ENTER YOUR EMAIL" />
                    <button>subscribe</button>
                </div> */}
            </div>
        </div>
    </div>
    </footer>
  );
};

export default Footer;
