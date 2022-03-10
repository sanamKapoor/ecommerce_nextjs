import { useState } from 'react';
import AddressForm from "./components/AddressForm";
import ExistingAddress from "./components/ExistingAddress";

const Address = () => {
    const [totalAddress, setTotalAddress] = useState(3);

    const renderProducts = () => {
        let prods = [];
        for(let i = 0; i < totalAddress; i++){
            prods.push(
                <ExistingAddress key={i} setTotalAddress={() => setTotalAddress(totalAddress - 1)} />
            )
        }
        return prods;
    }

    return (
        <div className="row my-5">
            <AddressForm setTotalAddress={() => totalAddress < 5 && setTotalAddress(totalAddress + 1)} />
            <div className="col-6">
                <h5 className="border py-3 text-center rounded shadow-sm">Existing Address</h5>
                {
                    renderProducts()
                }
                {
                    totalAddress > 4 &&
                    <div className='text-center mt-4'>
                        <u>See All</u>
                    </div>
                }
                { 
                    totalAddress < 1 && 
                    <div className="text-center py-5" id="latest-products">
                        <i className="fs-1 bi bi-exclamation-triangle"></i>
                        <h4>No Address</h4>
                    </div>
                }
            </div>
        </div>
    )
}

export default Address;