import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_API } from "./utils/constants";
import useRestaurantMenu from "./utils/useResautrantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  return resData === null ? (
    <div className="loader-resMenu"></div>
  ) : (
    <div>
      <h1>{resData[0]?.title}</h1>
      {resData[0]?.itemCards.map((el) => {
        return (
          <div className="res-menu-container" key={el?.card?.info?.id}>
            <h4>Name: {el?.card?.info?.name}</h4>
            <p>Desc: {el?.card?.info?.description}</p>
            <p>final Price: {el?.card?.info?.price / 100} rupees</p>
            <p>Rating: {el?.card?.info?.ratings?.aggregatedRating?.rating}</p>
          </div>
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
