import React from "react";

const Shimmer = () => {
  const shimmerArray = Array(10).fill(0);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "10px", 
      }}
    >
      {shimmerArray.map((_, index) => (
        <div
          key={index}
          style={{
            height: "300px",
            width: "150px",
            margin: "10px",
            padding: "10px",
            border: "1px solid black",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div
            style={{
              height: "100px",
              width: "100px",
              borderRadius: "8px",
              backgroundColor: "#ccc",
              marginBottom: "10px",
              animation: "pulse 1s infinite",
            }}
          ></div>
          <div
            style={{
              height: "1em",
              width: "80%",
              borderRadius: "8px",
              backgroundColor: "#ccc",
              marginBottom: "5px",
              
            }}
          ></div>
          <div
            style={{
              height: "1em",
              width: "70%",
              borderRadius: "8px",
              backgroundColor: "#ccc",
              marginBottom: "5px",
              
            }}
          ></div>
          <div
            style={{
              height: "1em",
              width: "60%",
              borderRadius: "8px",
              backgroundColor: "#ccc",
              marginBottom: "5px",
              
            }}
          ></div>
          <div
            style={{
              height: "1em",
              width: "50%",
              borderRadius: "8px",
              backgroundColor: "#ccc",
              
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
