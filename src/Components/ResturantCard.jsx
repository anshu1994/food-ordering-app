import "../../styles.css"
import {resImageURL} from "../utils/consts"
import { useEffect } from "react";

export const ResturantCard = (props) => {
  console.log("this is props",props)
  const { resObj } = props;

  const { avgRating, cloudinaryImageId, costForTwo, deliveryTime, name } =
    resObj?.info;

  return (
    <div className="res-card">
      <img
        className="res-imamge"
        src={ resImageURL+cloudinaryImageId}
        alt="resturant image"
      />
      <div>
        <h4>{name}</h4>
        <div className="card-rating">⭐{avgRating}</div>
        <div className="card-inner">
          <span>Delivery time {deliveryTime} Mins</span>
          <span>Price for TWO {costForTwo} Rs</span>
        </div>
      </div>
    </div>
  );
};
export default ResturantCard