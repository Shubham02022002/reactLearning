import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [error, setError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      fetchMenu();
    }
  }, [resID, latitude, longitude]);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          setError(null);
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  const fetchMenu = async () => {
    try {
      const response = await axios.get(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&Complete-menu=true&lat=${latitude}&lng=${longitude}&restaurantId=${resID}&submitAction=ENTER`
      );
      console.log("API Response:", response.data);
      setResInfo(response.data);
    } catch (error) {
      setError("Error fetching menu");
      console.error("Error fetching menu:", error);
    }
  };

  console.log("resInfo:", resInfo);

  const restaurantInfo = resInfo?.data?.cards[2]?.card?.card?.info || {};
  console.log("Restaurant Info:", restaurantInfo);

  const { name = "", costForTwoMessage = "", cuisines = [] } = restaurantInfo;
  console.log("Restaurant Name:", name);
  const urlForImg = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/`;
  const itemNameArr =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card?.itemCards || [];
  console.log("Item Name Array:", itemNameArr);

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#f2f2f2",
        padding: "20px",
      }}
    >
      {error && <p style={{ color: "red" }}>{error}</p>}
      {name && (
        <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>{name}</h1>
      )}
      {cuisines.length > 0 && (
        <h2
          style={{
            fontSize: "24px",
            marginBottom: "10px",
            fontStyle: "italic",
          }}
        >
          {cuisines.join(", ")}
        </h2>
      )}
      {costForTwoMessage && (
        <h2
          style={{ fontSize: "24px", marginBottom: "10px", fontWeight: "bold" }}
        >
          {costForTwoMessage}
        </h2>
      )}
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {itemNameArr.length > 0 ? (
          itemNameArr.map((item) => (
            <div
              key={item.card.info.id}
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
                margin: "10px",
                padding: "20px",
                width: "300px",
              }}
            >
              <img
                src={`${urlForImg}${item.card.info.imageId}`}
                alt={item.card.info.name}
                style={{ width: "100%", borderRadius: "10px" }}
              />

              <h3 style={{ fontSize: "24px", marginBottom: "5px" }}>
                {item.card.info.name}
              </h3>
              <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                {item.card.info.description}
              </p>
              <h4 style={{ fontSize: "20px", marginBottom: "5px" }}>
                &#8377;{Number(item.card.info.price / 100).toFixed(2)}
              </h4>
            </div>
          ))
        ) : (
          <p>No menu items found.</p>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
