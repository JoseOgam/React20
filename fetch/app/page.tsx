"use client";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const add = () => {
    setCounter(counter + 1);
  };

  const reset = () => {
    setCounter(0);
  };

  const remove = () => {
    setCounter(counter - 1);
  };
  return (
    <main className="content-center ">
      <div>
        <h2>{counter}</h2>
        <button
          onClick={add}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          ADD
        </button>
        <button
          onClick={reset}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          RESET
        </button>
        <button
          onClick={remove}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          REMOVE
        </button>
      </div>
    </main>
  );
}
