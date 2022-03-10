import { useState } from "react";

const SideBar = () => {

    const [active, setActive] = useState(1);

    return (
        <div className="text-center bg-light rounded shadow-sm">
           <ul className="p-4">
               <li><h5 className="fw-bold">Your Orders</h5><hr /></li>
               <li>
                   <button 
                    onClick={() => setActive(1)} 
                    className={`${active === 1 ? "btn-flat" : "btn-flat-2"} my-3 w-75`}>Ongoing Orders</button>
                </li>
               <li>
                   <button 
                    onClick={() => setActive(2)} 
                    className={`${active === 2 ? "btn-flat" : "btn-flat-2"} my-3 w-75`}>Delivered Orders</button>
                </li>
               <li>
                   <button 
                   onClick={() => setActive(3)} 
                   className={`${active === 3 ? "btn-flat" : "btn-flat-2"} my-3 w-75`}>Cancelled Orders</button>
                </li>
               <li>
                   <button 
                   onClick={() => setActive(4)} 
                   className={`${active === 4 ? "btn-flat" : "btn-flat-2"} my-3 w-75`}>Returned Orders</button>
                </li>
           </ul>
        </div>
    )
}

export default SideBar;