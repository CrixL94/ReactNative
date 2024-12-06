import { UseCounter } from "../Hooks/UseCounter";

export const Counter = () => {
  const {count , increaseBy} =  UseCounter()

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
