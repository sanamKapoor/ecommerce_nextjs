import React from 'react';
import { useState } from 'react';

const Pagination = () => {

  const [active, setActive] = useState(1);

  return (
    <ul className="pagination">
        <li className='pointer'><a><i className='bi bi-chevron-left'></i></a></li>
        <li className='pointer'><a onClick={() => setActive(1)} className={`${active === 1 && 'active'}`}>1</a></li>
        <li className='pointer'><a onClick={() => setActive(2)} className={`${active === 2 && 'active'}`}>2</a></li>
        <li className='pointer'><a onClick={() => setActive(3)} className={`${active === 3 && 'active'}`}>3</a></li>
        <li className='pointer'><a onClick={() => setActive(4)} className={`${active === 4 && 'active'}`}>4</a></li>
        <li className='pointer'><a onClick={() => setActive(5)} className={`${active === 5 && 'active'}`}>5</a></li>
        <li className='pointer'><a><i className='bi bi-chevron-right'></i></a></li>
    </ul>
  );
};

export default Pagination;
