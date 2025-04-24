import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_API } from "./utils/constants";
import useRestaurantMenu from "./utils/useResautrantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resData = useRestaurantMenu(resId);

  return resData === null ? (
    <div className="w-full h-20 bg-gray-300 animate-pulse m-5 rounded-lg"></div>
  ) : (
    <div className="m-5 w-1/2">
      <h1 className="border px-4 py-2 rounded-lg text-center shadow-lg bg-blue-200">
        {resData[0]?.title}
      </h1>
      {resData[0]?.itemCards.map((el) => {
        return (
          <div
            className="my-5 border px-4 py-2 rounded-lg w-1/2"
            key={el?.card?.info?.id}
          >
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
