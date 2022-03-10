import React from 'react';
import { Rating } from 'react-simple-star-rating'

const Filter = () => {

    const toggleClass = (e) => {
        if(e.target.classList.contains('bi-square')){
            e.target.classList.remove('bi-square')
            e.target.classList.add('bi-check-square')
        } else {
            e.target.classList.add('bi-square')
            e.target.classList.remove('bi-check-square')
        }
    }

  return (
    <div className="col-3 filter-col border rounded rounded-lg" id="filter-col">
    <div className="box filter-toggle-box">
        <button className="btn-flat btn-hover" id="filter-close">close</button>
    </div>
    <div className="box">
        <span className="filter-header">
            Categories
            <input type="text" className='form-control my-2' placeholder='Search' />
        </span>
        <ul className="filter-list">
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className='px-3'>JBL</span>
                </div>
            </li>
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className='px-3'>Beat</span>
                </div>
            </li>
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className='px-3'>Logitech</span>
                </div>
            </li>
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className='px-3'>Samsung</span>
                </div>
            </li>
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className='px-3'>Sony</span>
                </div>
            </li>
        </ul>
    </div>
    <div className="box">
        <span className="filter-header">
            Sub Categories
            <input type="text" className='form-control my-2' placeholder='Search' />
        </span>
        <ul className="filter-list">
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className='px-3'>Red</span>
                </div>
            </li>
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className='px-3'>Blue</span>
                </div>
            </li>
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className='px-3'>White</span>
                </div>
            </li>
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className='px-3'>Pink</span>
                </div>
            </li>
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className='px-3'>Yellow</span>
                </div>
            </li>
        </ul>
    </div>
    <div className="box">
        <span className="filter-header">
            Price
        </span>
        <div className="price-range">
            <input type="range" />
        </div>
    </div>
    <div className="box">
        <span className="filter-header">
            Sort By
        </span>
        <ul className="filter-list">
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className='px-3'>Popular</span>
                </div>
            </li>
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className='px-3'>Newest</span>
                </div>
            </li>
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className='px-3'>High to Low</span>
                </div>
            </li>
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className='px-3'>Low to High</span>
                </div>
            </li>
        </ul>
    </div>
    <div className="box">
        <span className="filter-header">
            rating
        </span>
        <ul className="filter-list">
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <small className="rating px-1">
                        <Rating initialValue={5} readonly={true} />
                    </small>
                </div>
            </li>
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className="rating px-1">
                        <Rating initialValue={4} readonly={true} />
                    </span>
                </div>
            </li>
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className="rating px-1">
                        <Rating initialValue={3} readonly={true} />
                    </span>
                </div>
            </li>
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className="rating px-1">
                        <Rating initialValue={2} readonly={true} />
                    </span>
                </div>
            </li>
            <li>
                <div className="group-checkbox">
                    <i className="bi bi-square pointer" onClick={toggleClass}></i>
                    <span className="rating px-1">
                        <Rating initialValue={1} readonly={true} />
                    </span>
                </div>
            </li>
        </ul>
    </div>
</div>
  );
};

export default Filter;
