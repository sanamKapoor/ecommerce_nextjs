import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const ExistingAddress = ({ setTotalAddress, setShowAdd }) => {

    const router = useRouter();

    return (
        <div className="row border rounded shadow-sm mx-1 mt-3 pb-0" onClick={() => {
            router.query.order && router.push('/checkout')
        }}>
            <div className="col-4 d-flex justify-content-center align-items-center pt-2">
                <Image src="/images/map.png" alt='' height={140} width={140} />
            </div>
            <div className="col-8 d-flex flex-column justify-content-center mt-2">
                <h5>Home</h5>
                <p>#2078/54, Sector 48C, Nabi Building</p>
                <p>Chandighar</p>
                <p className='d-flex justify-content-between align-items-center'>
                    <span>India, 133101</span>
                    <span className='d-flex'>
                        <Link href={setShowAdd ? "/address?order=2" : "/address"} passHref>                        
                        <button className="btn-flat btn-hover btn-cart-add mx-1">
                            <i className="bi bi-pencil"></i>
                        </button>
                        </Link>
                        <button className="btn-flat btn-hover btn-cart-add mx-1" onClick={() => {
                            setTotalAddress && setTotalAddress()
                            setShowAdd && setShowAdd(false)
                        }}>
                            <i className="bi bi-trash"></i>
                        </button>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default ExistingAddress;