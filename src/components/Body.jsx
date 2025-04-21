import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { API } from "./utils/constants";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [searchList, setSearchList] = useState(listOfRestaurant);
  const [searchText, setSearchText] = useState("");

  function handleFilter() {
    const filteredData = listOfRestaurant.filter(
      (res) => res.info.avgRating >= 4.0
    );
    setSearchList(filteredData);
  }

  function handleSearch() {
    const searchData = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchList(searchData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API);
    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button onClick={() => handleSearch()}>Search</button>
        </div>
        <div className="filter">
          <button
            onClick={() => setSearchList(listOfRestaurant)}
            className="filter-btn"
          >
            All Restaurants
          </button>
          <button onClick={() => handleFilter()} className="filter-btn">
            Top Rated Restaurants
          </button>
        </div>

        <div className="res-container">
          {searchList.map((res) => (
            <RestaurantCard key={res.info.id} resData={res} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
