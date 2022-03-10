import Pagination from "../Pagination";
import OrderElement from "./components/OrderElement";
import SideBar from "./components/SideBar";

const Order = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-4">
                    <SideBar />
                </div>
                <div className="col-8">
                    <OrderElement />
                    <OrderElement />
                    <OrderElement />
                    <OrderElement />
                    <div className="pt-3">
                        <Pagination />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order;