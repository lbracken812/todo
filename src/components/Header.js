import React from "react";

const Header = () => {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "2em"
  };
  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>
        Basic ToDo list...
      </h1>
      <p style={{ fontSize: "19px" }}>
        Meet the worlds one-billionth list website. Exactly the same as any other one. Whatever, just write your list below.
      </p>
    </header>
  );
};

export default Header;
