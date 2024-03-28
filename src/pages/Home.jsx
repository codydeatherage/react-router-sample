import React from "react";
import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        style={{
          display: "flex",
          height: 80,
          width: "100vw",
          backgroundColor: "blue",
        }}
      >
        <div onClick={() => navigate("/")}>
          <h1>Home</h1>
        </div>
        <div className="header-buttons">
          <button onClick={() => navigate("/one")}>Page One</button>
          <button onClick={() => navigate("/two")}>Page Two</button>
          <button onClick={() => navigate("/three")}>Page Three</button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Home;
