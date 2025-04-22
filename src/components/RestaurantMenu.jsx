import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { MENU_API } from "./utils/constants";

const RestaurantMenu = () => {
  const [resData, setResData] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);

    setResData(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card
        ?.card?.categories ||
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
          ?.card?.categories
    );
  };

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
