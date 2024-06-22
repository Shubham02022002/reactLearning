import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [originalRestaurantList, setOriginalRestaurantList] = useState([]);
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.659465916416142&lng=77.47289534658194&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();
      const restaurants =
        json?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setOriginalRestaurantList(restaurants);
      setRestaurantList(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    if (searchVal === "") {
      setRestaurantList(originalRestaurantList);
    } else {
      const filteredRestaurants = originalRestaurantList.filter(
        (restaurant) => {
          return restaurant.info.name
            .toLowerCase()
            .includes(searchVal.toLowerCase());
        }
      );
      setRestaurantList(filteredRestaurants);     
      if (filteredRestaurants.length == 0) {
        toast.error("Restaurant not found!");
        fetchData();
      } else {
        toast.success("Fill your tummy😋");
      }
    }
  };

  const handleTopRated = () => {
    const filteredRestaurants = originalRestaurantList.filter(
      (restaurant) => restaurant.info.avgRating >= 4.5
    );
    setRestaurantList(filteredRestaurants);
  };

  const handleReset = () => {
    setSearchVal("");
    setRestaurantList(originalRestaurantList);
  };

  return !restaurantList || restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div
      style={{
        backgroundColor: "#FFF5EE",
        height: "100%",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <div>
        <Toaster />
      </div>
      <div
        style={{
          marginBottom: "20px",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap",
          padding: "10px",
          borderRadius: "10px",
          backgroundColor: "#f2f2f2",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <input
          id="search-box"
          type="text"
          value={searchVal}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s, transform 0.3s",
          }}
          placeholder="Search Restaurants"
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s, transform 0.3s",
          }}
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          onClick={handleTopRated}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s, transform 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.98)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          Top Rated Restaurants
        </button>
        <button
          onClick={handleReset}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            transition: "background-color 0.3s, transform 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
          onMouseDown={(e) => (e.target.style.transform = "scale(0.98)")}
          onMouseUp={(e) => (e.target.style.transform = "scale(1)")}
        >
          Show All Restaurants
        </button>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {restaurantList.map((restaurant) => (
          <ResturantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
