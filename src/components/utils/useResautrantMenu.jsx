import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resData, setResData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();

    const categoryData =
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    const filteredCategory = categoryData.filter(
      (category) =>
        category?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    );

    setResData(filteredCategory);
  };

  return resData;
};

export default useRestaurantMenu;
