import Images from "next/image";
import { Rating } from 'react-simple-star-rating'

const Review = () => {
  return (
    <div className="user-rate">
        <div className="user-info">
            <div className="user-avt">
                <Images src="/images/tuat.jpg" alt="" width={50} height={50} />
            </div>
            <div className="user-name">
                <span className="name">tuat tran anh</span>
                <span className="rating">
                    <Rating initialValue={3} style={{"fontSize": "5px"}} />
                </span>
            </div>
        </div>
        <div className="user-rate-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea iste, veritatis nobis amet illum, cum alias magni dolores odio, eius quo excepturi veniam ipsa voluptatibus natus voluptas vero? Aspernatur!
        </div>
    </div>
  );
};

export default Review;
