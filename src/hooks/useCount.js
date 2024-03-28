import React, { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setCount((prev) => prev - 1);
  };

  //same as return {count: count, incrementCount: incrementCount, decrementCount: decrementCount}
  return { count, incrementCount, decrementCount };
};
