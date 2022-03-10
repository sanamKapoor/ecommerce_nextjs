import Image from 'next/image';

const AddressForm = ({ setTotalAddress }) => {
    return (
        <div className="col-6">
        <h5 className="border py-3 text-center rounded shadow-sm">Add Address</h5>
        <Image src="/images/map.png" alt='' height={500} width={700} className="my-2" />
        <form className='form mt-3'>
            <div className='row'>
                <input type="text" className='col form-control mx-2' placeholder='House/Flat No.' />
                <input type="text" className='col form-control mx-2' placeholder='Building Name' />
            </div>
            <div className='row mt-3'>
                <input type="text" className='col form-control mx-2' placeholder='Street Address' />
                <input type="text" className='col form-control mx-2' placeholder='Area' />
            </div>
            <div className='row mt-3'>
                <input type="text" className='col form-control mx-2' placeholder='Dist.' />
                <input type="text" className='col form-control mx-2' placeholder='State' />
            </div>
            <div className='row mt-3'>
                <input type="text" className='col form-control mx-2' placeholder='Country' />
                <input type="text" className='col form-control mx-2' placeholder='Zip Code' />
            </div>
            <div className='mt-3'>
                <button className='btn btn-lg btn-outline-info'><i className="bi bi-house-fill"></i> Home</button>
                <button className='btn btn-lg btn-outline-danger mx-3'><i className="bi bi-building"></i> Office</button>
            </div>
            <button className='mt-4 btn-flat btn-hover w-100' onClick={e => {
                e.preventDefault();
                setTotalAddress()
            }}>Submit</button>
        </form>
    </div>
    )
}

export default AddressForm;