import Image from 'next/image';
import { useState } from 'react';
import Breadcumb from '../../Breadcumb';

const imgs = [
    "/images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png",
    "/images/JBL-Endurance-Sprint_Alt_Red-1605x1605px.webp",
    "/images/JBL_Quantum_400_Product_Image_Hero_02.png"
]

const Images = ({ offset }) => {
  
    const [img, setImg] = useState("/images/kisspng-beats-electronics-headphones-apple-beats-studio-red-headphones.png");

    return (
    <div 
        className='col-5 col-md-12'
        style={{
            "height": "100vh",
            "position": offset > 160 ? 'sticky' : 'relative',
            "top": 0
        }}
    >
    <div className="box mb-3">
        <Breadcumb />
    </div>
    <div className="product-img" id="product-img">
        <Image src={img} alt="" height={500} width={500} />
    </div>
    <div className="box">
        <div className="product-img-list">
            <div className="product-img-item">
                <Image 
                    onClick={e => {
                        setImg(imgs[0]);
                    }} 
                    src={imgs[0]} 
                    alt="" 
                    width={80} height={80} 
                />
            </div>
            <div className="product-img-item">
                <Image 
                    onClick={e => {
                        setImg(imgs[1]);
                    }} 
                    src={imgs[1]} 
                    alt="" 
                    width={80} height={80} 
                />
            </div>
            <div className="product-img-item">
                <Image 
                    onClick={e => {
                        setImg(imgs[2]);
                    }} 
                    src={imgs[2]} 
                    alt="" 
                    width={80} height={80} 
                />
            </div>
        </div>
    </div>
    </div>
  );
};

export default Images;
