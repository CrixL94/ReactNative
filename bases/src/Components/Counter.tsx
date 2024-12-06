import { useState } from "react";

export const Counter = () => {
  const [count, setcount] = useState(10);

  const increaseBy = (value: number) => {
    // setcount(count + value);
    setcount(Math.max(value + count,0))
  };
  return (
    <>
      <h3 className="text-2xl">
        Contador: <small className="font-semibold">{count}</small>
      </h3>

      <div className="mt-2">
        <button
          onClick={() => increaseBy(+1)}
          className="p-2 bg-blue-500 rounded-xl w-20 mx-2 text-white"
        >
          +1
        </button>
        <button
          onClick={() => increaseBy(-1)}
          className="p-2 bg-blue-500 rounded-xl w-20 mx-2 text-white"
        >
          -1
        </button>
      </div>
    </>
  );
};
