import Link from 'next/link'; 
import { useRouter } from 'next/router';

import CategoryHeader from "./components/CategoryHeader";
import MobileHeader from "./components/MobileHeader";

const Header = () => {

  const history = useRouter();

  return (
    <header>
    <MobileHeader />
    <div className="header-wrapper" id="header-wrapper">
        <span className="mb-menu-toggle mb-menu-close" id="mb-menu-close">
            <i className='bx bx-x'></i>
        </span>
        <div className="bg-main">
            <div className="mid-header container">
                <Link href="/" passHref><a className="logo">Auto&Electro</a></Link>
                <div className="search">
                    <input type="text" placeholder="Search" onKeyPress={e => {
                        if(e.key === 'Enter'){
                            history.push('/products')
                        }
                    }} />
                    <i className='bi bi-search'></i>
                </div>
                <ul className="user-menu">
                    {/* <li><a href="#"><i className='bi bi-bell'></i></a></li> */}
                    <li><Link href="/wishlist" passHref><a><i className='bi bi-heart'></i></a></Link></li>
                    <li><Link href="/cart" passHref><a><i className='bi bi-cart3'></i></a></Link></li>
                    <li><Link href="/profile" passHref><a><i className='bi bi-person-circle'></i></a></Link></li>
                </ul>
            </div>
        </div>
        <CategoryHeader />
    </div>
    </header>
  );
};

export default Header;
