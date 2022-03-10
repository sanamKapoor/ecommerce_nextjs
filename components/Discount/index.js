import React from 'react';
import { useState } from 'react';
import { primaryBanner } from '../../data';
import Slide from './components/Slide';

const Discount = () => {

  const [active, setActive] = useState(1);

  return (
    <div className="bg-second">
        <div className='slider'>
            <div className="container" style={{height: '60vh'}}>
                {
                    primaryBanner.map(banner => (
                        <Slide key={banner.id} banner={banner} active={active} />
                    ))
                }     
            </div>
            <button className="slide-controll slide-next" onClick={() => {
            (active < primaryBanner.length) ? setActive(active + 1) : setActive(1)
            }}>
                <i className='bi bi-arrow-right-short'></i>
            </button>
            <button className="slide-controll slide-prev" onClick={() => {
            (active > 1) ? setActive(active - 1) : setActive(primaryBanner.length)
            }}>
                <i className='bi bi-arrow-left-short'></i>
            </button>
        </div>
    </div>
  );
};

export default Discount;
