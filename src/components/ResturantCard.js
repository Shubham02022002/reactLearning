import { CDN_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const ResturantCard = ({ resData }) => {
  const { cloudinaryImageId, name, areaName, costForTwo, avgRating, sla, id } =
    resData.info;
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "300px",
        width: "150px",
        margin: "10px",
        padding: "10px",
        border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease",
      }}
      onClick={() => {
        navigate(`/restaurants/${id}`);
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src={`${CDN_URL}${cloudinaryImageId}`}
        style={{ width: "100px", borderRadius: "8px" }}
        alt=""
      />
      <h2 style={{ fontSize: "1.2em", margin: "10px 0 5px 0" }}>{name}</h2>
      <p style={{ margin: "5px 0", color: "#555" }}>{areaName}</p>
      {/* <p style={{ margin: "5px 0", color: "#777" }}>{cuisines.join(", ")}</p> */}
      <p style={{ margin: "5px 0", color: "#666" }}>{costForTwo}</p>
      <p style={{ margin: "5px 0", color: "#888" }}>{avgRating} ⭐</p>
      <p style={{ margin: "5px 0", color: "#999" }}>{sla.deliveryTime} Min</p>
    </div>
  );
};

export default ResturantCard;
