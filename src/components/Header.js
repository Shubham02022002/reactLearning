import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
        <img style={{ width: "100px" }} src={LOGO_URL} alt="restaurantLogo" />
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
            Home
          </li>
          <li
            style={{ cursor: "pointer", transition: "color 0.3s ease" }}
            onMouseOver={(e) => (e.target.style.color = "#007BFF")}
            onMouseOut={(e) => (e.target.style.color = "black")}
          >
            About Us
          </li>
          <li
            style={{ cursor: "pointer", transition: "color 0.3s ease" }}
            onMouseOver={(e) => (e.target.style.color = "#007BFF")}
            onMouseOut={(e) => (e.target.style.color = "black")}
          >
            Services
          </li>
          <li
            style={{ cursor: "pointer", transition: "color 0.3s ease" }}
            onMouseOver={(e) => (e.target.style.color = "#007BFF")}
            onMouseOut={(e) => (e.target.style.color = "black")}
          >
            Cart
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
