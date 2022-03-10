import { useState } from "react";
import Link from 'next/link';
import ExistingAddress from "../../Address/components/ExistingAddress";

const Address = () => {

    const [showAdd, setShowAdd] = useState(true);

    return (
        <div className="border p-4 rounded mb-3">
            <h5>Address Detail</h5>
            {
                showAdd ?
                <ExistingAddress setShowAdd={setShowAdd} />
                :
                <div className="text-center py-4" id="latest-products">
                    <Link href="/address?order=2" passHref>
                        <span onClick={() => setShowAdd(true)} className="pointer text-decoration-underline">Choose Address</span>                    
                    </Link>
                </div>
            }
        </div>
    )
}

export default Address;