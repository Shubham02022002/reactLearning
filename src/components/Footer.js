const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px",
        marginTop: "20px",
        backgroundColor: "#FF6347", // Tomato color
        color: "white",
        borderTop: "1px solid #e0e0e0",
      }}
    >
      <p style={{ margin: 0 }}>© Shubham</p>
      <p style={{ margin: 0 }}>Links</p>
    </div>
  );
};

export default Footer;
