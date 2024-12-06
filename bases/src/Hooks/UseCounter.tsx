import { useState } from "react";

export const UseCounter = () => {
  const [count, setcount] = useState(10);

  const increaseBy = (value: number) => {
    // setcount(count + value);
    setcount(Math.max(value + count, 0));
  };
  return {
    count,
    increaseBy,
  };
};
