import Element from "./components/Element";
import Link from 'next/link';

const Promotion = () => {
  return (
    <div className="promotion">
    <div className="row">
        <Element />
        <Element />
        <Element />
        <Element />
        <Element />
        <Element />
    </div>
    <div className="text-center mt-4">
      <Link href="/products">
      <button className="btn-flat-2 btn-hover-2">view more</button>      
      </Link>
    </div>
</div>
  );
};

export default Promotion;
