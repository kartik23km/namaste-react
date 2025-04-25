import { useEffect, useState } from "react";
import RestaurantCard, { openRestaurants } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { API } from "./utils/constants";
import { Link } from "react-router";

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

  const OpenRestaurantComponent = openRestaurants(RestaurantCard);

  return listOfRestaurant.length === 0 ? (
    <div className="w-full p-5">
      <div className="flex gap-2">
        <div className=" w-2xl bg-gray-200 animate-pulse h-16 rounded-lg"></div>
        <div className="bg-gray-200 animate-pulse h-16 rounded-lg w-20"></div>
      </div>
      <div className="flex gap-2 mt-5">
        <div className="bg-gray-200 animate-pulse h-16 rounded-lg w-40"></div>
        <div className="bg-gray-200 animate-pulse h-16 rounded-lg w-40"></div>
      </div>
      <div className="flex gap-5 mt-5">
        <div className="w-80 h-80 rounded-lg bg-gray-200 animate-pulse"></div>
        <div className="w-80 h-80 rounded-lg bg-gray-200 animate-pulse"></div>
        <div className="w-80 h-80 rounded-lg bg-gray-200 animate-pulse"></div>
        <div className="w-80 h-80 rounded-lg bg-gray-200 animate-pulse"></div>
      </div>
    </div>
  ) : (
    <>
      <div className="body p-5">
        <div className="search">
          <input
            className="border px-4 py-2 w-2xl rounded-md mr-2"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
          />
          <button
            className="bg-red-300 px-4 py-2 rounded-lg cursor-pointer hover:shadow-lg"
            onClick={() => handleSearch()}
          >
            Search
          </button>
        </div>
        <div className="filter flex my-4 gap-5">
          <button
            className="bg-red-300 px-4 py-2 rounded-lg cursor-pointer hover:shadow-lg"
            onClick={() => setSearchList(listOfRestaurant)}
          >
            All Restaurants
          </button>
          <button
            onClick={() => handleFilter()}
            className="bg-red-300 px-4 py-2 rounded-lg cursor-pointer hover:shadow-lg"
          >
            Top Rated Restaurants
          </button>
        </div>
        <p>**Some items may break due to uneven API response**</p>
        <div className="res-container flex flex-wrap">
          {searchList.length === 0 && <h1>No Content Available</h1>}
          {searchList.map((res) => (
            <Link key={res.info.id} to={"/restaurant/" + res?.info?.id}>
              {res?.info?.availability?.opened ? (
                <OpenRestaurantComponent restData={res} />
              ) : (
                <RestaurantCard resData={res} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default Body;
