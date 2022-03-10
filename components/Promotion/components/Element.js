import Image from 'next/image';
import Link from 'next/link';

const Element = () => {
  return (
    <div className="col-4 col-md-12 col-sm-12">
    <div className="promotion-box">
        <div className="text">
            <h3>Headphone & Earbuds</h3>
            <Link href="/product/2" passHref>
              <button className="btn-flat btn-hover"><span>shop now</span></button>
            </Link>
        </div>
        <Image src="/images/JBLHorizon_001_dvHAMaster.png" width={150} height={100} alt="" />
    </div>
    </div>      
  );
};

export default Element;
