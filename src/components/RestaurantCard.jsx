import { LOGO_URL } from "./utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;

  const { name, avgRating, cloudinaryImageId, cuisines, costForTwo, sla } =
    restData?.info;

  return (
    <div className="res-card border p-2 rounded-lg m-2 w-80 h-fit flex flex-col justify-center">
      <img
        className="w-fit"
        src={LOGO_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4 className="wrap-break-word">{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} Minutes</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const openRestaurants = (RestaurantCard) => {
  return (props) => {
    return (
      <>
        <div className="absolute bg-black p-2 text-white rounded-lg m-2">
          Open Now
        </div>
        <RestaurantCard {...props} />
      </>
    );
  };
};

export default RestaurantCard;
