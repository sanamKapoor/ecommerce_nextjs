import Link from 'next/link';

const CategoryHeader = () => {
  return (
    <div className="bg-second">
    <div className="bottom-header container">
        <ul className="main-menu mt-3">
            <li><Link href="/" passHref><a>home</a></Link></li>
            <li className="mega-dropdown">
                <Link href="/" passHref>
                    <a>category</a>
                </Link>
                <div className="mega-content">
                    <div className="row">
                        <div className="col-3 col-md-12">
                            <div className="box">
                                <h3>Categories</h3>
                                <ul>
                                    <li><a href="#">Wireless</a></li>
                                    <li><a href="#">Inear headphone</a></li>
                                    <li><a href="#">Overear headphone</a></li>
                                    <li><a href="#">sport headphone</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3 col-md-12">
                            <div className="box">
                                <h3>Categories</h3>
                                <ul>
                                    <li><a href="#">Wireless</a></li>
                                    <li><a href="#">Inear headphone</a></li>
                                    <li><a href="#">Overear headphone</a></li>
                                    <li><a href="#">sport headphone</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3 col-md-12">
                            <div className="box">
                                <h3>Categories</h3>
                                <ul>
                                    <li><a href="#">Wireless</a></li>
                                    <li><a href="#">Inear headphone</a></li>
                                    <li><a href="#">Overear headphone</a></li>
                                    <li><a href="#">sport headphone</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3 col-md-12">
                            <div className="box">
                                <h3>Categories</h3>
                                <ul>
                                    <li><a href="#">Wireless</a></li>
                                    <li><a href="#">Inear headphone</a></li>
                                    <li><a href="#">Overear headphone</a></li>
                                    <li><a href="#">sport headphone</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mb-3'>
                        <u className='pointer'>See All</u>
                    </div>
                </div>
            </li>
            <li className="mega-dropdown">
                <Link href="/" passHref>
                    <a>sub category</a>
                </Link>
                <div className="mega-content">
                    <div className="row">
                        <div className="col-3 col-md-12">
                            <div className="box">
                                <h3>Sub Categories</h3>
                                <ul>
                                    <li><a href="#">Wireless</a></li>
                                    <li><a href="#">Inear headphone</a></li>
                                    <li><a href="#">Overear headphone</a></li>
                                    <li><a href="#">sport headphone</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3 col-md-12">
                            <div className="box">
                                <h3>Sub Categories</h3>
                                <ul>
                                    <li><a href="#">Wireless</a></li>
                                    <li><a href="#">Inear headphone</a></li>
                                    <li><a href="#">Overear headphone</a></li>
                                    <li><a href="#">sport headphone</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3 col-md-12">
                            <div className="box">
                                <h3>Sub Categories</h3>
                                <ul>
                                    <li><a href="#">Wireless</a></li>
                                    <li><a href="#">Inear headphone</a></li>
                                    <li><a href="#">Overear headphone</a></li>
                                    <li><a href="#">sport headphone</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-3 col-md-12">
                            <div className="box">
                                <h3>Sub Categories</h3>
                                <ul>
                                    <li><a href="#">Wireless</a></li>
                                    <li><a href="#">Inear headphone</a></li>
                                    <li><a href="#">Overear headphone</a></li>
                                    <li><a href="#">sport headphone</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mb-3'>
                        <u className='pointer'>See All</u>
                    </div>
                </div>
            </li>
            <li><Link href="/products" passHref><a>browse</a></Link></li>
        </ul>
    </div>
    </div>
  );
};

export default CategoryHeader;
