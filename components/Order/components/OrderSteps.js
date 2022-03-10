import React from 'react'
import style from '../../../styles/Steps.module.css';

const OrderSteps = () => {
  return (
    <>
    <div className={style.step}>
   <div>
      <div className={style.circle}><i className="bi bi-check"></i></div>
   </div>
   <div>
      <div className={style.title}>Order Created</div>
      <div className={style.caption}>Your order has been placed</div>
   </div>
    </div>
    <div className={style.step}>
    <div>
        <div className={style.circle}>2</div>
    </div>
    <div>
        <div className={style.title}>Dispatched</div>
        <div className={style.caption}>Seller has proceed your order</div>
    </div>
    </div>
    <div className={style.step}>
    <div>
        <div className={style.circle}>3</div>
    </div>
    <div>
        <div className={style.title}>Out for Delivery</div>
        <div className={style.caption}>Your order is out for delivery</div>
    </div>
    </div>
    <div className={style.step}>
    <div>
        <div className={style.circle}>4</div>
    </div>
    <div>
        <div className={style.title}>Delivered</div>
    </div>
    </div>
    </>
  )
}

export default OrderSteps