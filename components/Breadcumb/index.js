import Link from 'next/link';

const Breadcumb = () => {
  return (
    <div className="breadcumb">
        <Link href="/" passHref>home</Link>
        <span><i className="bi bi-chevron-double-right"></i></span>
        <Link href="/" passHref>all products</Link>
    </div>
  );
};

export default Breadcumb;
