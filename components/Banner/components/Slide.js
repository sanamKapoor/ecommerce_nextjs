import Image from 'next/image';
import Link from 'next/link';

const Slide = ({ banner, active }) => {
  return (
    <div className={`slide ${active === banner.id && 'active'}`}>
    <div className="info">
        <div className="info-content">
            {/* <h3 className="top-down">
                JBL Quantum ONE
            </h3> */}
            <h2 className="top-down trans-delay-0-2">
                {banner.title}
            </h2>
            <p className="top-down trans-delay-0-4">
                {banner.description}
            </p>
            <div className="top-down trans-delay-0-6">
            <Link href="/auth/login" passHref>
                <button className="btn-flat btn-hover">
                    <span>login</span>
                </button>
            </Link>
            </div>
        </div>
    </div>
    <div className="img right-left">
        <Image src={banner.image} alt="" height={700} width={700} />
    </div>
    </div>
  );
};

export default Slide;
