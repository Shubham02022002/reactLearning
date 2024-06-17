import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [button, setButton] = useState("Login");

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#FF6347",
        padding: "10px 20px",
        borderBottom: "1px solid #e0e0e0",
        borderRadius: "2px",
      }}
    >
      <div>
        <Link to="/">
          <img style={{ width: "100px" }} src={LOGO_URL} alt="restaurantLogo" />
        </Link>
      </div>
      <nav style={{ display: "flex" }}>
        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyleType: "none",
            padding: 0,
            margin: 0,
          }}
        >
          <li
            style={{ cursor: "pointer", transition: "color 0.3s ease" }}
            onMouseOver={(e) => (e.target.style.color = "#007BFF")}
            onMouseOut={(e) => (e.target.style.color = "black")}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            style={{ cursor: "pointer", transition: "color 0.3s ease" }}
            onMouseOver={(e) => (e.target.style.color = "#007BFF")}
            onMouseOut={(e) => (e.target.style.color = "black")}
          >
            <Link to="/about">About Us</Link>
          </li>
          <li
            style={{ cursor: "pointer", transition: "color 0.3s ease" }}
            onMouseOver={(e) => (e.target.style.color = "#007BFF")}
            onMouseOut={(e) => (e.target.style.color = "black")}
          >
            <Link to="/services">Services</Link>
          </li>
          <li
            style={{ cursor: "pointer", transition: "color 0.3s ease" }}
            onMouseOver={(e) => (e.target.style.color = "#007BFF")}
            onMouseOut={(e) => (e.target.style.color = "black")}
          >
            <Link to="/cart">Cart</Link>
          </li>

          <li>
            <button
              onClick={() => {
                setButton((prevState) =>
                  prevState === "Login" ? "Logout" : "Login"
                );
              }}
            >
              {button}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
