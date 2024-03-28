import React from "react";
import { useCount } from "../hooks/useCount";

const PageOne = () => {
  const { count, incrementCount, decrementCount } = useCount();
  return (
    <div className="sub-page">
      <div style={{ position: "relative" }}>
        <h2 className="page-title">Page One</h2>
      </div>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <h2>{`Count: ${count}`}</h2>
        <div className="counter">
          <button onClick={incrementCount}>INCREMENT</button>
          <button onClick={decrementCount}>DECREMENT</button>
        </div>
      </div>
    </div>
  );
};

export default PageOne;
