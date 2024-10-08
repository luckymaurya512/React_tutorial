import { CDN_URL } from "../utils/constant";
const RestaurantCard = (props) =>{
    const {resData}=props;
    const {cloudinaryImageId,name,avgRating,cuisines,deliveryTime}=resData?.info;
    return (
        <div className="res-card">
            
            <img className="res-logo"
            alt="res-logo" 
            src={CDN_URL +  resData.info.cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
}

export default RestaurantCard;