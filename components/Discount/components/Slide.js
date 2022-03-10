import Image from 'next/image';
import Link from 'next/link';

const Slide = ({ banner, active }) => {
  return (
    <div className={`slide ${active === banner.id && 'active'}`}>
    <div className="row">
    <div className="col-4 col-md-4">
        <div className="sp-item-img">
            <Image src={banner.image} alt="" height={500} width={500} />
        </div>
    </div>
    <div className="col-7 col-md-8">
        <div className="sp-item-info mt-5">
            <div className="sp-item-name">{banner.title}</div>
            <p className="sp-item-description">
                {banner.description}
            </p>
            <Link href="/product/2" passHref>
                <button className="btn-flat btn-hover">shop now</button>
            </Link>
        </div>
    </div>
    </div>
    </div>
  );
};

export default Slide;
