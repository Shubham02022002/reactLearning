import React, { useState } from "react";
import ResturantCard from "./ResturantCard";
import data from "../utils/mockData";

const Body = () => {
  const [resturantList, setResturantList] = useState(data);
  return (
    <div
      style={{
        backgroundColor: "#FFF5EE",
        height: "100%",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
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
        <button
          onClick={() => {
            const filteredResturants = resturantList.filter(
              (resturant) => resturant.info.avgRating > 4.5
            );
            setResturantList(filteredResturants);
          }}
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
          Top Rated Resturants 
        </button>
        <button
          onClick={() => {
            setResturantList(data);
          }}
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
          Show All Resturants   
        </button>
      </div>

      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {resturantList.map((restaurant) => (
          <ResturantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
