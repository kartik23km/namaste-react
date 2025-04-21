import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resData from "./utils/mockData";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resData);
  function handleFilter() {
    const filteredData = resData.filter((res) => res.info.avgRating >= 4.5);
    setListOfRestaurant(filteredData);
  }

  return (
    <div className="body">
      <div className="search"></div>
      <div className="filter">
        <button
          onClick={() => setListOfRestaurant(resData)}
          className="filter-btn"
        >
          All Restaurants
        </button>
        <button onClick={() => handleFilter()} className="filter-btn">
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
export default Body;
